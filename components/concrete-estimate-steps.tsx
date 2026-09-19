'use client';

import {useEffect,useRef,useState} from 'react';
import './gutter-estimate-steps.css';

const attributionKeys=['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','fbclid','msclkid'];
const titles=['Let’s start your free estimate','What are you planning?','When do you need it?','Tell us about your project'];

export function ConcreteEstimateSteps(){
  const formRef=useRef<HTMLFormElement>(null);
  const [step,setStep]=useState(0);
  const [values,setValues]=useState<Record<string,string>>({});
  const [sending,setSending]=useState(false);
  const [error,setError]=useState(false);
  const [startedAt]=useState(()=>Date.now());
  const [returnTo,setReturnTo]=useState('/concrete-estimate');
  const [attribution,setAttribution]=useState<Record<string,string>>({});

  useEffect(()=>{
    const url=new URL(window.location.href);
    setError(url.searchParams.get('estimate_status')==='error');
    url.searchParams.delete('estimate_status');
    setReturnTo(url.pathname+url.search);
    setAttribution(Object.fromEntries(attributionKeys.map(key=>[key,url.searchParams.get(key)||''])));
  },[]);

  function update(name:string,value:string){setValues(old=>({...old,[name]:value}));}
  function go(next:number){setStep(next);requestAnimationFrame(()=>formRef.current?.querySelector<HTMLElement>('.rae-wizard-title')?.focus());}
  function field(label:string,name:string,type='text',autoComplete?:string,required=true){return <label className="rae-wizard-field">{label}<input name={name} type={type} autoComplete={autoComplete} required={required} value={values[name]||''} onChange={event=>update(name,event.target.value)} maxLength={type==='email'?254:160}/></label>;}
  function choices(name:string,options:string[]){return <div className="rae-wizard-choices">{options.map(option=><label key={option} className={'rae-wizard-choice '+(values[name]===option?'rae-wizard-selected':'')}><input type="radio" name={name} value={option} checked={values[name]===option} onChange={()=>update(name,option)} required/><span>{option}</span></label>)}</div>;}

  const message=[
    `Property type: ${values.property_type||''}`,
    `Concrete project: ${values.project_type||''}`,
    `Timeline: ${values.project_timeline||''}`,
    `Project details: ${values.notes||'None provided'}`,
  ].join('\n');

  return <form ref={formRef} className="rae-wizard" name="concrete_estimate" method="post" action="/api/estimate" encType="multipart/form-data" noValidate onSubmit={event=>{
    if(sending){event.preventDefault();return;}
    const fields=Array.from(formRef.current?.querySelectorAll<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>('fieldset:not([hidden]) input, fieldset:not([hidden]) select, fieldset:not([hidden]) textarea')||[]);
    const invalid=fields.find(field=>!field.checkValidity());
    if(invalid){event.preventDefault();invalid.reportValidity();return;}
    if(step<3){event.preventDefault();go(step+1);return;}
    setSending(true);
  }}>
    <div className="rae-wizard-progress" role="progressbar" aria-label="Concrete estimate progress" aria-valuemin={1} aria-valuemax={4} aria-valuenow={step+1}><span style={{width:`${(step+1)*25}%`}}/></div>
    <p className="rae-wizard-step" aria-live="polite">Step {step+1} of 4</p>
    <h3 className="rae-wizard-title" tabIndex={-1}>{titles[step]}</h3>
    <p className="rae-wizard-hint">{step===0?'Tell us who we should contact.':step===1?'Choose the closest match—we can help refine the scope.':step===2?'An estimate is still free if you are only planning.':'Keep it simple—tell us the location and what you would like done.'}</p>

    <fieldset hidden={step!==0}><legend className="rae-wizard-sr">Contact information</legend><div className="rae-wizard-names">{field('First name','first_name','text','given-name')}{field('Last name','last_name','text','family-name')}</div>{field('Email address','email','email','email')}{field('Phone number','phone','tel','tel')}</fieldset>

    <fieldset hidden={step!==1}><legend className="rae-wizard-sr">Property and project</legend><p className="mb-3 text-sm font-black uppercase tracking-wide">Is this residential or commercial?</p>{choices('property_type',['Residential property','Commercial property'])}<p className="mb-3 mt-7 text-sm font-black uppercase tracking-wide">What type of concrete project?</p>{choices('project_type',['Concrete patio','Driveway','Sidewalk or walkway','Stamped / decorative concrete','Concrete slab','Demolition & replacement','Other / Not sure'])}</fieldset>

    <fieldset hidden={step!==2}><legend className="rae-wizard-sr">Project timing</legend>{choices('project_timeline',['As soon as possible','Within 30 days','1–3 months','3–6 months','Just planning / Getting prices'])}</fieldset>

    <fieldset hidden={step!==3}><legend className="rae-wizard-sr">Project details</legend><label className="rae-wizard-field">Tell us a little about the project<textarea name="project_details" rows={7} required value={values.notes||''} onChange={event=>update('notes',event.target.value)} placeholder="Example: We need a stamped patio at our home in Fort Worth. It is roughly 15 × 20 feet, with easy backyard access."/></label><label className="rae-wizard-field">Add a photo if you have one (optional)<input name="photo" type="file" accept="image/jpeg,image/png,image/webp"/></label></fieldset>

    <div className="rae-wizard-actions">{step>0&&<button type="button" className="rae-wizard-back" disabled={sending} onClick={()=>go(step-1)}>Back</button>}<button className="rae-wizard-next" type="submit" disabled={sending}>{sending?'Sending…':step<3?'Next →':'Get My Free Estimate'}</button></div>
    <input type="hidden" name="name" value={`${values.first_name||''} ${values.last_name||''}`.trim()}/><input type="hidden" name="service" value={values.project_type||''}/><input type="hidden" name="message" value={message}/><input type="hidden" name="contact" value="Phone"/><input type="hidden" name="startedAt" value={startedAt}/><input type="hidden" name="return_to" value={returnTo}/><input type="hidden" name="landing_page" value="concrete-estimate"/>
    {attributionKeys.map(key=><input type="hidden" key={key} name={key} value={attribution[key]||''}/>)}
    <div className="rae-wizard-sr" aria-hidden="true"><label>Leave empty<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    {error&&<p role="alert">We couldn’t send your request. Please try again or call {businessPhone}.</p>}
    <p className="rae-wizard-note">By submitting, you agree that Rugged American Exteriors may contact you about this request. The two-year workmanship warranty applies to qualifying projects; project-specific terms apply.</p>
  </form>;
}

const businessPhone='(817) 262-7170';
