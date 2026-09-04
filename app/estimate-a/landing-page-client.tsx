'use client';

import {useEffect,useRef,useState} from 'react';
import {createPortal} from 'react-dom';
import {GutterEstimateSteps} from '@/components/gutter-estimate-steps';


export function LandingPageClient({html}:{html:string}){
  const container=useRef<HTMLDivElement>(null);
  const [mount,setMount]=useState<HTMLElement|null>(null);

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

    setMount(root.querySelector<HTMLElement>('[data-estimate-wizard]'));

    return ()=>cleanups.forEach(cleanup=>cleanup());
  },[]);

  return <><div ref={container} dangerouslySetInnerHTML={{__html:html}}/>{mount&&createPortal(<GutterEstimateSteps campaign="estimate-a"/>,mount)}</>;
}
