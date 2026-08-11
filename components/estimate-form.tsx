'use client';

import {useState} from 'react';
import {Button} from './ui/button';

const services=['Gutter installation','Gutter repair','Gutter guards','Gutter cleaning','Exterior painting','Interior painting','Cabinet painting','Roofing inspection','Roofing cash bid','Roofing insurance assistance','Fencing','Other exterior service'];

export function EstimateForm({compact=false}:{compact?:boolean}){
  const [state,setState]=useState<'idle'|'sending'|'success'|'error'>('idle');
  const [message,setMessage]=useState('');
  const [startedAt,setStartedAt]=useState(()=>Date.now());

  async function submit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const form=event.currentTarget;
    setState('sending');
    setMessage('Sending your request securely…');
    try{
      const response=await fetch('/api/estimate',{method:'POST',body:new FormData(form)});
      const result=await response.json().catch(()=>({message:'The server returned an unexpected response. Please call (817) 512-9879.'}));
      setMessage(result.message);
      setState(response.ok?'success':'error');
      if(response.ok){
        form.reset();
        setStartedAt(Date.now());
      }
    }catch{
      setState('error');
      setMessage('Your request could not be sent. Check your connection, try again, or call (817) 512-9879.');
    }
  }

  return <form id="estimate-form" name="estimate_request" method="post" action="/api/estimate" onSubmit={submit} className="mt-6 grid gap-4" encType="multipart/form-data">
    <div className={compact?'grid gap-4 sm:grid-cols-2':'grid gap-4 md:grid-cols-2'}>
      <Field label="Name" name="name" autoComplete="name" required/>
      <Field label="Phone" name="phone" type="tel" autoComplete="tel" required/>
      <Field label="Email" name="email" type="email" autoComplete="email" required/>
      <Field label="Property address or ZIP" name="address" autoComplete="street-address" required/>
    </div>
    <label className="grid gap-1 text-sm font-bold">Service needed
      <select name="service" required defaultValue="" className="focus-ring min-h-12 border border-ink/30 bg-white px-3">
        <option value="" disabled>Select a service</option>
        {services.map(service=><option key={service}>{service}</option>)}
      </select>
    </label>
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
