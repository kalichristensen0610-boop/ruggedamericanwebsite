'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useEffect,useRef} from 'react';
import {ArrowLeft,ArrowRight,Check,Facebook,Instagram,Phone,ShieldCheck,Star} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {GutterEstimateSteps} from '@/components/gutter-estimate-steps';
import {business} from '@/lib/data';

type Props={
  campaign:string;
  badge:string;
  headline:string;
  highlight:string;
  description:string;
  cta:string;
  terms:string;
  videoSrc:string;
  videoPoster:string;
  videoTitle:string;
};

const benefits=[
  'Seamless gutter runs formed onsite for your home',
  'Five inch and six inch gutter options',
  'Custom downspout placement and drainage planning',
  'Lifetime workmanship warranty on qualifying installations',
];

const leaves=[
  ['🍂','6%','0s','12s'],['🍁','16%','-4s','15s'],['🍂','28%','-9s','13s'],['🍁','42%','-2s','17s'],
  ['🍃','55%','-11s','16s'],['🍂','68%','-6s','14s'],['🍁','81%','-13s','18s'],['🍃','93%','-7s','15s'],
];

const projectPhotos=[
  ['/fall-projects/img_4035.webp','Completed dark gutter system on a two-story home','Two-story roofline'],
  ['/fall-projects/img_0584.webp','Close detail of a dark gutter and downspout installation','Custom corner detail'],
  ['/fall-projects/img_0623.webp','Dark seamless gutter and downspout along a brick home','Long seamless run'],
  ['/fall-projects/img_0504.webp','White seamless gutter viewed along the roof edge','Clean white gutter line'],
  ['/fall-projects/img_0835.webp','White gutter and downspout installed on a brick garage','Garage drainage'],
  ['/fall-projects/img_0625.webp','Dark downspout installed beside a covered patio','Patio drainage'],
  ['/fall-projects/img_0842.webp','White seamless gutter installed along a home addition','Finished roofline'],
  ['/fall-projects/img_9596.webp','Completed gutter system on a single-story brick home','Whole-home system'],
  ['/fall-projects/img_9599.webp','White downspout installed on a brick home','Downspout detail'],
  ['/fall-projects/img_0837.webp','White gutter system installed beneath a bright North Texas sky','Bright finished roofline'],
  ['/fall-projects/img_0502.webp','Close roof and shingle detail during exterior work','Roofline detail'],
  ['/fall-projects/black-gutters-white-brick-home.webp','Black seamless gutters wrapping a white brick North Texas home','Black seamless system'],
  ['/fall-projects/black-gutters-red-brick-home.webp','Black gutters and downspout on a red brick home','Black on red brick'],
];

