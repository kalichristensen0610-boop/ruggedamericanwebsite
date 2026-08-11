import {NextResponse} from 'next/server';
import {z} from 'zod';
import nodemailer from 'nodemailer';

export const runtime='nodejs';

const DESTINATION_EMAIL='RuggedAmericanExteriors@gmail.com';
const RATE_LIMIT_WINDOW_MS=15*60*1000;
const RATE_LIMIT_MAX=5;
const allowedUploads=['image/jpeg','image/png','image/webp'];
const attributionKeys=['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','fbclid','msclkid','landing_page'] as const;

const schema=z.object({
  name:z.string().trim().min(2,'Enter your name.').max(100),
  phone:z.string().trim().min(7,'Enter a valid phone number.').max(30),
  email:z.string().trim().email('Enter a valid email address.').max(254),
  address:z.string().trim().min(3,'Enter the property address or ZIP code.').max(160),
  service:z.string().trim().min(2,'Select a requested service.').max(80),
  message:z.string().trim().min(10,'Tell us a little more about the project.').max(5000),
  contact:z.enum(['Phone','Email','Text']),
  startedAt:z.coerce.number().int().positive(),
});

type RateEntry={count:number;resetAt:number};
const globalRate=globalThis as typeof globalThis&{estimateRateLimit?:Map<string,RateEntry>};
const rateLimit=globalRate.estimateRateLimit??new Map<string,RateEntry>();
globalRate.estimateRateLimit=rateLimit;

function clientIp(req:Request){
  return req.headers.get('x-real-ip')||req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()||'unknown';
}

function checkRateLimit(ip:string){
  const now=Date.now();
  const existing=rateLimit.get(ip);
  if(!existing||existing.resetAt<=now){
    rateLimit.set(ip,{count:1,resetAt:now+RATE_LIMIT_WINDOW_MS});
    return {allowed:true,retryAfter:0};
  }
  if(existing.count>=RATE_LIMIT_MAX){
    return {allowed:false,retryAfter:Math.max(1,Math.ceil((existing.resetAt-now)/1000))};
  }
  existing.count+=1;
  return {allowed:true,retryAfter:0};
}

function escapeHtml(value:string){
  return value.replace(/[&<>'"]/g,character=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[character]||character));
}

export async function POST(req:Request){
  const limit=checkRateLimit(clientIp(req));
  if(!limit.allowed){
    return NextResponse.json(
      {message:'Too many requests were sent from this connection. Please wait a few minutes or call (817) 512-9879.'},
      {status:429,headers:{'Retry-After':String(limit.retryAfter)}},
    );
  }

  try{
    const form=await req.formData();

    // Hidden honeypot. Bots receive a neutral response without triggering email.
    if(String(form.get('website')||'').trim()){
      return NextResponse.json({message:'Thank you. Your request has been received.'});
    }

    const raw={
      name:String(form.get('name')||''),
      phone:String(form.get('phone')||''),
      email:String(form.get('email')||''),
      address:String(form.get('address')||form.get('location')||''),
      service:String(form.get('service')||''),
      message:String(form.get('message')||form.get('details')||''),
      contact:String(form.get('contact')||''),
      startedAt:String(form.get('startedAt')||''),
    };
    const parsed=schema.safeParse(raw);
    if(!parsed.success){
      return NextResponse.json(
        {message:'Please check the required fields and try again.',errors:parsed.error.flatten().fieldErrors},
        {status:400},
      );
    }

    const elapsed=Date.now()-parsed.data.startedAt;
    if(elapsed<1500||elapsed>24*60*60*1000){
      return NextResponse.json(
        {message:'We could not verify this submission. Please refresh the page and try again, or call (817) 512-9879.'},
        {status:400},
      );
    }

    const photo=form.get('photo');
    let attachment;
    if(photo instanceof File&&photo.size){
      const maximumBytes=(Number(process.env.UPLOAD_MAX_MB)||8)*1024*1024;
      if(photo.size>maximumBytes||!allowedUploads.includes(photo.type)){
        return NextResponse.json(
          {message:'The photo must be a JPG, PNG, or WebP within the 8 MB size limit.'},
          {status:400},
        );
      }
      attachment={
        filename:photo.name.replace(/[^a-zA-Z0-9._-]/g,'_'),
        content:Buffer.from(await photo.arrayBuffer()),
        contentType:photo.type,
      };
    }

    const {SMTP_HOST,SMTP_PORT,SMTP_SECURE,SMTP_USER,SMTP_PASSWORD,SMTP_FROM_EMAIL}=process.env;
    if(!SMTP_HOST||!SMTP_USER||!SMTP_PASSWORD){
      console.error('Estimate email delivery is missing required SMTP environment variables.');
      return NextResponse.json(
        {message:'Email delivery is temporarily unavailable. Please call (817) 512-9879 so we can help you right away.'},
        {status:503},
      );
    }

    const transport=nodemailer.createTransport({
      host:SMTP_HOST,
      port:Number(SMTP_PORT)||587,
      secure:SMTP_SECURE==='true',
      auth:{user:SMTP_USER,pass:SMTP_PASSWORD},
    });

    const data=parsed.data;
    const attribution=attributionKeys
      .map(key=>[key,String(form.get(key)||'').trim()] as const)
      .filter(([,value])=>value);
    const text=[
      'New website request from RuggedAmericanExteriors.com',
      '',
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Requested service: ${data.service}`,
      `Property address or ZIP: ${data.address}`,
      `Preferred contact: ${data.contact}`,
      '',
      'Customer message:',
      data.message,
      ...(attribution.length?['','Advertising attribution:',...attribution.map(([key,value])=>`${key}: ${value}`)]:[]),
    ].join('\n');

    const html=`<h1>New website request</h1>
      <p><strong>Website:</strong> RuggedAmericanExteriors.com</p>
      <table cellpadding="7" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#dddddd">
        <tr><th align="left">Name</th><td>${escapeHtml(data.name)}</td></tr>
        <tr><th align="left">Phone</th><td>${escapeHtml(data.phone)}</td></tr>
        <tr><th align="left">Email</th><td>${escapeHtml(data.email)}</td></tr>
        <tr><th align="left">Requested service</th><td>${escapeHtml(data.service)}</td></tr>
        <tr><th align="left">Property address or ZIP</th><td>${escapeHtml(data.address)}</td></tr>
        <tr><th align="left">Preferred contact</th><td>${escapeHtml(data.contact)}</td></tr>
      </table>
      <h2>Customer message</h2><p>${escapeHtml(data.message).replace(/\n/g,'<br>')}</p>
      ${attribution.length?`<h2>Advertising attribution</h2><table cellpadding="7" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#dddddd">${attribution.map(([key,value])=>`<tr><th align="left">${escapeHtml(key)}</th><td>${escapeHtml(value)}</td></tr>`).join('')}</table>`:''}`;

    await transport.sendMail({
      from:{name:'RuggedAmericanExteriors.com',address:SMTP_FROM_EMAIL||SMTP_USER},
      to:DESTINATION_EMAIL,
      replyTo:{name:data.name,address:data.email},
      subject:`RuggedAmericanExteriors.com | ${data.service} request from ${data.name}`,
      text,
      html,
      attachments:attachment?[attachment]:[],
    });

    return NextResponse.json({success:true,message:'Thank you. Your request was sent successfully. Our team will be in touch soon.'});
  }catch(error){
    console.error('Estimate form delivery failed.',error instanceof Error?error.message:'Unknown error');
    return NextResponse.json(
      {message:'We could not send your request. Please try again or call (817) 512-9879.'},
      {status:500},
    );
  }
}
