import {ServiceEstimate} from '@/components/service-estimate';
import type {Metadata} from 'next';
import {pageMetadata} from '@/lib/social-metadata';
import {ServiceProjectPhotos} from '@/components/service-project-photos';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Sun,
} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Eyebrow} from '@/components/sections';
import {business} from '@/lib/data';

export const metadata:Metadata=pageMetadata('Concrete | DFW Exterior Services','Concrete driveways, patios, walkways, slabs, and more from a local, family and veteran owned Dallas Fort Worth exterior company.','/concrete');

const services=[
  ['Form Setting / Pouring','Careful layout, form setting, concrete placement, and finishing for a clean, dependable result.'],
  ['Demolition','Remove and prepare existing concrete areas before replacement, expansion, or a new installation.'],
  ['Residential Concrete','Concrete solutions for homes, yards, driveways, patios, walkways, and everyday property improvements.'],
  ['Commercial Concrete','Concrete work for qualifying commercial properties and practical business needs.'],
  ['Driveways','New concrete driveways, replacement areas, and extensions that create reliable parking and access.'],
  ['Walkways','Clean, durable paths that connect entrances, parking areas, patios, gates, and outdoor spaces.'],
  ['Slabs','Concrete slabs for a range of residential and commercial structures, equipment, and project needs.'],
  ['Decks','Concrete deck surfaces built for useful outdoor areas and a finished appearance.'],
  ['Foundations','Concrete foundation work evaluated and planned according to the needs of the project.'],
  ['Decorative Concrete','Decorative finishes that add character, texture, and a more customized look to concrete surfaces.'],
  ['Sidewalks','Safe, finished pedestrian paths for homes, businesses, and surrounding property areas.'],
  ['Patios','Durable concrete patios for outdoor furniture, grilling, entertaining, and everyday living.'],
  ['Pool Decks','Concrete pool surrounds designed to create a clean, useful space around the water.'],
] as const;

const process=[
  ['Plan the project','We review what the slab will support, measure the area, and discuss access, drainage, and the finish you want.',null,''],
  ['Prepare the ground','For replacements, the old concrete is removed as scoped. The ground is graded and the base compacted as needed to give the slab more even support.',null,''],
  ['Set forms and reinforcement','Forms define the edges, elevation, and slope. Where the design calls for rebar, supports called chairs hold it at the specified height so it stays inside the concrete during the pour.','reinforced-shop-slab.webp','Rebar grid and forms in place before a shop slab pour'],
  ['Place the concrete','We confirm the mix and thickness for the intended use. On sites with limited truck access, a pump can help move concrete to the forms.','concrete-pump-pour.webp','Concrete pump in use during slab placement'],
  ['Finish the surface and set joints','The finish is chosen for how the surface will be used. Control joints give shrinkage cracks a planned location; they don’t guarantee a crack-free slab.','shop-slab-finishing.webp','Crew finishing a freshly placed shop slab'],
  ['Protect the slab while it cures','Concrete gains strength over time. At the walkthrough, ask when you can walk on it, drive on it, and put heavier loads on it. Timing depends on the mix, weather, and intended use.','concrete-finish-detail.webp','Close-up of a finished concrete surface'],
] as const;

const faqs=[
  ['What types of concrete projects do you install?','We offer form setting and pouring, demolition, residential and commercial concrete, driveways, walkways, slabs, decks, foundations, decorative concrete, sidewalks, patios, and pool decks.'],
  ['Do you handle concrete demolition?','Yes. We can evaluate existing concrete that needs to be removed as part of a replacement, expansion, or new concrete project.'],
  ['Do you provide commercial concrete services?','Yes. We provide concrete services for qualifying commercial projects as well as residential properties. Contact us so we can review the scope, access, and project requirements.'],
  ['How much does a concrete project cost?','Pricing depends on the size of the project, site preparation, access, thickness, reinforcement requirements, and overall scope. Contact us for a free estimate.'],
  ['What areas do you serve?','We serve residential and commercial property owners throughout Crowley, Burleson, Joshua, Mansfield, Fort Worth, Cleburne, Arlington, and surrounding communities.'],
] as const;

