import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {Phone,ArrowRight,Check} from 'lucide-react';
import {ConcreteEstimateSteps} from '@/components/concrete-estimate-steps';
import '@/components/clean-offer.css';
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


const phone='(817) 799-6434',dial='tel:+18177996434';
const photos=[["/concrete-projects/shop-slab-finishing.webp", "Crew finishing a new concrete slab beside a metal shop"], ["/concrete-projects/reinforced-shop-slab.webp", "Forms, vapor barrier, and reinforcement ready for a concrete pour"], ["/concrete-projects/concrete-pump-pour.webp", "Concrete crew placing a slab with a pump truck"]];
export default function ConcreteEstimatePage(){return <div className="rae-clean-offer">
<header className="clean-header"><div className="clean-shell clean-header-row"><Link href="/" aria-label="Rugged American Exteriors home"><Image src="/rugged-american-exteriors-logo-transparent.png" alt="Rugged American Exteriors" width={2058} height={764} priority className="clean-logo"/></Link><a className="clean-phone" href={dial}><Phone size={18}/><span>Call {phone}</span></a></div></header>
<main><section className="clean-hero"><div className="clean-shell clean-hero-grid"><div className="clean-copy"><p className="clean-eyebrow">DALLAS-FORT WORTH · FAMILY &amp; VETERAN OWNED</p><div className="clean-offer-tag">15% Off Concrete</div><h1>More room to enjoy.<span>Save 15% this fall.</span></h1><p className="clean-intro">Driveways, patios, walkways, slabs, and decorative concrete. Tell us what you have in mind and start with a free estimate.</p><div className="clean-hero-photo"><Image src={photos[0][0]} alt={photos[0][1]} fill priority sizes="(min-width:1024px) 50vw,100vw" className="object-cover" style={{objectPosition:"center 70%"}}/></div></div><div id="concrete-form" className="clean-form-card"><div className="clean-form-heading"><p>FREE ESTIMATE · NO OBLIGATION</p><h2>Let’s plan your concrete project.</h2></div><ConcreteEstimateSteps/><a className="clean-form-call" href={dial}><Phone size={18}/>Call {phone}</a><a className="clean-terms-link" href="#concrete-terms">See offer details</a></div></div></section>
<section className="clean-trust"><div className="clean-shell">{['Local, family & veteran owned','Two-year workmanship warranty','Free estimates. Clear pricing.'].map(text=><p key={text}><Check size={19}/>{text}</p>)}</div></section>
<section className="clean-shell clean-projects"><p className="clean-eyebrow">REAL HOMES. REAL PROJECTS.</p><h2>Built for the way you use your property.</h2><p>A look at the preparation, placement, and finishing behind a concrete slab project.</p><div className="clean-photo-grid">{photos.map(([src,alt])=><a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open photo: ${alt}`} key={src}><Image src={src} alt={alt} fill sizes="(min-width:1024px) 33vw,50vw" className="object-cover"/></a>)}</div></section>
<section className="clean-how"><div className="clean-shell"><p className="clean-eyebrow">CONCRETE SERVICES</p><h2>A practical upgrade for your property.</h2><div className="clean-steps">{services.map(([title,description])=><article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
<section className="clean-shell clean-projects"><p className="clean-eyebrow">MEET YOUR LOCAL TEAM</p><h2>Caleb &amp; Kali Christensen</h2><p>Local owners who believe in straight answers, clear communication, and respect for your home. We’ll discuss the scope, pricing, and next steps before the work begins.</p><p>Two-year workmanship coverage applies to qualifying projects. Ask us about project-specific terms.</p></section>
<section id="concrete-terms" className="clean-shell clean-terms"><h2>Offer details</h2><p>15% off qualifying concrete projects completed by Rugged American Exteriors. Cannot be combined with other offers. Project minimums, scheduling, and additional terms may apply. Contact us for complete details.</p><p>Financing is available for qualified customers. <Link href="/financing">Explore financing</Link>.</p><a className="clean-button" href="#concrete-form">Claim My 15% Off<ArrowRight size={18}/></a></section></main><footer className="clean-footer"><div className="clean-shell"><strong>Rugged American Exteriors</strong><a href={dial}>{phone}</a><Link href="/privacy-policy">Privacy policy</Link></div></footer><a className="clean-sticky-call" href={dial}><Phone size={19}/>Call {phone}</a></div>;}
