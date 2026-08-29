import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Hammer,
  Home,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Sun,
  Truck,
} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Eyebrow} from '@/components/sections';
import {business} from '@/lib/data';

export const metadata:Metadata={
  title:'Concrete Contractor Fort Worth TX | Residential & Commercial',
  description:'Rugged American Exteriors provides residential and commercial concrete, form setting, pouring, demolition, driveways, walkways, slabs, foundations, patios, pool decks, and decorative concrete across the Fort Worth area.',
  alternates:{canonical:'/concrete'},
  openGraph:{
    title:'Concrete Contractor Fort Worth TX | Residential & Commercial | Rugged American Exteriors',
    description:'Concrete pouring, demolition, driveways, foundations, patios, pool decks, and decorative concrete across the Fort Worth area.',
    images:[{url:'/service-images/concrete.webp',alt:'Finished concrete patio and flatwork at a North Texas property'}],
  },
};

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
  ['Free Estimate','We review the project, measurements, access, and what you want the space used for.'],
  ['Site Preparation','The area is prepared and graded as needed before the concrete installation.'],
  ['Pour & Finish','Concrete is placed and professionally finished for a clean, durable surface.'],
  ['Final Walkthrough','We review the completed project with you and make sure the area is ready for curing and use.'],
] as const;

const idealProjects=['Driveways','Walkways','Slabs','Concrete decks','Foundations','Decorative concrete','Sidewalks','Patios','Pool decks'];

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
      <Image src="/service-images/concrete.webp" alt="Finished concrete patio and flatwork at a North Texas property" fill priority sizes="100vw" className="concrete-hero-image object-cover object-center"/>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/20"/>
      <div className="concrete-hero-accent absolute inset-y-0 right-0 w-1/3 bg-oxide/15 [clip-path:polygon(55%_0,100%_0,100%_100%,0_100%)]" aria-hidden="true"/>
      <div className="grain absolute inset-0 opacity-20"/>
      <div className="relative mx-auto max-w-7xl">
        <Eyebrow>CONCRETE SERVICES • FORT WORTH AREA</Eyebrow>
        <h1 className="max-w-4xl font-display text-[2.65rem] uppercase leading-[.95] md:text-7xl">Concrete Built for the Way You Use Your Property</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80">From form setting, pouring, and demolition to driveways, slabs, foundations, patios, and commercial projects, Rugged American Exteriors delivers concrete work built around how your property needs to perform.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild><Link href="/contact?service=Concrete+-+tell+us+more">Get a Free Concrete Estimate <ArrowRight className="concrete-cta-arrow" size={16}/></Link></Button>
          <Button variant="outline" asChild><a href={`tel:${business.phoneHref}`}><Phone size={16}/> Call for a Quote</a></Button>
        </div>
      </div>
    </section>

    <section className="border-b border-ink/10 bg-white px-4 py-7" aria-label="Concrete service benefits">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {([[BadgeCheck,'Free Estimates'],[Home,'Residential & Commercial'],[MapPin,'Local & Reliable'],[Sparkles,'Clean, Professional Work'],[Sun,'Built for Texas Properties']] as const).map(([Icon,label])=><div className="flex items-center gap-3 text-sm font-black uppercase tracking-wide" key={label}><Icon className="shrink-0 text-oxide" size={24}/>{label}</div>)}
      </div>
    </section>

    <section className="px-4 py-20">
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

    <section className="bg-ink px-4 py-20 text-white">
      <div className="mx-auto max-w-7xl"><Eyebrow>FROM IDEA TO FINISHED FLATWORK</Eyebrow><h2 className="font-display text-4xl uppercase md:text-6xl">Our Concrete Process</h2><ol className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{process.map(([title,description],index)=><li className="concrete-process-card border border-oxide/60 bg-[#2b2723] p-6" key={title}><span className="concrete-step-number inline-flex h-11 w-11 items-center justify-center border-2 border-oxide font-black text-oxide">0{index+1}</span><h3 className="mt-5 font-display text-2xl uppercase">{title}</h3><p className="mt-3 leading-7 text-white/70">{description}</p></li>)}</ol></div>
    </section>

    <section className="px-4 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div><Eyebrow>BUILT FOR THE PROJECT</Eyebrow><h2 className="font-display text-4xl uppercase md:text-6xl">Concrete Applications</h2><p className="mt-5 text-ink/70">From foundational work to finished outdoor spaces, we help property owners choose concrete solutions that fit the site and intended use.</p></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{idealProjects.map((item,index)=><div className="group border border-ink/15 bg-white p-5 transition hover:-translate-y-1 hover:border-oxide" key={item}><div className="flex items-center justify-between"><span className="font-display text-3xl text-steel">0{index+1}</span>{index%3===0?<Truck className="text-oxide"/>:index%3===1?<Hammer className="text-oxide"/>:<Ruler className="text-oxide"/>}</div><p className="mt-5 font-black uppercase">{item}</p></div>)}</div>
      </div>
    </section>

    <section className="bg-steel px-4 py-20">
      <div className="mx-auto max-w-5xl text-center"><Eyebrow>LOCAL CONCRETE WORK</Eyebrow><h2 className="font-display text-4xl uppercase md:text-6xl">Concrete Projects Across the Fort Worth Area</h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-ink/70">Looking for a concrete contractor in Fort Worth, Crowley, Burleson, Joshua, Mansfield, or Cleburne? Rugged American Exteriors provides residential and commercial concrete, demolition, driveways, walkways, slabs, foundations, patios, pool decks, and decorative concrete. We serve Crowley, Burleson, Joshua, Mansfield, Fort Worth, Cleburne, Arlington, and surrounding North Texas communities.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Button asChild><Link href="/service-areas">Explore Our Service Areas</Link></Button><Button variant="outline" asChild><Link href="/contact?service=Concrete+-+tell+us+more">Request a Concrete Estimate</Link></Button></div></div>
    </section>

    <section id="faq" className="scroll-mt-28 px-4 py-20">
      <div className="mx-auto max-w-4xl"><Eyebrow>STRAIGHT ANSWERS</Eyebrow><h2 className="font-display text-4xl uppercase md:text-6xl">Concrete Questions, Answered.</h2><div className="mt-10 divide-y divide-ink/20 border-y border-ink/20">{faqs.map(([question,answer])=><details className="group" key={question}><summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-5 py-6 font-black"><span>{question}</span><span className="text-2xl text-oxide transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-3xl pb-6 pr-10 leading-7 text-ink/70">{answer}</p></details>)}</div></div>
    </section>

    <section className="bg-oxide px-4 py-16 text-ink"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"><div><p className="text-xs font-black uppercase tracking-[.2em] text-ink/70">READY WHEN YOU ARE</p><h2 className="mt-2 font-display text-4xl uppercase md:text-5xl">Have a Concrete Project in Mind?</h2><p className="mt-4 max-w-3xl text-ink/75">Whether you need pouring, demolition, a driveway, slab, foundation, patio, pool deck, or commercial concrete work, we’d be happy to take a look at your project.</p></div><div className="flex flex-wrap gap-3"><Button variant="light" asChild><Link href="/contact?service=Concrete+-+tell+us+more">Get Your Free Estimate</Link></Button><Button variant="outline" asChild><a href={`tel:${business.phoneHref}`}><Phone size={16}/> {business.phone}</a></Button></div></div></section>
  </>;
}
