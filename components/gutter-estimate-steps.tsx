'use client';
import {useEffect,useRef,useState} from 'react';
import './gutter-estimate-steps.css';
const keys=['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','fbclid','msclkid'];
 const titles=['Is your property in Dallas-Fort Worth or a nearby community?','Are you the homeowner?','What can we help you with?','When would you like it done?','Where should we send your free estimate?'];
export function GutterEstimateSteps({campaign}:{campaign:string}){
 const ref=useRef<HTMLFormElement>(null);
 const [step,setStep]=useState(0);
 const [values,setValues]=useState<Record<string,string>>({});
 const [sending,setSending]=useState(false);
 const [error,setError]=useState(false);
 const [startedAt]=useState(()=>Date.now());
 const [returnTo,setReturnTo]=useState('/'+campaign);
 const [attribution,setAttribution]=useState<Record<string,string>>({});
 useEffect(()=>{const url=new URL(window.location.href);setError(url.searchParams.get('estimate_status')==='error');url.searchParams.delete('estimate_status');setReturnTo(url.pathname+url.search);setAttribution(Object.fromEntries(keys.map(key=>[key,url.searchParams.get(key)||''])));},[]);
 function update(name:string,value:string){setValues(old=>({...old,[name]:value}));}
 function go(next:number){setStep(next);requestAnimationFrame(()=>ref.current?.querySelector<HTMLElement>('.rae-wizard-title')?.focus());}
 function field(label:string,name:string,type='text',autoComplete?:string){return <label className="rae-wizard-field">{label}<input name={name} type={type} autoComplete={autoComplete} placeholder={name==='phone'?'(817) 555-0123':name==='email'?'you@example.com':label} required value={values[name]||''} onChange={e=>update(name,e.target.value)} minLength={name==='phone'?7:name==='address'?3:1} maxLength={type==='email'?254:160}/></label>;}
 function choices(name:string,options:string[]){return <div className="rae-wizard-choices">{options.map(option=><label key={option} className={'rae-wizard-choice '+(values[name]===option?'rae-wizard-selected':'')}><input type="radio" name={name} value={option} checked={values[name]===option} onChange={()=>update(name,option)} required/><span>{option}</span></label>)}</div>;}
 return <form ref={ref} className="rae-wizard" name={campaign.replaceAll('-','_')} method="post" action="/api/estimate" encType="multipart/form-data" noValidate onSubmit={event=>{
   if(sending){event.preventDefault();return;}
   const fields=Array.from(ref.current?.querySelectorAll<HTMLInputElement>('fieldset:not([hidden]) input')||[]);
   const invalid=fields.find(field=>!field.checkValidity());
   if(invalid){event.preventDefault();invalid.reportValidity();return;}
   if(step<4){event.preventDefault();go(step+1);return;}
   setSending(true);
 }}>
 <p className="rae-wizard-intro">Your free estimate starts here.</p>
 <div className="rae-wizard-progress" role="progressbar" aria-label="Estimate progress" aria-valuemin={0} aria-valuemax={5} aria-valuenow={step+1}><span style={{width:((step+1)*20)+'%'}}/></div>
 <p className="rae-wizard-step" aria-live="polite">Step {step+1} of 5</p>
 <h3 className="rae-wizard-title" tabIndex={-1}>{titles[step]}</h3>

 <p className="rae-wizard-hint">Choose an answer below. Your contact details come at the end.</p>
 <fieldset hidden={step!==0}><legend className="rae-wizard-sr">Service area</legend>{choices('service_area',['Yes','Not sure / Nearby','No'])}</fieldset>
 <fieldset hidden={step!==1}><legend className="rae-wizard-sr">Homeowner</legend>{choices('homeowner',['Yes','No / Helping the owner'])}</fieldset>
 <fieldset hidden={step!==2}><legend className="rae-wizard-sr">Gutter project</legend>{choices('project_type',['New seamless gutters','Gutter replacement','Gutter guards','Gutter repair','Gutter cleaning','Not sure / Need advice'])}</fieldset>
 <fieldset hidden={step!==3}><legend className="rae-wizard-sr">Timeline</legend>{choices('project_timeline',['As soon as possible','Within a month','1 to 3 months','Just planning / Getting prices'])}</fieldset>
 <fieldset hidden={step!==4}><legend className="rae-wizard-sr">Your contact information</legend><div className="rae-wizard-names">{field('First name','first_name','text','given-name')}{field('Last name','last_name','text','family-name')}</div>{field('Phone number','phone','tel','tel')}{field('Email address','email','email','email')}{field('Property address or ZIP','address','text','street-address')}</fieldset>
 <div className="rae-wizard-actions">{step>0&&<button type="button" className="rae-wizard-back" disabled={sending} onClick={()=>go(step-1)}>Back</button>}<button className="rae-wizard-next" type="submit" disabled={sending}>{sending?'Sending…':step<4?'Next →':'Get My Free Estimate'}</button></div>
 <input type="hidden" name="name" value={((values.first_name||'')+' '+(values.last_name||'')).trim()}/>
 <input type="hidden" name="service" value={values.project_type||''}/>
 <input type="hidden" name="message" value={'Campaign: '+campaign+'. Project: '+(values.project_type||'')+'. Service area: '+(values.service_area||'')+'. Homeowner: '+(values.homeowner||'')+'. Timeline: '+(values.project_timeline||'')+'.'}/>
 <input type="hidden" name="contact" value="Phone"/><input type="hidden" name="startedAt" value={startedAt}/><input type="hidden" name="return_to" value={returnTo}/><input type="hidden" name="landing_page" value={campaign}/>
 {keys.map(key=><input type="hidden" key={key} name={key} value={attribution[key]||''}/>)}
 <div className="rae-wizard-sr" aria-hidden="true"><label>Leave empty<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
 {error&&<p role="alert">We couldn’t send your request. Please try again or call (817) 262-7170.</p>}
 <p className="rae-wizard-note">By submitting, you agree that Rugged American Exteriors may contact you about this request.{campaign==='seamless-gutters-10-off'?' The 10% offer applies to eligible seamless gutter installation and replacement; offer terms apply.':''}</p>
 </form>;
}