export function FallGutterOfferPage({campaign,badge,headline,highlight,description,cta,terms,videoSrc,videoPoster,videoTitle}:Props){
  const galleryRef=useRef<HTMLDivElement>(null);
  const galleryPaused=useRef(false);
  const moveGallery=(direction:number)=>galleryRef.current?.scrollBy({left:direction*galleryRef.current.clientWidth*.78,behavior:'smooth'});
  useEffect(()=>{const timer=window.setInterval(()=>{const gallery=galleryRef.current;if(!gallery||galleryPaused.current)return;const nearEnd=gallery.scrollLeft+gallery.clientWidth>=gallery.scrollWidth-24;if(nearEnd)gallery.scrollTo({left:0,behavior:'smooth'});else gallery.scrollBy({left:gallery.clientWidth*.78,behavior:'smooth'});},4200);return()=>window.clearInterval(timer)},[]);
  return <>
    <style dangerouslySetInnerHTML={{__html:`
      @keyframes fall-leaf{0%{transform:translate3d(0,-14vh,0) rotate(0deg);opacity:0}10%{opacity:.85}50%{transform:translate3d(45px,48vh,0) rotate(190deg)}100%{transform:translate3d(-25px,112vh,0) rotate(430deg);opacity:.15}}
      @keyframes offer-pulse{0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(244,85,20,.35)}50%{transform:scale(1.035);box-shadow:0 0 0 14px rgba(244,85,20,0)}}
      .fall-leaf{position:absolute;top:-12vh;z-index:2;pointer-events:none;animation:fall-leaf var(--duration) linear infinite;animation-delay:var(--delay);filter:drop-shadow(0 5px 5px rgba(0,0,0,.25));will-change:transform}
      .fall-offer-badge{animation:offer-pulse 2.8s ease-in-out infinite}
      .fall-gallery-photo{animation:gallery-breathe 9s ease-in-out infinite alternate}
      @keyframes gallery-breathe{from{transform:scale(1)}to{transform:scale(1.018)}}
      .fall-pumpkin{animation:pumpkin-bob 3.4s ease-in-out infinite;filter:drop-shadow(0 8px 8px rgba(0,0,0,.18))}
      .fall-pumpkin:nth-child(2){animation-delay:-1.2s}.fall-pumpkin:nth-child(3){animation-delay:-2.1s}
      @keyframes pumpkin-bob{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-8px) rotate(3deg)}}
      @media(prefers-reduced-motion:reduce){.fall-leaf,.fall-offer-badge{animation:none}.fall-leaf{display:none}}
    `}}/>
    <section className="relative overflow-hidden bg-ink px-5 py-12 text-white sm:px-8 md:py-20">
      <Image src="/estimate-a-assets/hero-black-gutters.jpg" alt="Seamless gutters installed on a North Texas home in fall" fill priority sizes="100vw" className="object-cover object-center"/>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-[#4b2818]/75"/>
      <div className="grain absolute inset-0 opacity-25"/>
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">{leaves.map(([leaf,left,delay,duration],index)=><span className="fall-leaf text-2xl sm:text-3xl" style={{left,'--delay':delay,'--duration':duration} as React.CSSProperties} key={index}>{leaf}</span>)}</div>
      <div className="relative mx-auto grid max-w-7xl gap-12 xl:grid-cols-2 xl:items-start xl:gap-20">
        <div className="min-w-0 max-w-2xl xl:pt-8">
          <div className="fall-offer-badge mb-8 inline-flex rounded-md border-2 border-[#ffbd59] bg-oxide px-6 py-3 text-base font-black uppercase tracking-[.1em] text-ink">{badge}</div>
          <p className="text-xs font-black uppercase tracking-[.24em] text-[#ffbd59]">Limited fall gutter special</p>
          <h1 className="mt-4 max-w-2xl font-sans text-[clamp(2.35rem,5vw,4.6rem)] font-black uppercase leading-[1.08] tracking-[-.015em]">{headline}<span className="mt-3 block text-oxide">{highlight}</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{description}</p>
          <ul className="mt-8 grid gap-4">{benefits.map(item=><li className="flex items-start gap-3 text-sm font-bold text-white/90" key={item}><Check className="mt-0.5 shrink-0 text-[#ffbd59]" size={18}/>{item}</li>)}</ul>
          <div className="mt-8 flex flex-wrap gap-3"><Button asChild><a href="#fall-offer-form">{cta} <ArrowRight size={16}/></a></Button><Button variant="outline" asChild><a href={`tel:${business.phoneHref}`}><Phone size={16}/> Call {business.phone}</a></Button></div>
          <p className="mt-5 max-w-xl text-xs leading-5 text-white/55">{terms}</p>
        </div>
    <div id="fall-offer-form" className="min-w-0 w-full max-w-2xl scroll-mt-28 rounded-2xl border-t-8 border-oxide bg-white p-6 text-ink shadow-[0_24px_70px_rgba(0,0,0,.35)] sm:p-10"><h2 className="sr-only">Your free gutter estimate</h2><GutterEstimateSteps campaign={campaign as 'estimate-a'|'seamless-gutters-10-off'}/></div>
      </div>
    </section>

    <section className="bg-[#f4eadc] px-4 py-20"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
      <div><p className="text-xs font-black uppercase tracking-[.22em] text-oxide">BEAT FALL DEBRIS</p><h2 className="mt-3 font-display text-4xl uppercase sm:text-6xl">Get your roofline ready before the leaves pile up.</h2><p className="mt-5 text-lg leading-8 text-ink/70">A well-planned seamless gutter system helps move North Texas rain away from your roofline, siding, landscaping, walkways, and foundation—without unnecessary seams along each run.</p><div className="mt-8"><Button asChild><a href="#fall-offer-form">Get My Free Estimate</a></Button></div></div>
      <div className="relative min-h-[380px] overflow-hidden border-4 border-white shadow-[10px_10px_0_#6f3b22] sm:min-h-[500px]"><Image src="/estimate-a-assets/hero-black-gutters.jpg" alt="White seamless gutter and downspout installed above a garage" fill sizes="(min-width:1024px) 55vw,100vw" className="object-cover"/></div>
    </div></section>

    <section className="bg-white px-4 py-20"><div className="mx-auto max-w-7xl"><p className="text-xs font-black uppercase tracking-[.22em] text-oxide">BUILT AT YOUR HOME</p><h2 className="mt-3 max-w-4xl font-display text-4xl uppercase sm:text-6xl">Seamless gutters sized for your actual roofline.</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{[
      ['01','Measure & Plan','We evaluate roof area, pitch, valleys, runoff, and downspout locations.'],
      ['02','Form Onsite','Continuous gutter runs are formed at your home for a clean, custom fit.'],
      ['03','Install & Protect','We install the system, review drainage, clean up, and stand behind the workmanship.'],
    ].map(([n,title,copy])=><article className="border border-ink/15 bg-white p-7 shadow-[6px_6px_0_#f3f0ec]" key={n}><span className="font-display text-5xl text-oxide">{n}</span><h3 className="mt-4 font-display text-2xl uppercase">{title}</h3><p className="mt-3 leading-7 text-ink/70">{copy}</p></article>)}</div></div></section>

    <section className="bg-ink px-4 py-20 text-white"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-sm font-black uppercase tracking-[.2em] text-[#ffbd59]">HEAR IT FROM CALEB</p><h2 className="mt-3 font-sans text-4xl font-black uppercase leading-[1.08] tracking-[-.01em] sm:text-5xl">{videoTitle}</h2><p className="mt-5 text-lg leading-8 text-white/70">A quick explanation of this limited fall offer from the owner of Rugged American Exteriors.</p><div className="mt-7"><Button asChild><a href="#fall-offer-form">Get My Free Estimate</a></Button></div></div><div className="mx-auto w-full max-w-[430px] overflow-hidden rounded-2xl border-4 border-white/15 bg-black shadow-[14px_14px_0_#f45514]"><video className="aspect-[9/16] w-full object-cover" controls playsInline preload="metadata" poster={videoPoster} aria-label={videoTitle}><source src={videoSrc} type="video/mp4"/>Your browser does not support embedded video.</video></div></div></section>

    <section className="overflow-hidden bg-steel py-20"><div className="mx-auto max-w-7xl px-4"><p className="text-xs font-black uppercase tracking-[.22em] text-oxide">REAL NORTH TEXAS INSTALLATIONS</p><div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><h2 className="max-w-4xl font-sans text-4xl font-black uppercase leading-[1.1] tracking-[-.01em] sm:text-6xl">More completed systems. More real homes.</h2><p className="mt-4 max-w-sm text-ink/65">The gallery moves automatically, or you can swipe and explore.</p></div><div className="flex gap-3"><button onClick={()=>moveGallery(-1)} aria-label="Previous project" className="grid h-12 w-12 place-items-center border-2 border-ink bg-white text-ink shadow-[4px_4px_0_#f45514] transition hover:-translate-y-1"><ArrowLeft/></button><button onClick={()=>moveGallery(1)} aria-label="Next project" className="grid h-12 w-12 place-items-center border-2 border-ink bg-white text-ink shadow-[4px_4px_0_#f45514] transition hover:-translate-y-1"><ArrowRight/></button></div></div></div><div ref={galleryRef} onPointerEnter={()=>galleryPaused.current=true} onPointerLeave={()=>galleryPaused.current=false} onTouchStart={()=>galleryPaused.current=true} onTouchEnd={()=>galleryPaused.current=false} className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(1rem,calc((100vw-80rem)/2))] pb-8 [scrollbar-color:#f45514_#d9d5cf]">{projectPhotos.map(([src,alt,title],index)=><figure className="group w-[84vw] max-w-[760px] shrink-0 snap-center overflow-hidden bg-white shadow-[7px_7px_0_#6f3b22] sm:w-[68vw] lg:w-[54vw]" key={src}><div className="relative aspect-[4/3] overflow-hidden bg-ink sm:aspect-[16/10]"><Image src={src} alt={alt} fill sizes="(min-width:1024px) 54vw,(min-width:640px) 68vw,84vw" className={`fall-gallery-photo object-contain transition duration-500 group-hover:scale-[1.025] ${index%2?'[animation-delay:-3s]':''}`}/></div><figcaption className="flex items-center justify-between border-t-2 border-oxide px-4 py-3 text-sm font-bold uppercase tracking-[.08em] text-ink/75"><span>{title}</span><span className="text-oxide">{String(index+1).padStart(2,'0')}</span></figcaption></figure>)}</div></section>

    <section className="bg-white px-4 py-20"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div className="relative min-h-[620px] overflow-hidden border-4 border-[#f4eadc] bg-[#ede6dc] shadow-[10px_10px_0_#f45514]"><Image src="/caleb-kali-fall.webp" alt="Caleb and Kali Christensen wearing Rugged American Exteriors hats" fill sizes="(min-width:1024px) 44vw,100vw" className="object-contain"/></div><div><p className="text-sm font-black uppercase tracking-[.2em] text-oxide">MEET THE CHRISTENSENS</p><h2 className="mt-3 font-sans text-4xl font-black uppercase leading-[1.08] tracking-[-.01em] sm:text-6xl">A family behind every promise.</h2><p className="mt-5 text-xl font-black text-ink">Caleb Christensen • Owner</p><p className="mt-2 text-base font-black uppercase tracking-[.12em] text-oxide">Local • Family Owned • Veteran Owned</p><p className="mt-5 text-lg leading-8 text-ink/75">We know what it feels like to invite someone onto your property and trust them with your home. That is why we believe in honest answers, clear communication, and work we would be proud to put on our own home. When you call Rugged American Exteriors, you are working with Caleb, Kali, and a North Texas team that cares about earning your trust.</p><blockquote className="mt-7 border-l-4 border-oxide bg-[#f4eadc] p-6"><p className="text-xl font-bold italic leading-8 text-ink">“Whatever you do, work at it with all your heart, as working for the Lord.”</p><cite className="mt-3 block text-sm font-black not-italic uppercase tracking-[.16em] text-oxide">Colossians 3:23</cite></blockquote><div className="mt-7 grid gap-3 sm:grid-cols-2">{['Free, no-pressure estimates','Straightforward recommendations','Respect for your property','Lifetime workmanship warranty'].map(item=><div className="flex items-center gap-3 border-l-4 border-oxide bg-[#f4eadc] p-4 font-bold" key={item}><Check className="shrink-0 text-oxide"/>{item}</div>)}</div></div></div></section>

    <section className="bg-[#6f3b22] px-4 py-20 text-white"><div className="mx-auto max-w-7xl"><p className="text-xs font-black uppercase tracking-[.22em] text-[#ffbd59]">REAL CUSTOMER EXPERIENCES</p><h2 className="mt-3 max-w-4xl font-display text-4xl uppercase leading-[1.12] tracking-normal sm:text-6xl">North Texas homeowners trust our work.</h2><div className="mt-10 grid gap-6 lg:grid-cols-3">{[
      ['“Rugged American Paint & Exteriors did an excellent job installing our new gutters with leaf filters. Caleb and his crew were professional, on time, and their workmanship was outstanding.”','Anne Barret'],
      ['“Caleb and James did me so well. They were very professional and thorough. They cleaned up everything and I would recommend them to anybody.”','Joyce M.'],
      ['“Did amazing work. Great craftsmanship.”','Fred Garcia'],
    ].map(([quote,name])=><figure className="flex min-h-64 flex-col justify-between border border-white/20 bg-white/10 p-7" key={name}><blockquote className="text-lg leading-8 text-white/85">{quote}</blockquote><figcaption className="mt-6 font-black uppercase tracking-wide text-[#ffbd59]">★★★★★ &nbsp; {name}</figcaption></figure>)}</div><div className="mt-10"><Button asChild><a href={business.reviewsUrl} target="_blank" rel="noopener noreferrer"><Star size={17}/> See More Reviews on Google</a></Button></div></div></section>

    <section className="bg-[#f4eadc] px-4 py-20"><div className="mx-auto max-w-6xl border border-ink/20 border-t-[10px] border-t-oxide bg-white px-6 py-12 text-center shadow-[10px_10px_0_#6f3b22] sm:px-12"><div className="flex items-center gap-5"><span className="h-px flex-1 bg-ink/25"/><p className="font-sans text-xl font-black uppercase tracking-[.12em] text-oxide sm:text-2xl">WE ARE SOCIAL</p><span className="h-px flex-1 bg-ink/25"/></div><h2 className="mx-auto mt-5 max-w-3xl font-sans text-4xl font-black uppercase leading-[1.1] tracking-[-.01em] sm:text-5xl">Follow the crew and see what we are building.</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-ink/65">Recent projects, behind-the-scenes work, and more from your local Rugged American team.</p><div className="mt-8 flex flex-wrap justify-center gap-4 border-t border-ink/15 pt-8"><a className="inline-flex min-h-14 min-w-44 items-center justify-center gap-3 rounded-md bg-[#1877f2] px-6 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0f67d8]" href={business.facebookUrl} target="_blank" rel="noopener noreferrer"><Facebook size={20}/> Facebook</a><a className="inline-flex min-h-14 min-w-44 items-center justify-center gap-3 rounded-md bg-gradient-to-r from-[#833ab4] via-[#e1306c] to-[#f77737] px-6 font-black text-white shadow-lg transition hover:-translate-y-0.5" href={business.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={20}/> Instagram</a></div></div></section>

    <section className="relative overflow-hidden bg-gradient-to-r from-[#f45514] via-[#ef7622] to-[#c9571d] px-4 py-16 text-ink"><div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_20%_30%,#fff_0_2px,transparent_3px)] [background-size:28px_28px]"/><div aria-hidden="true" className="fall-pumpkin absolute -bottom-5 left-2 h-32 w-48 sm:left-6 sm:h-44 sm:w-72"><Image src="/fall-pumpkins.png" alt="" fill sizes="288px" className="object-contain object-bottom"/></div><div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 pl-0 sm:pl-72 md:flex-row md:items-center"><div><div className="flex items-center gap-3 text-ink/80"><ShieldCheck/><span className="text-xs font-black uppercase tracking-[.2em]">LOCAL • FAMILY OWNED • VETERAN OWNED</span></div><h2 className="mt-4 max-w-4xl font-sans text-4xl font-black uppercase leading-[1.08] tracking-[-.01em] sm:text-5xl">{badge.includes('$500')?'Ready to save $500 this fall?':'Ready to beat the leaves this fall?'}</h2><p className="mt-3 font-bold text-ink/75">A little fall color. A lot more protection for your home.</p></div><div className="flex flex-wrap gap-3"><Button className="bg-ink text-white hover:bg-ink/90" asChild><a href="#fall-offer-form">{cta}</a></Button><Button variant="outline" className="border-ink bg-white/80 text-ink" asChild><Link href="/reviews">See Reviews</Link></Button></div></div></section>
  </>;
}
