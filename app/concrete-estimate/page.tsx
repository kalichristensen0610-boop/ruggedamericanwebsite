import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowRight,Check,Facebook,HardHat,Instagram,Phone,ShieldCheck,Star} from 'lucide-react';
import {ConcreteEstimateSteps} from '@/components/concrete-estimate-steps';
import {Button} from '@/components/ui/button';
import {business} from '@/lib/data';

export const metadata:Metadata={
  title:'15% Off Concrete | Fall Concrete Special',
  description:'Save 15% on qualifying concrete patios, driveways, sidewalks, stamped concrete, slabs, and more with a free North Texas estimate.',
  robots:{index:false,follow:false},
};

const services=[
  ['Driveways','New driveways, replacement sections, and practical extensions with clean edges and a durable finish.'],
  ['Patios','Outdoor living spaces built for grilling, furniture, entertaining, and everyday family time.'],
  ['Sidewalks & Walkways','Clean, dependable paths that improve access and connect the spaces around your property.'],
  ['Stamped Concrete','Decorative patterns, textures, and color options that give concrete a more customized finish.'],
  ['Slabs','Concrete slabs for sheds, equipment, additions, shops, and other residential or commercial needs.'],
  ['Demo & Replacement','Removal of damaged or unwanted concrete, site preparation, forming, pouring, and finishing.'],
];

