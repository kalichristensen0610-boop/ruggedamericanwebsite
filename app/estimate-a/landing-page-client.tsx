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
      form.removeAttribute('target');
      form.removeAttribute('data-rae-preview-form');
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
      ensureHidden('startedAt',String(Date.now()));
      attributionFields.forEach(field=>ensureHidden(field,params.get(field)||''));
      ensureHidden('landing_page','estimate-a');

      const returnUrl=new URL(window.location.href);
      const result=returnUrl.searchParams.get('estimate_status');
      returnUrl.searchParams.delete('estimate_status');
      const cleanLocation=`${returnUrl.pathname}${returnUrl.search}`;
      ensureHidden('return_to',cleanLocation);
      if(result){
        const status=form.querySelector<HTMLElement>('.rae-form-status');
        if(status){
          status.hidden=false;
          status.textContent=result==='success'
            ?'Thank you. Your request was sent successfully. Our team will be in touch soon.'
            :'We could not send your request. Please check the form and try again, or call us directly.';
          if(result==='success'){
            Array.from(form.children).forEach(child=>{
              if(child!==status) (child as HTMLElement).hidden=true;
            });
            status.setAttribute('tabindex','-1');
            status.focus();
          }
        }
        window.history.replaceState({},'',`${cleanLocation}${returnUrl.hash}`);
      }

      const handleSubmit=()=>{
        if(!form.reportValidity()) return;
        const status=form.querySelector<HTMLElement>('.rae-form-status');
        const button=form.querySelector<HTMLButtonElement>('button[type="submit"]');
        ensureHidden('name',`${(form.elements.namedItem('first_name') as HTMLInputElement)?.value||''} ${(form.elements.namedItem('last_name') as HTMLInputElement)?.value||''}`.trim());
        ensureHidden('return_to',cleanLocation);
        if(status){status.hidden=false;status.textContent='Sending your request securely…';}
        if(button){button.disabled=true;button.textContent='Sending…';}
      };
      form.addEventListener('submit',handleSubmit);
      cleanups.push(()=>form.removeEventListener('submit',handleSubmit));
    }

    return ()=>cleanups.forEach(cleanup=>cleanup());
  },[]);

  return <div ref={container} dangerouslySetInnerHTML={{__html:html}}/>;
}
