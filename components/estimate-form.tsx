'use client';

import {useEffect,useState} from 'react';
import {Button} from './ui/button';

const serviceGroups={
  Gutters:['Gutter installation','Gutter repair','Gutter guards','Gutter cleaning'],
  Painting:['Exterior painting','Interior painting','Cabinet painting'],
  Roofing:['Roofing inspection','Roofing cash bid','Roofing insurance assistance'],
  Fencing:['Fence installation','Fence replacement','Fence repair'],
  Concrete:['Concrete - tell us more','Concrete form setting or pouring','Concrete demolition','Residential concrete','Commercial concrete','Driveway or walkway','Slab or foundation','Decorative concrete','Patio or pool deck'],
  Other:['Other exterior service'],
} as const;

type ServiceCategory=keyof typeof serviceGroups;
const categories=Object.keys(serviceGroups) as ServiceCategory[];
const allServices:string[]=categories.flatMap(category=>[...serviceGroups[category]]);

export function EstimateForm({compact=false}:{compact?:boolean}){
  const [state,setState]=useState<'idle'|'sending'|'success'|'error'>('idle');
  const [message,setMessage]=useState('');
  const [startedAt]=useState(()=>Date.now());
  const [returnTo,setReturnTo]=useState('/');
  const [category,setCategory]=useState<ServiceCategory|''>('');
  const [service,setService]=useState('');

  useEffect(()=>{
    const url=new URL(window.location.href);
    const result=url.searchParams.get('estimate_status');
    const requestedService=url.searchParams.get('service');
    if(requestedService&&allServices.includes(requestedService)){
      const requestedCategory=categories.find(group=>serviceGroups[group].some(option=>option===requestedService));
      if(requestedCategory) setCategory(requestedCategory);
      setService(requestedService);
    }
    url.searchParams.delete('estimate_status');
    const cleanLocation=`${url.pathname}${url.search}`;
    setReturnTo(cleanLocation);
    if(result==='success'){
      setState('success');
      setMessage('Thank you. Your request was sent successfully. Our team will be in touch soon.');
    }else if(result==='error'){
      setState('error');
      setMessage('We could not send your request. Please check the form and try again, or call (817) 512-9879.');
    }
    if(result) window.history.replaceState({},'',`${cleanLocation}${url.hash}`);
  },[]);

  function submit(){
    setState('sending');
    setMessage('Sending your request securely…');
  }

  return <form id="estimate-form" name="estimate_request" method="post" action="/api/estimate" onSubmit={submit} className="mt-6 grid gap-4" encType="multipart/form-data">
    <div className={compact?'grid gap-4 sm:grid-cols-2':'grid gap-4 md:grid-cols-2'}>
      <Field label="Name" name="name" autoComplete="name" required/>
      <Field label="Phone" name="phone" type="tel" autoComplete="tel" required/>
      <Field label="Email" name="email" type="email" autoComplete="email" required/>
      <Field label="Property address or ZIP" name="address" autoComplete="street-address" required/>
    </div>
    <fieldset className="grid gap-4 border border-ink/20 bg-steel/60 p-4 md:grid-cols-2">
      <legend className="px-2 text-sm font-black uppercase tracking-wide">Service needed</legend>
      <label className="grid gap-1 text-sm font-bold">Project category
        <select name="service_category" required value={category} onChange={event=>{setCategory(event.target.value as ServiceCategory);setService('');}} className="focus-ring min-h-12 border border-ink/30 bg-white px-3">
          <option value="" disabled>Choose a category</option>
          {categories.map(option=><option key={option}>{option}</option>)}
        </select>
      </label>
      <label className="grid gap-1 text-sm font-bold">Specific service
        <select name="service" required disabled={!category} value={service} onChange={event=>setService(event.target.value)} className="focus-ring min-h-12 border border-ink/30 bg-white px-3 disabled:cursor-not-allowed disabled:bg-ink/5 disabled:text-ink/45">
          <option value="" disabled>{category?'Choose a specific service':'Choose a category first'}</option>
          {category&&serviceGroups[category].map(option=><option key={option}>{option}</option>)}
        </select>
      </label>
      <p className="text-xs text-ink/55 md:col-span-2">Choose the main project category first, then select the closest service. If you are unsure, choose the general option and describe the project below.</p>
    </fieldset>
    <label className="grid gap-1 text-sm font-bold">Project details
      <textarea name="message" required minLength={10} maxLength={5000} rows={compact?3:5} className="focus-ring border border-ink/30 bg-white p-3"/>
    </label>
    <div className="grid gap-4 md:grid-cols-2">
      <label className="grid gap-1 text-sm font-bold">Preferred contact
        <select name="contact" className="focus-ring min-h-12 border border-ink/30 bg-white px-3"><option>Phone</option><option>Email</option><option>Text</option></select>
      </label>
      <label className="grid gap-1 text-sm font-bold">Optional photo
        <input name="photo" type="file" accept="image/jpeg,image/png,image/webp" className="focus-ring min-h-12 border border-ink/30 bg-white p-2 text-sm"/>
      </label>
    </div>
    <input name="startedAt" type="hidden" value={startedAt}/>
    <input name="return_to" type="hidden" value={returnTo}/>
    <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
      <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off"/></label>
    </div>
    <Button disabled={state==='sending'} type="submit">{state==='sending'?'Sending…':'Request my free estimate'}</Button>
    {state!=='idle'&&<p role="status" aria-live="polite" className={state==='success'?'border-l-4 border-green-700 bg-green-50 p-3 font-bold text-green-900':state==='error'?'border-l-4 border-red-700 bg-red-50 p-3 font-bold text-red-900':'font-bold text-ink/65'}>{message}</p>}
    <p className="text-xs text-ink/55">Required fields must be completed. Photos may be JPG, PNG, or WebP up to 8 MB. Your information is sent securely to Rugged American Exteriors so we can respond to your request.</p>
  </form>;
}

function Field({label,name,type='text',required,autoComplete}:{label:string;name:string;type?:string;required?:boolean;autoComplete?:string}){
  return <label className="grid gap-1 text-sm font-bold">{label}<input name={name} type={type} required={required} autoComplete={autoComplete} maxLength={type==='email'?254:160} className="focus-ring min-h-12 border border-ink/30 bg-white px-3"/></label>;
}
