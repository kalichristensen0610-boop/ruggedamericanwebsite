'use client';
import {useEffect,useRef,useState} from 'react';
import './gutter-estimate-steps.css';
const keys=['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','fbclid','msclkid'];
 const titles=['Let’s get you a free estimate','Tell us about the project','Tell us about your home','When would you like it done?'];
export function GutterEstimateSteps({campaign}:{campaign:'estimate-a'|'seamless-gutters-10-off'}){
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
   if(step<3){event.preventDefault();go(step+1);return;}
   setSending(true);
 }}>
 <div className="rae-wizard-progress" role="progressbar" aria-label="Estimate progress" aria-valuemin={0} aria-valuemax={4} aria-valuenow={step+1}><span style={{width:((step+1)*25)+'%'}}/></div>
 <p className="rae-wizard-step" aria-live="polite">Step {step+1} of 4</p>
 <h3 className="rae-wizard-title" tabIndex={-1}>{titles[step]}</h3>
 <p className="rae-wizard-hint">{step===0?'Start with your contact information. It only takes a minute.':step===1?'Choose the closest match. We can help with the details.':step===2?'How many stories does your home have?':'Choose your timeline, then tell us where to send your estimate.'}</p>
 <fieldset hidden={step!==0}><legend className="rae-wizard-sr">Your contact information</legend><div className="rae-wizard-names">{field('First name','first_name','text','given-name')}{field('Last name','last_name','text','family-name')}</div>{field('Phone number','phone','tel','tel')}</fieldset>
 <fieldset hidden={step!==1}><legend className="rae-wizard-sr">Gutter project</legend>{choices('project_type',['New seamless gutters','Gutter replacement','Gutter repair','Gutter guards','Gutter cleaning','Not sure / Need advice'])}</fieldset>
 <fieldset hidden={step!==2}><legend className="rae-wizard-sr">Home height</legend>{choices('home_stories',['Single-story home','Two-story home','Three or more stories','Not sure'])}</fieldset>
 <fieldset hidden={step!==3}><legend className="rae-wizard-sr">Timeline and location</legend>{choices('project_timeline',['As soon as possible','Within a month','1–3 months','Just planning / Getting prices'])}{field('Email address','email','email','email')}{field('Property address or ZIP','address','text','street-address')}</fieldset>
 <div className="rae-wizard-actions">{step>0&&<button type="button" className="rae-wizard-back" disabled={sending} onClick={()=>go(step-1)}>Back</button>}<button className="rae-wizard-next" type="submit" disabled={sending}>{sending?'Sending…':step<3?'Next →':'Get My Free Estimate'}</button></div>
 <input type="hidden" name="name" value={((values.first_name||'')+' '+(values.last_name||'')).trim()}/>
 <input type="hidden" name="service" value={values.project_type||''}/>
 <input type="hidden" name="message" value={'Campaign: '+campaign+'. Project: '+(values.project_type||'')+'. Home height: '+(values.home_stories||'')+'. Timeline: '+(values.project_timeline||'')+'.'}/>
 <input type="hidden" name="contact" value="Phone"/><input type="hidden" name="startedAt" value={startedAt}/><input type="hidden" name="return_to" value={returnTo}/><input type="hidden" name="landing_page" value={campaign}/>
 {keys.map(key=><input type="hidden" key={key} name={key} value={attribution[key]||''}/>)}
 <div className="rae-wizard-sr" aria-hidden="true"><label>Leave empty<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
 {error&&<p role="alert">We couldn’t send your request. Please try again or call (817) 262-7170.</p>}
 <p className="rae-wizard-note">By submitting, you agree that Rugged American Exteriors may contact you about this request.{campaign==='seamless-gutters-10-off'?' The 10% offer applies to eligible seamless gutter installation and replacement; offer terms apply.':''}</p>
 </form>;
}
