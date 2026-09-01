import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowRight,Check,Phone,ShieldCheck} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Eyebrow} from '@/components/sections';
import {ReviewsSection,SocialSection} from '@/components/reviews-social';
import {business} from '@/lib/data';
import {SeamlessGutterOfferForm} from './seamless-gutter-offer-form';

export const metadata:Metadata={
  title:'10% Off Seamless Gutter Installation',
  description:'Save 10% on a qualifying seamless gutter installation from Rugged American Exteriors. Request a free North Texas gutter estimate.',
  robots:{index:false,follow:false},
};

const benefits=[
  'Seamless gutter runs formed onsite for your home',
  'Five inch and six inch gutter options',
  'Hand fabricated custom corners without strip miters',
  'Custom downspout placement and drainage planning',
  'Lifetime workmanship warranty on qualifying installations',
];

export default function SeamlessGuttersOffer(){
  return <>
    <section className="relative overflow-hidden bg-ink px-4 py-16 text-white md:py-24">
      <Image src="/gallery/dark-gutters-two-story-home.webp" alt="Dark seamless gutters installed on a two story North Texas home" fill priority sizes="100vw" className="object-cover object-center"/>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/45"/>
      <div className="grain absolute inset-0 opacity-25"/>
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <div className="inline-flex border-2 border-oxide bg-oxide px-5 py-3 font-black uppercase tracking-[.16em] text-ink shadow-[6px_6px_0_rgba(255,255,255,.18)]">Limited offer: 10% off</div>
          <Eyebrow>SEAMLESS GUTTER INSTALLATION</Eyebrow>
          <h1 className="mt-3 max-w-4xl font-display text-5xl uppercase leading-[.9] sm:text-6xl lg:text-8xl">Protect your home and save 10%.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">Get seamless gutters measured, formed, and installed around your actual roofline by a local, family owned, veteran owned North Texas team.</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {benefits.slice(0,4).map(item=><li className="flex items-start gap-3 text-sm font-bold text-white/85" key={item}><Check className="mt-0.5 shrink-0 text-oxide" size={18}/>{item}</li>)}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild><a href="#offer-form">Claim 10% Off <ArrowRight size={16}/></a></Button>
            <Button variant="outline" asChild><a href={`tel:${business.phoneHref}`}><Phone size={16}/> Call {business.phone}</a></Button>
          </div>
          <p className="mt-5 max-w-xl text-xs leading-5 text-white/55">Offer applies to qualifying seamless gutter installation projects completed by Rugged American Exteriors. Cannot be combined with other offers. Contact us for complete terms.</p>
        </div>
        <div id="offer-form" className="scroll-mt-28 border-t-8 border-oxide bg-white p-6 text-ink shadow-[12px_12px_0_rgba(244,85,20,.3)] sm:p-8">
          <p className="text-xs font-black uppercase tracking-[.22em] text-oxide">Free, no obligation estimate</p>
          <h2 className="mt-2 font-display text-4xl uppercase">Tell us about your home.</h2>
          <p className="mt-3 text-sm leading-6 text-ink/65">Start with your contact information, then answer a few quick project questions.</p>
          <SeamlessGutterOfferForm/>
        </div>
      </div>
    </section>

    <section className="bg-white px-4 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <div>
          <Eyebrow>FIVE INCH OR SIX INCH?</Eyebrow>
          <h2 className="font-display text-4xl uppercase sm:text-5xl">The right gutter starts with the whole roofline.</h2>
          <p className="mt-5 text-lg leading-8 text-ink/70">We look at roof area, pitch, valleys, run length, downspout locations, and where water needs to move before recommending a size.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <article className="brand-shadow border border-ink/15 bg-white p-7"><span className="font-display text-6xl text-oxide">5</span><h3 className="mt-2 font-display text-3xl uppercase">Five inch gutters</h3><p className="mt-4 leading-7 text-ink/70">A proven residential standard for many homes when the roof size, pitch, run length, and drainage plan support it.</p></article>
          <article className="border border-oxide bg-ink p-7 text-white shadow-[6px_6px_0_#f45514]"><span className="font-display text-6xl text-oxide">6</span><h3 className="mt-2 font-display text-3xl uppercase">Six inch gutters</h3><p className="mt-4 leading-7 text-white/70">Additional capacity for larger or steeper roof areas, long runs, heavy flow points, or homes that need more water carrying ability.</p></article>
        </div>
      </div>
    </section>

    <section className="bg-steel px-4 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[360px] overflow-hidden border-4 border-white shadow-[10px_10px_0_#201d1a] sm:min-h-[480px]"><Image src="/gallery/garage-seamless-gutter-installation.webp" alt="White seamless gutter and downspout installed above a garage" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-center"/></div>
        <div>
          <Eyebrow>FORMED AT YOUR HOME</Eyebrow>
          <h2 className="font-display text-4xl uppercase sm:text-6xl">Continuous gutter runs built for your house.</h2>
          <p className="mt-5 text-lg leading-8 text-ink/70">We measure the roofline and run gutter coil through the professional roll forming machine in our trailer. Each straight section is produced at the length your home needs, reducing unnecessary seams and creating a cleaner finished system.</p>
          <ul className="mt-7 grid gap-4">{benefits.map(item=><li className="flex items-start gap-3 border-l-4 border-oxide bg-white p-4 font-bold" key={item}><ShieldCheck className="shrink-0 text-oxide"/>{item}</li>)}</ul>
          <div className="mt-8"><Button asChild><a href="#offer-form">Get My Free Estimate</a></Button></div>
        </div>
      </div>
    </section>

    <section className="bg-ink px-4 py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 md:flex-row md:items-center"><div><p className="text-xs font-black uppercase tracking-[.22em] text-oxide">WE STAND BEHIND OUR WORK</p><h2 className="mt-3 max-w-4xl font-display text-4xl uppercase sm:text-5xl">Lifetime Workmanship Warranty on qualifying gutter installations.</h2><p className="mt-4 max-w-3xl text-white/70">This coverage applies to qualifying installation workmanship completed by Rugged American Exteriors and is separate from manufacturer and material warranties.</p></div><Button asChild><Link href="/contact">Request Warranty Terms</Link></Button></div>
    </section>

    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <Eyebrow>REAL NORTH TEXAS INSTALLATIONS</Eyebrow>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="max-w-3xl font-display text-4xl uppercase sm:text-6xl">See the difference on real homes.</h2><p className="max-w-md text-ink/65">Authentic completed gutter projects from homes we have worked on.</p></div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ['/gallery/bronze-gutters-brick-home.webp','Bronze seamless gutters installed on a brick home','Color matched seamless gutters'],
            ['/gallery/dark-gutters-two-story-home.webp','Dark gutters installed along a two story roofline','Two story gutter installation'],
            ['/gallery/front-porch-gutter-installation.webp','White gutters and downspouts installed on a brick home porch','Front porch gutter system'],
          ].map(([src,alt,title])=><figure className="group overflow-hidden border border-ink/15 bg-white shadow-[6px_6px_0_#f3f0ec]" key={src}><div className="relative aspect-[4/3] overflow-hidden"><Image src={src} alt={alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105"/></div><figcaption className="border-t-4 border-oxide p-5 font-display text-2xl uppercase">{title}</figcaption></figure>)}
        </div>
      </div>
    </section>

    <ReviewsSection heading="North Texas homeowners trust our work."/>
    <SocialSection/>

    <section className="bg-oxide px-4 py-16 text-ink"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 md:flex-row md:items-center"><div><p className="text-xs font-black uppercase tracking-[.2em]">WE GUTTER DONE RIGHT.</p><h2 className="mt-2 font-display text-4xl uppercase sm:text-5xl">Ready to save 10% on seamless gutters?</h2></div><div className="flex flex-wrap gap-3"><Button className="bg-ink text-white hover:bg-[#2b2723]" asChild><a href="#offer-form">Claim My 10% Off</a></Button><Button variant="outline" asChild><a href={`tel:${business.phoneHref}`}>Call {business.phone}</a></Button></div></div></section>
  </>;
}
