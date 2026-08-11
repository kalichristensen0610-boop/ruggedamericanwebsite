'use client';

import {useEffect} from 'react';
import {usePathname} from 'next/navigation';

const selectors=[
  'main > section',
  '#rae-landing-page .rae-hero-copy',
  '#rae-landing-page .rae-form-wrapper',
  '#rae-landing-page .rae-card',
  '#rae-landing-page .rae-service-card',
  '#rae-landing-page .rae-process-grid li',
  '#rae-landing-page .rae-review-card',
  '#rae-landing-page .rae-gallery-grid figure',
  'main article',
  'main .brand-shadow',
  'main .brand-shadow-lg',
].join(',');

export function MotionEffects(){
  const pathname=usePathname();

  useEffect(()=>{
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements=[...document.querySelectorAll<HTMLElement>(selectors)];
    document.body.classList.add('motion-ready');

    elements.forEach((element,index)=>{
      element.classList.add('motion-reveal');
      element.style.setProperty('--motion-delay',`${(index%4)*65}ms`);
    });

    if(reduced){
      elements.forEach(element=>element.classList.add('motion-visible'));
      return ()=>document.body.classList.remove('motion-ready');
    }

    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        entry.target.classList.add('motion-visible');
        observer.unobserve(entry.target);
      });
    },{rootMargin:'0px 0px -8% 0px',threshold:.08});

    elements.forEach(element=>observer.observe(element));
    return ()=>{
      observer.disconnect();
      document.body.classList.remove('motion-ready');
      elements.forEach(element=>{
        element.classList.remove('motion-reveal','motion-visible');
        element.style.removeProperty('--motion-delay');
      });
    };
  },[pathname]);

  return null;
}
