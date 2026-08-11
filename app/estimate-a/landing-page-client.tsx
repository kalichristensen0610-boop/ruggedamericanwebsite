'use client';

import {useEffect,useRef} from 'react';

const attributionFields=['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','fbclid','msclkid'] as const;

export function LandingPageClient({html}:{html:string}){
  const container=useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const root=container.current?.querySelector<HTMLElement>('#rae-landing-page');
    if(!root) return;

    const cleanups:Array<()=>void>=[];
    const on=<K extends keyof HTMLElementEventMap>(element:HTMLElement,event:K,handler:(event:HTMLElementEventMap[K])=>void)=>{
      element.addEventListener(event,handler as EventListener);
      cleanups.push(()=>element.removeEventListener(event,handler as EventListener));
    };

    root.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link=>on(link,'click',event=>{
      const selector=link.getAttribute('href');
      const target=selector?root.querySelector<HTMLElement>(selector):null;
      if(!target) return;
      event.preventDefault();
      target.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
      if(target.id==='rae-estimate') window.setTimeout(()=>target.querySelector<HTMLElement>('input, select, button')?.focus({preventScroll:true}),450);
    }));

    root.querySelectorAll<HTMLButtonElement>('.rae-faq-item button').forEach(button=>on(button,'click',()=>{
      const expanded=button.getAttribute('aria-expanded')==='true';
      const panelId=button.getAttribute('aria-controls');
      const panel=panelId?root.querySelector<HTMLElement>(`#${panelId}`):null;
      button.setAttribute('aria-expanded',String(!expanded));
      const symbol=button.querySelector('span');
      if(symbol) symbol.textContent=expanded?'+':'−';
      if(panel) panel.hidden=expanded;
    }));

    const form=root.querySelector<HTMLFormElement>('.rae-estimate-form');
    if(form){
      form.method='post';
      form.action='/api/estimate';
      form.name='estimate_a';
      form.removeAttribute('data-rae-preview-form');
      const startedAt=String(Date.now());
      const params=new URLSearchParams(window.location.search);
      const ensureHidden=(name:string,value:string)=>{
        let input=form.elements.namedItem(name) as HTMLInputElement|null;
        if(!input){
          input=document.createElement('input');
          input.type='hidden';
          input.name=name;
          form.appendChild(input);
        }
        input.value=value;
      };
      ensureHidden('message','Paid advertising landing page estimate request.');
      ensureHidden('contact','Phone');
      ensureHidden('startedAt',startedAt);
      attributionFields.forEach(field=>ensureHidden(field,params.get(field)||''));
      ensureHidden('landing_page','estimate-a');

      on(form,'submit',async event=>{
        event.preventDefault();
        if(!form.reportValidity()) return;
        const status=form.querySelector<HTMLElement>('.rae-form-status');
        const button=form.querySelector<HTMLButtonElement>('button[type="submit"]');
        const fields=new FormData(form);
        fields.set('name',`${fields.get('first_name')||''} ${fields.get('last_name')||''}`.trim());
        if(status){status.hidden=false;status.textContent='Sending your request securely…';}
        if(button){button.disabled=true;button.textContent='Sending…';}
        try{
          const response=await fetch('/api/estimate',{method:'POST',body:fields});
          const result=await response.json().catch(()=>({message:'The server returned an unexpected response. Please call us so we can help.'}));
          if(status) status.textContent=result.message;
          if(response.ok){
            form.reset();
            attributionFields.forEach(field=>ensureHidden(field,params.get(field)||''));
            ensureHidden('landing_page','estimate-a');
            ensureHidden('message','Paid advertising landing page estimate request.');
            ensureHidden('contact','Phone');
            ensureHidden('startedAt',String(Date.now()));
          }
        }catch{
          if(status) status.textContent='Your request could not be sent. Check your connection, try again, or call us directly.';
        }finally{
          if(button){button.disabled=false;button.textContent='Get My Free Estimate';}
        }
      });
    }

    return ()=>cleanups.forEach(cleanup=>cleanup());
  },[]);

  return <div ref={container} dangerouslySetInnerHTML={{__html:html}}/>;
}
