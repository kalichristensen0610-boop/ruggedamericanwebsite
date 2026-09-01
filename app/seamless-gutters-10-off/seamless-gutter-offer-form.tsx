'use client';

import {useEffect,useRef,useState} from 'react';
import {ArrowLeft,ArrowRight} from 'lucide-react';
import {Button} from '@/components/ui/button';

const attributionFields=['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','fbclid','msclkid'] as const;

export function SeamlessGutterOfferForm(){
  const formRef=useRef<HTMLFormElement>(null);
  const [step,setStep]=useState(1);
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [projectType,setProjectType]=useState('');
  const [contactTime,setContactTime]=useState('');
  const [squareFeet,setSquareFeet]=useState('');
  const [startedAt]=useState(()=>Date.now());
  const [returnTo,setReturnTo]=useState('/seamless-gutters-10-off');
  const [attribution,setAttribution]=useState<Record<string,string>>({});
  const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle');

  useEffect(()=>{
    const url=new URL(window.location.href);
    const result=url.searchParams.get('estimate_status');
    url.searchParams.delete('estimate_status');
    const cleanLocation=`${url.pathname}${url.search}`;
    setReturnTo(cleanLocation);
    setAttribution(Object.fromEntries(attributionFields.map(field=>[field,url.searchParams.get(field)||''])));
    if(result==='success') setStatus('success');
    if(result==='error') setStatus('error');
    if(result) window.history.replaceState({},'',`${cleanLocation}${url.hash}`);
  },[]);

  function nextStep(){
    const fields=Array.from(formRef.current?.querySelectorAll<HTMLInputElement>('[data-step-one]')||[]);
    const invalid=fields.find(field=>!field.checkValidity());
    if(invalid){invalid.reportValidity();return;}
    setStep(2);
    window.setTimeout(()=>formRef.current?.querySelector<HTMLElement>('[data-step-two] input, [data-step-two] select')?.focus(),0);
  }

  const message=`10% off seamless gutter campaign. Project: ${projectType||'Not selected'}. Best contact time: ${contactTime||'Not selected'}. Approximate home size: ${squareFeet||'Not selected'}.`;

  if(status==='success') return <div className="mt-7 border-l-8 border-green-700 bg-green-50 p-6 text-green-950" role="status" tabIndex={-1}>
    <p className="text-xs font-black uppercase tracking-[.2em] text-green-800">Request received</p>
    <h3 className="mt-2 font-display text-3xl uppercase">Thank you. We’ll be in contact soon.</h3>
    <p className="mt-3 leading-7">Your seamless gutter estimate request was sent successfully. A member of the Rugged American Exteriors team will reach out to discuss your project.</p>
  </div>;

  return <form ref={formRef} name="seamless_gutter_10_off" method="post" action="/api/estimate" encType="multipart/form-data" className="mt-6" onSubmit={()=>setStatus('sending')}>
    <div className="mb-6 grid grid-cols-2 gap-3" aria-label={`Step ${step} of 2`}><div className={`h-2 ${step>=1?'bg-oxide':'bg-ink/15'}`}/><div className={`h-2 ${step>=2?'bg-oxide':'bg-ink/15'}`}/></div>

    <fieldset hidden={step!==1} className="grid gap-4 border-0 p-0">
      <legend className="mb-4 font-display text-2xl uppercase">Step 1: Your information</legend>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" name="first_name" value={firstName} onChange={setFirstName} autoComplete="given-name" stepOne/>
        <Field label="Last name" name="last_name" value={lastName} onChange={setLastName} autoComplete="family-name" stepOne/>
      </div>
      <Field label="Phone number" name="phone" type="tel" autoComplete="tel" stepOne/>
      <Field label="Email address" name="email" type="email" autoComplete="email" stepOne/>
      <Button type="button" onClick={nextStep}>Next <ArrowRight size={16}/></Button>
    </fieldset>

    <fieldset hidden={step!==2} data-step-two className="grid gap-4 border-0 p-0">
      <legend className="mb-4 font-display text-2xl uppercase">Step 2: Your gutter project</legend>
      <label className="grid gap-1 text-sm font-bold">Property address
        <input name="address" required autoComplete="street-address" className="focus-ring min-h-12 border border-ink/30 bg-white px-3"/>
      </label>
      <label className="grid gap-1 text-sm font-bold">What do you need?
        <select name="project_type" required value={projectType} onChange={event=>setProjectType(event.target.value)} className="focus-ring min-h-12 border border-ink/30 bg-white px-3">
          <option value="" disabled>Select one</option><option>New seamless gutter installation</option><option>Replace existing gutters</option><option>Not sure yet</option>
        </select>
      </label>
      <label className="grid gap-1 text-sm font-bold">Best time of day to contact you
        <select name="best_contact_time" required value={contactTime} onChange={event=>setContactTime(event.target.value)} className="focus-ring min-h-12 border border-ink/30 bg-white px-3">
          <option value="" disabled>Select one</option><option>Morning</option><option>Afternoon</option><option>Evening</option><option>Any time</option>
        </select>
      </label>
      <label className="grid gap-1 text-sm font-bold">Approximate square footage of your home
        <select name="home_square_feet" required value={squareFeet} onChange={event=>setSquareFeet(event.target.value)} className="focus-ring min-h-12 border border-ink/30 bg-white px-3">
          <option value="" disabled>Select a range</option><option>Under 1,500 sq. ft.</option><option>1,500 to 2,499 sq. ft.</option><option>2,500 to 3,499 sq. ft.</option><option>3,500+ sq. ft.</option><option>Not sure</option>
        </select>
      </label>
      <div className="grid grid-cols-[auto_1fr] gap-3"><Button type="button" variant="outline" onClick={()=>setStep(1)} aria-label="Return to step one"><ArrowLeft size={16}/></Button><Button type="submit" disabled={status==='sending'}>{status==='sending'?'Sending…':'Claim My 10% Off'}</Button></div>
    </fieldset>

    <input type="hidden" name="name" value={`${firstName} ${lastName}`.trim()}/>
    <input type="hidden" name="service" value="Gutter installation"/>
    <input type="hidden" name="message" value={message}/>
    <input type="hidden" name="contact" value="Phone"/>
    <input type="hidden" name="startedAt" value={startedAt}/>
    <input type="hidden" name="return_to" value={returnTo}/>
    <input type="hidden" name="landing_page" value="seamless-gutters-10-off"/>
    {attributionFields.map(field=><input type="hidden" name={field} value={attribution[field]||''} key={field}/>)}
    <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off"/></label></div>

    {status==='error'&&<p className="mt-5 border-l-4 border-red-700 bg-red-50 p-4 font-bold text-red-900" role="alert">We could not send your request. Please try again or call (817) 262-7170.</p>}
    <p className="mt-4 text-xs leading-5 text-ink/55">By submitting, you agree that Rugged American Exteriors may contact you about this request. Offer terms apply.</p>
  </form>;
}

function Field({label,name,type='text',autoComplete,stepOne,value,onChange}:{label:string;name:string;type?:string;autoComplete?:string;stepOne?:boolean;value?:string;onChange?:(value:string)=>void}){
  return <label className="grid gap-1 text-sm font-bold">{label}<input data-step-one={stepOne?'true':undefined} name={name} type={type} required autoComplete={autoComplete} value={value} onChange={onChange?event=>onChange(event.target.value):undefined} className="focus-ring min-h-12 border border-ink/30 bg-white px-3"/></label>;
}