export default function ConcretePage(){
  const serviceSchema={
    '@context':'https://schema.org',
    '@type':'Service',
    name:'Concrete Services',
    serviceType:'Residential and commercial concrete',
    provider:{'@type':'HomeAndConstructionBusiness',name:business.name,telephone:business.phoneHref,url:'https://ruggedamericanexteriors.com'},
    areaServed:['Fort Worth TX','Crowley TX','Burleson TX','Joshua TX','Mansfield TX','Cleburne TX','Arlington TX'],
    description:'Concrete form setting, pouring, demolition, residential and commercial concrete, driveways, walkways, slabs, foundations, decorative concrete, sidewalks, patios, and pool decks.',
  };
  const faqSchema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(([question,answer])=>({'@type':'Question',name:question,acceptedAnswer:{'@type':'Answer',text:answer}}))};

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>

    <section className="relative overflow-hidden bg-ink px-4 py-20 text-white md:py-28">
      <Image src="/concrete-projects/shop-slab-finishing.webp" alt="Crew finishing a concrete slab beside a metal shop" fill priority sizes="100vw" className="concrete-hero-image object-cover object-center"/>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/20"/>
      <div className="concrete-hero-accent absolute inset-y-0 right-0 w-1/3 bg-oxide/15 [clip-path:polygon(55%_0,100%_0,100%_100%,0_100%)]" aria-hidden="true"/>
      <div className="grain absolute inset-0 opacity-20"/>
      <div className="relative mx-auto max-w-7xl">
        <Eyebrow>CONCRETE SERVICES • FORT WORTH AREA</Eyebrow>
        <h1 className="max-w-4xl font-display text-[2.65rem] uppercase leading-[.95] md:text-7xl">Concrete Built for the Way You Use Your Property</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80">From form setting, pouring, and demolition to driveways, slabs, foundations, patios, and commercial projects, Rugged American Exteriors delivers concrete work built around how your property needs to perform.</p>
        <a href="#concrete-process" className="mt-5 inline-flex min-h-11 items-center rounded-lg bg-white px-4 font-bold text-ink">Read the Concrete Guide ↓</a>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild><Link href="/concrete/estimate">Get a Free Concrete Estimate <ArrowRight className="concrete-cta-arrow" size={16}/></Link></Button>
          <Button variant="outline" asChild><a href={`tel:${business.phoneHref}`}><Phone size={16}/> Call for a Quote</a></Button>
        </div>
      </div>
    </section>

    <section className="border-b border-ink/10 bg-white px-4 py-7" aria-label="Concrete service benefits">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {([[BadgeCheck,'Free Estimates'],[Home,'Residential & Commercial'],[MapPin,'Local & Reliable'],[Sparkles,'Clean, Professional Work'],[Sun,'Built for Texas Properties']] as const).map(([Icon,label])=><div className="flex items-center gap-3 text-sm font-black uppercase tracking-wide" key={label}><Icon className="shrink-0 text-oxide" size={24}/>{label}</div>)}
      </div>
    </section>

    <ServiceEstimate slug="concrete"/><ServiceProjectPhotos service="concrete"/><section className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <Eyebrow>BUILT AROUND YOUR PROPERTY</Eyebrow>
        <div className="grid gap-6 lg:grid-cols-[1fr_.65fr] lg:items-end"><h2 className="font-display text-4xl uppercase md:text-6xl">Concrete Services</h2><p className="text-ink/70">Concrete preparation, installation, removal, and finishing for residential and commercial properties.</p></div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(([title,description],index)=><article className="concrete-service-card brand-shadow border border-ink/15 bg-white p-7" key={title}><span className="font-display text-4xl text-steel">0{index+1}</span><h3 className="mt-7 font-display text-2xl uppercase">{title}</h3><p className="mt-3 leading-7 text-ink/70">{description}</p></article>)}</div>
      </div>
    </section>

    <section className="bg-steel px-4 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div><Eyebrow>PRACTICAL. CLEAN. BUILT TO LAST.</Eyebrow><h2 className="font-display text-4xl uppercase md:text-6xl">Strong Surfaces. Finished Spaces.</h2><p className="mt-6 text-lg leading-8 text-ink/70">Concrete creates durable, low-maintenance surfaces for access, structures, parking, outdoor living, pedestrian paths, equipment, and everyday operations. It gives residential and commercial properties a cleaner, more finished alternative to gravel or dirt.</p><p className="mt-4 text-ink/70">From foundational work and slabs to decorative patios and pool decks, we shape each project around the site, intended use, and finished result.</p></div>
        <ul className="grid gap-3 sm:grid-cols-2">{['Durable','Low maintenance','Clean, finished appearance','Residential applications','Commercial applications','Structural project options','Decorative finish options','Built for Texas properties'].map(item=><li className="flex min-h-16 items-center gap-3 border-l-4 border-oxide bg-white p-4 font-bold" key={item}><Check className="shrink-0 text-oxide"/>{item}</li>)}</ul>
      </div>
    </section>

    <section id="concrete-process" className="scroll-mt-28 bg-[#f6f3ed] px-5 py-20 text-ink">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-4xl border-b border-ink/20 pb-10">
          <Eyebrow>THE RUGGED AMERICAN CONCRETE GUIDE</Eyebrow>
          <h2 className="font-display text-5xl uppercase leading-none md:text-7xl">A good slab starts below the surface.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8">Follow a concrete project from the first site visit to the finished slab. See what goes under the concrete, why it matters, and what to look for in your estimate.</p>
        </header>
        <div className="grid gap-10 pt-10 lg:grid-cols-[15rem_minmax(0,1fr)]">
          <nav aria-label="Concrete guide contents" className="self-start border-l-2 border-oxide pl-5 lg:sticky lg:top-32">
            <h3 className="font-bold uppercase tracking-wider">In this guide</h3>
            <ol className="mt-4 space-y-3">{process.map(([title],index)=><li key={title}><a className="inline-flex gap-3 underline-offset-4 hover:underline" href={`#concrete-step-${index+1}`}><span className="font-bold text-oxide">0{index+1}</span>{title}</a></li>)}</ol>
            <a href="#compare-concrete-estimates" className="mt-5 inline-block font-bold underline underline-offset-4">Compare estimates</a>
          </nav>
          <div className="min-w-0">
            {process.map(([title,description,photo,alt],index)=><article id={`concrete-step-${index+1}`} key={title} className="scroll-mt-28 border-b border-ink/20 pb-12 pt-10 first:pt-0">
              <p className="font-bold uppercase tracking-widest text-oxide">0{index+1} / The concrete process</p>
              <h3 className="mt-3 font-display text-3xl uppercase md:text-5xl">{title}</h3>
              <p className="mt-4 max-w-3xl text-lg leading-8">{description}</p>
              {photo&&<figure className="mt-7"><Image src={`/concrete-projects/${photo}`} alt={alt} width={1000} height={680} sizes="(min-width: 1024px) 70vw, 100vw" className="aspect-[3/2] w-full rounded-lg object-cover"/><figcaption className="mt-2 text-sm text-ink/75">{alt}</figcaption></figure>}
              {index===2&&<aside className="mt-7 border-l-4 border-oxide bg-white p-6"><h4 className="text-xl font-bold">Why lift the rebar off the ground?</h4><p className="mt-2 leading-7">Rebar needs concrete around it. Chairs hold the steel at the designed height during placement. Reinforcement helps limit how wide cracks open; it cannot make a slab crack-proof.</p></aside>}
              <details className="mt-6 rounded-lg border border-ink/20 bg-white p-4"><summary className="cursor-pointer font-bold">{['What should I show you at the site visit?','Why does the base matter?','Does every slab use the same rebar?','Does higher PSI solve every problem?','What do the lines in the slab do?','When can I use the slab?'][index]}</summary><p className="mt-3 leading-7">{['Point out where water collects, what needs to come out, and what will sit on the concrete. Photos can help us understand access and existing conditions.','The slab transfers loads to the ground below. Soft or uneven support can lead to movement, so base prep should be clear in the estimate.','No. The intended load and the site determine the reinforcement. A structural slab may require engineered details.','PSI describes compressive strength. Base support, thickness, joints, placement, and curing also matter.','Control joints help direct shrinkage cracks. Ask where the joints will go and how the new slab will meet existing concrete.','Foot traffic, parking, and heavy loads have different timelines. Follow the instructions for your project and conditions.'][index]}</p></details>
            </article>)}
            <aside id="compare-concrete-estimates" className="mt-10 scroll-mt-28 rounded-lg bg-ink p-7 text-white"><h3 className="font-display text-3xl uppercase">Compare the work behind the price</h3><p className="mt-4 leading-7">Ask each contractor to spell out demolition and haul-off, base prep, concrete mix and thickness, reinforcement, drainage, joints, finish, and curing instructions. Compare those details alongside the total.</p><Link href="/concrete/estimate" className="mt-5 inline-block font-bold underline underline-offset-4">Request a concrete estimate</Link></aside>
          </div>
        </div>
      </div>
    </section>



    <section className="bg-steel px-4 py-20">
      <div className="mx-auto max-w-5xl text-center"><Eyebrow>LOCAL CONCRETE WORK</Eyebrow><h2 className="font-display text-4xl uppercase md:text-6xl">Concrete Projects Across the Fort Worth Area</h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-ink/70">Looking for a concrete contractor in Fort Worth, Crowley, Burleson, Joshua, Mansfield, or Cleburne? Rugged American Exteriors provides residential and commercial concrete, demolition, driveways, walkways, slabs, foundations, patios, pool decks, and decorative concrete. We serve Crowley, Burleson, Joshua, Mansfield, Fort Worth, Cleburne, Arlington, and surrounding North Texas communities.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Button asChild><Link href="/service-areas">Explore Our Service Areas</Link></Button><Button variant="outline" asChild><Link href="/concrete/estimate">Request a Concrete Estimate</Link></Button></div></div>
    </section>

    <section id="faq" className="scroll-mt-28 px-4 py-20">
      <div className="mx-auto max-w-4xl"><Eyebrow>STRAIGHT ANSWERS</Eyebrow><h2 className="font-display text-4xl uppercase md:text-6xl">Concrete Questions, Answered.</h2><div className="mt-10 divide-y divide-ink/20 border-y border-ink/20">{faqs.map(([question,answer])=><details className="group" key={question}><summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-5 py-6 font-black"><span>{question}</span><span className="text-2xl text-oxide transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-3xl pb-6 pr-10 leading-7 text-ink/70">{answer}</p></details>)}</div></div>
    </section>

    <section className="bg-oxide px-4 py-16 text-ink"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"><div><p className="text-xs font-black uppercase tracking-[.2em] text-ink/70">READY WHEN YOU ARE</p><h2 className="mt-2 font-display text-4xl uppercase md:text-5xl">Have a Concrete Project in Mind?</h2><p className="mt-4 max-w-3xl text-ink/75">Whether you need pouring, demolition, a driveway, slab, foundation, patio, pool deck, or commercial concrete work, we’d be happy to take a look at your project.</p></div><div className="flex flex-wrap gap-3"><Button variant="light" asChild><Link href="/concrete/estimate">Get Your Free Estimate</Link></Button><Button variant="outline" asChild><a href={`tel:${business.phoneHref}`}><Phone size={16}/> {business.phone}</a></Button></div></div></section>
  </>;
}
