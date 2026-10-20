'use client';

import Image from 'next/image';
import {useState} from 'react';

type Project={src:string;alt:string;title:string;category:string};
const categories=['All projects','Gutters','Concrete','Site preparation'];

export function ProjectGallery({projects}:{projects:Project[]}){
  const [category,setCategory]=useState('All projects');
  const [limit,setLimit]=useState(9);
  const filtered=category==='All projects'?projects:projects.filter(project=>project.category===category);
  return <div>
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter project photos">{categories.map(label=>{
      const count=label==='All projects'?projects.length:projects.filter(project=>project.category===label).length;
      return <button key={label} type="button" aria-pressed={category===label} onClick={()=>{setCategory(label);setLimit(9);}} className={`focus-ring inline-flex min-h-12 items-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition ${category===label?'border-oxide bg-oxide text-[#201d1a]':'border-white/20 bg-transparent text-white/80 hover:border-oxide hover:text-white'}`}>{label}<span className={`text-xs ${category===label?'text-[#201d1a]/70':'text-white/50'}`}>{count}</span></button>;
    })}</div>
    <p className="mt-5 text-sm text-white/60" role="status" aria-live="polite">Showing {Math.min(limit,filtered.length)} of {filtered.length} photos{category==='All projects'?'':` in ${category.toLowerCase()}`}.</p>
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.slice(0,limit).map(project=><figure key={project.src} className="group overflow-hidden rounded-xl border border-white/15 bg-[#24221f]"><a href={project.src} target="_blank" rel="noopener noreferrer" aria-label={`Open photo: ${project.title}`} className="focus-ring relative block aspect-[4/3] overflow-hidden bg-[#171614]"><Image src={project.src} alt={project.alt} fill sizes="(min-width:1024px) 33vw,(min-width:640px) 50vw,100vw" className="object-cover transition-transform duration-700 group-hover:scale-105"/><span className="absolute bottom-3 right-3 rounded bg-black/70 px-3 py-2 text-xs font-bold text-white opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">View full photo ↗</span></a><figcaption className="border-t-2 border-oxide px-5 py-5"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#ff8b4e]">{project.category}</p><h3 className="mt-2 text-lg font-bold leading-7 text-white">{project.title}</h3></figcaption></figure>)}</div>
    {limit<filtered.length&&<div className="mt-10 text-center"><button className="focus-ring min-h-12 rounded-md border border-oxide bg-transparent px-7 py-3 font-bold text-[#ff8b4e] transition hover:bg-oxide hover:text-[#201d1a]" type="button" onClick={()=>setLimit(value=>value+9)}>Show more photos</button></div>}
  </div>;
}
