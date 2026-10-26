'use client';

import {useEffect,useRef} from 'react';
import {usePathname} from 'next/navigation';

export function MotionEffects(){
 const pathname=usePathname();
 const progress=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(preference.matches||!('IntersectionObserver' in window))return;
  const tracked=new Set<HTMLElement>();
  const selector='main h1, main h2, main article, main figure, main .brand-shadow, main .brand-shadow-lg, .rae-home-hero > div > div, .rae-page-hero > div > div, #rae-landing-page .rae-hero-copy, #rae-landing-page .rae-card, #rae-landing-page .rae-service-card, #rae-landing-page .rae-review-card';
  const reveal=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('motion-visible');reveal.unobserve(entry.target);}});
  },{threshold:.06,rootMargin:'0px 0px -24px 0px'});
  function discover(){
   document.querySelectorAll<HTMLElement>(selector).forEach((element,index)=>{
    // Never animate a form or move an active field, including the homepage card.
    if(tracked.has(element)||element.querySelector('form')||element.closest('form, .rae-estimate-spotlight'))return;
    if(element.parentElement?.closest('.motion-reveal'))return;
    tracked.add(element);
    element.style.setProperty('--motion-delay',`${(index%3)*75}ms`);
    element.classList.add('motion-reveal');
    if(element.getBoundingClientRect().top<window.innerHeight&&element.getBoundingClientRect().bottom>0){element.classList.add('motion-visible');}else reveal.observe(element);
   });
  }
  document.body.classList.add('motion-ready');discover();
  const mutations=new MutationObserver(discover);
  const main=document.querySelector('main');if(main)mutations.observe(main,{childList:true,subtree:true});
  let frame=0;
  function update(){frame=0;const range=document.documentElement.scrollHeight-window.innerHeight;const value=range>0?Math.min(1,Math.max(0,window.scrollY/range)):0;if(progress.current)progress.current.style.transform=`scaleX(${value})`;}
  function scroll(){if(!frame)frame=requestAnimationFrame(update);}
  update();window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('resize',scroll);
  function stop(){document.body.classList.remove('motion-ready');}
  preference.addEventListener('change',stop);
  return ()=>{reveal.disconnect();mutations.disconnect();cancelAnimationFrame(frame);window.removeEventListener('scroll',scroll);window.removeEventListener('resize',scroll);preference.removeEventListener('change',stop);document.body.classList.remove('motion-ready');tracked.forEach(element=>{element.classList.remove('motion-reveal','motion-visible');element.style.removeProperty('--motion-delay');});};
 },[pathname]);
 return <div ref={progress} className="rae-scroll-progress" aria-hidden="true"/>;
}