export default function ConcreteEstimatePage(){return <main className="overflow-hidden bg-[#f4f1eb] text-ink">
  <style dangerouslySetInnerHTML={{__html:`
    @keyframes concrete-leaf-fall{0%{transform:translate3d(0,-12vh,0) rotate(0);opacity:0}12%{opacity:.85}55%{transform:translate3d(36px,50vh,0) rotate(190deg)}100%{transform:translate3d(-18px,112vh,0) rotate(430deg);opacity:.1}}
    @keyframes concrete-offer-pulse{0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(244,85,20,.35)}50%{transform:scale(1.035);box-shadow:0 0 0 14px rgba(244,85,20,0)}}
    .concrete-fall-leaf{position:absolute;top:-12vh;z-index:2;pointer-events:none;animation:concrete-leaf-fall var(--duration) linear infinite;animation-delay:var(--delay);filter:drop-shadow(0 5px 5px rgba(0,0,0,.24))}
    .concrete-offer-badge{animation:concrete-offer-pulse 2.8s ease-in-out infinite}
    @media(prefers-reduced-motion:reduce){.concrete-fall-leaf,.concrete-offer-badge{animation:none}.concrete-fall-leaf{display:none}}
  `}}/>
  <header className="border-b-4 border-oxide bg-white px-4 py-4 shadow-md">
    <div className="mx-auto flex max-w-7xl justify-center"><Link href="/" aria-label="Rugged American Exteriors home" className="inline-flex p-2"><Image src="/rugged-american-exteriors-logo-transparent.png" alt="Rugged American Exteriors" width={2058} height={764} priority className="h-16 w-auto sm:h-20"/></Link></div>
  </header>

  <section className="relative bg-ink px-5 py-14 text-white sm:px-8 md:py-20">
    <Image src="/concrete-landing/concrete-driveway-hero.webp" alt="Finished concrete driveway at a North Texas home" fill priority sizes="100vw" className="object-cover"/>
    <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-[#56301f]/55"/><div className="grain absolute inset-0 opacity-20"/>
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">{[['🍂','7%','-2s','13s'],['🍁','21%','-8s','16s'],['🍂','39%','-4s','14s'],['🍁','61%','-10s','17s'],['🍃','79%','-6s','15s'],['🍂','94%','-12s','18s']].map(([leaf,left,delay,duration],index)=><span className="concrete-fall-leaf text-2xl sm:text-3xl" style={{left,'--delay':delay,'--duration':duration} as React.CSSProperties} key={index}>{leaf}</span>)}</div>
    <div className="relative mx-auto grid max-w-7xl gap-12 xl:grid-cols-[1.05fr_.95fr] xl:items-start xl:gap-16">
      <div className="max-w-3xl xl:pt-8">
        <p className="concrete-offer-badge inline-flex border-2 border-[#ffbd59] bg-oxide px-6 py-3 text-xl font-black uppercase tracking-[.1em] text-ink">15% Off</p>
        <p className="mt-8 text-sm font-black uppercase tracking-[.22em] text-[#ffbd59]">Limited fall concrete special</p>
        <h1 className="mt-4 font-sans text-[clamp(2.7rem,6vw,5.6rem)] font-black uppercase leading-[.95] tracking-[-.025em]">Pour this fall.<span className="mt-3 block text-oxide">Save 15%.</span></h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">Patios, driveways, sidewalks, stamped concrete, slabs, demolition, and more—planned around your property and completed by a local, family owned, veteran owned team.</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">{['Free, no-pressure estimates','Two-year workmanship warranty','Clear project communication','Residential & commercial work'].map(item=><li className="flex items-center gap-3 font-bold" key={item}><Check className="shrink-0 text-[#ffbd59]" size={19}/>{item}</li>)}</ul>
        <div className="mt-9 flex flex-wrap gap-3"><Button asChild><a href="#concrete-form">Claim My 15% Off <ArrowRight size={16}/></a></Button><Button variant="outline" asChild><a href={`tel:${business.phoneHref}`}><Phone size={16}/> Call {business.phone}</a></Button></div>
        <p className="mt-5 max-w-2xl text-xs leading-5 text-white/55">Offer applies to qualifying concrete projects completed by Rugged American Exteriors. Cannot be combined with other offers. Project minimums, scheduling, and additional terms may apply. Contact us for complete details.</p>
      </div>
      <div id="concrete-form" className="scroll-mt-6 rounded-2xl border-t-8 border-oxide bg-white p-6 text-ink shadow-[0_24px_70px_rgba(0,0,0,.4)] sm:p-9"><p className="text-xs font-black uppercase tracking-[.2em] text-oxide">15% off qualifying fall projects</p><h2 className="mt-2 font-sans text-3xl font-black uppercase leading-tight">Request your free concrete estimate.</h2><p className="mt-3 text-sm leading-6 text-ink/65">Tell us what you are planning and choose the closest concrete service. Photos are welcome.</p><ConcreteEstimateSteps/></div>
    </div>
  </section>

  <section className="border-b border-ink/10 bg-white px-4 py-7"><div className="mx-auto grid max-w-7xl gap-5 text-center sm:grid-cols-3"><div><strong className="block text-xl text-oxide">LOCAL</strong><span className="text-sm font-bold text-ink/60">Serving North Texas</span></div><div><strong className="block text-xl text-oxide">FAMILY & VETERAN OWNED</strong><span className="text-sm font-bold text-ink/60">People you can call directly</span></div><div><strong className="block text-xl text-oxide">2-YEAR WARRANTY</strong><span className="text-sm font-bold text-ink/60">Workmanship coverage</span></div></div></section>

  <section className="px-4 py-20"><div className="mx-auto max-w-7xl"><p className="text-xs font-black uppercase tracking-[.22em] text-oxide">Concrete for the way you use your property</p><div className="mt-3 grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><h2 className="font-sans text-4xl font-black uppercase leading-[1.05] sm:text-6xl">From everyday access to better outdoor living.</h2><p className="text-lg leading-8 text-ink/65">We help property owners turn worn, uneven, or unfinished areas into clean, useful concrete surfaces.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(([title,copy],index)=><article className="border border-ink/15 bg-white p-7 shadow-[6px_6px_0_#d8d2c8]" key={title}><span className="font-display text-5xl text-oxide">0{index+1}</span><h3 className="mt-4 font-sans text-2xl font-black uppercase">{title}</h3><p className="mt-3 leading-7 text-ink/65">{copy}</p></article>)}</div></div></section>

  <section className="bg-ink px-4 py-20 text-white"><div className="mx-auto max-w-7xl"><p className="text-xs font-black uppercase tracking-[.22em] text-[#ffbd59]">Real work + design inspiration</p><h2 className="mt-3 max-w-4xl font-sans text-4xl font-black uppercase leading-[1.05] sm:text-6xl">Concrete that looks as good as it works.</h2><div className="mt-10 grid auto-rows-[280px] gap-5 md:grid-cols-2 lg:auto-rows-[390px]">{[
    ['/concrete-landing/real-stamped-patio.webp','Finished decorative stamped concrete patio','Stamped patio — real project'],
    ['/concrete-landing/real-concrete-patio.webp','Freshly finished concrete patio beside a brick home','Fresh patio — real project'],
    ['/concrete-landing/real-concrete-walkway-upright.webp','New curved concrete walkway at a North Texas home','Curved walkway — real project'],
    ['/concrete-landing/stamped-concrete-patio.webp','Stamped concrete patio design inspiration','Patio design inspiration'],
  ].map(([src,alt,label])=><figure className="group relative overflow-hidden border-4 border-white/10 shadow-[8px_8px_0_#f45514]" key={src}><Image src={src} alt={alt} fill sizes="(min-width:768px) 50vw,100vw" className="object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-16"><figcaption className="font-sans text-xl font-black uppercase sm:text-2xl">{label}</figcaption></div></figure>)}</div><p className="mt-7 text-sm font-bold text-white/60">Real project photos are labeled above. Inspiration imagery helps show additional finish and layout possibilities.</p></div></section>

  <section className="bg-[#6f3b22] px-4 py-20 text-white"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden border-4 border-white/15 shadow-[12px_12px_0_#ffbd59]"><Image src="/concrete-landing/caleb-kali-owners-upright.webp" alt="Caleb and Kali, the local owners of Rugged American Exteriors" fill sizes="(min-width:1024px) 42vw,90vw" className="object-cover object-center"/></div><div><p className="text-xs font-black uppercase tracking-[.22em] text-[#ffbd59]">Meet Caleb & Kali</p><h2 className="mt-3 font-sans text-4xl font-black uppercase leading-[1.05] sm:text-6xl">Local owners. Real people. Your neighbors.</h2><p className="mt-6 text-lg leading-8 text-white/80">We know what it means to trust someone with your home or business. As a local, family owned and veteran owned company, Caleb, Kali, and the Rugged American team believe in straight answers, respectful job sites, and work we would be proud to put at our own home.</p><div className="mt-7 flex items-center gap-4 border-l-4 border-[#ffbd59] bg-white/10 p-5"><ShieldCheck className="shrink-0 text-[#ffbd59]" size={34}/><div><strong className="block uppercase">Two-year workmanship warranty</strong><span className="text-sm text-white/60">Ask us about coverage and project-specific terms.</span></div></div></div></div><div className="mt-12 grid gap-4 md:grid-cols-2">{[['“Caleb and the entire team treated me so well. They were professional, thorough, and cleaned up everything when they were finished.”','Joyce Merrill'],['“Caleb is very professional and easy to work with. Scheduling was a breeze.”','Christi Gilpin']].map(([quote,name])=><figure className="border border-white/20 bg-white/10 p-7" key={name}><Star className="fill-[#ffbd59] text-[#ffbd59]"/><blockquote className="mt-4 text-lg leading-8 text-white/85">{quote}</blockquote><figcaption className="mt-5 font-black uppercase tracking-wide text-[#ffbd59]">{name}</figcaption></figure>)}</div></div></section>

  <section className="bg-[#f4f1eb] px-4 py-20"><div className="mx-auto max-w-6xl border border-ink/20 border-t-[10px] border-t-oxide bg-white px-6 py-12 text-center shadow-[10px_10px_0_#6f3b22] sm:px-12"><HardHat className="mx-auto text-oxide" size={42}/><p className="mt-4 text-sm font-black uppercase tracking-[.18em] text-oxide">Fall concrete special</p><h2 className="mt-3 font-sans text-4xl font-black uppercase leading-[1.05] sm:text-5xl">Ready to save 15% on your concrete project?</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-ink/65">Tell us what you want to build, replace, expand, or improve. We will help you find the right next step.</p><div className="mt-8 flex flex-wrap justify-center gap-4"><Button asChild><a href="#concrete-form">Claim My 15% Off</a></Button><Button variant="outline" asChild><a href={`tel:${business.phoneHref}`}><Phone size={17}/> {business.phone}</a></Button></div><div className="mt-10 flex flex-wrap justify-center gap-4 border-t border-ink/15 pt-8"><a className="inline-flex min-h-14 min-w-44 items-center justify-center gap-3 rounded-md bg-[#1877f2] px-6 font-black text-white" href={business.facebookUrl} target="_blank" rel="noopener noreferrer"><Facebook size={20}/> Facebook</a><a className="inline-flex min-h-14 min-w-44 items-center justify-center gap-3 rounded-md bg-gradient-to-r from-[#833ab4] via-[#e1306c] to-[#f77737] px-6 font-black text-white" href={business.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={20}/> Instagram</a></div></div></section>
</main>;}

