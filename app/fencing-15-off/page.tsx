import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {Phone,ArrowRight,Check} from 'lucide-react';
import {GutterEstimateSteps} from '@/components/gutter-estimate-steps';
import '@/components/clean-offer.css';
export const metadata:Metadata={
  title:'15% Off Fencing | Free DFW Fence Estimate',
  description:'Save 15% on qualifying fencing projects in Dallas-Fort Worth. Explore wood, wrought iron, chain link, pipe fencing, and gates. Request a free estimate.',
  robots:{index:false,follow:false},
};

const services=[
  ['Wood Fencing','Choose board-on-board for added privacy or side-by-side for a classic backyard fence.'],
  ['Wrought Iron Fencing','Define your property with a decorative fence that keeps the view open.'],
  ['Chain Link','A practical option for enclosing a yard or creating a dedicated area for pets.'],
  ['Pipe Fencing','An open fence style for acreage, driveways, and larger property lines.'],
  ['Gates','Plan an entry that fits how you use your yard, from a walk gate to a wider opening for equipment.'],
  ['Other','Have a different style in mind or need help choosing? Tell us what you’re looking for.'],
];
const phone='(817) 799-6434',dial='tel:+18177996434';
export default function FencingOfferPage(){return <div className="rae-clean-offer">
<header className="clean-header"><div className="clean-shell clean-header-row"><Link href="/" aria-label="Rugged American Exteriors home"><Image src="/rugged-american-exteriors-logo-transparent.png" alt="Rugged American Exteriors" width={2058} height={764} priority className="clean-logo"/></Link><a className="clean-phone" href={dial}><Phone size={18}/><span>Call {phone}</span></a></div></header>
<main><section className="clean-hero"><div className="clean-shell clean-hero-grid"><div className="clean-copy"><p className="clean-eyebrow">DALLAS-FORT WORTH · FAMILY &amp; VETERAN OWNED</p><div className="clean-offer-tag">15% Off Fencing</div><h1>Better fences. Better backyards.<span>Save 15% on fencing.</span></h1><p className="clean-intro">More privacy for dinner outside, a secure yard for the dog, or a fresh start for a fence that’s seen better days. From wood privacy fences to wrought iron, chain link, pipe fencing, and gates, we’ll help you find the right fit for your Dallas-Fort Worth property.</p><div className="clean-hero-photo"><Image src="/service-images/fencing-natural.webp" alt="Wood privacy fence along a backyard" fill priority sizes="(min-width:1024px) 50vw,100vw" className="object-cover"/></div></div><div id="fencing-form" className="clean-form-card"><div className="clean-form-heading"><p>FREE ESTIMATE · NO OBLIGATION</p><h2>Let’s plan your new fence.</h2></div><GutterEstimateSteps campaign="fencing-15-off" projectKind="fencing"/><a className="clean-form-call" href={dial}><Phone size={18}/>Call {phone}</a><a className="clean-terms-link" href="#fencing-terms">See offer details</a></div></div></section>
<section className="clean-trust"><div className="clean-shell">{['Local, family & veteran owned','Fencing & gates','Free estimates. Clear pricing.'].map(text=><p key={text}><Check size={19}/>{text}</p>)}</div></section>
<section className="clean-how"><div className="clean-shell"><p className="clean-eyebrow">FENCE STYLES & OPTIONS</p><h2>Find the right fence for your yard.</h2><div className="clean-steps">{services.map(([title,description])=><article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
<section className="clean-shell clean-projects"><p className="clean-eyebrow">MEET YOUR LOCAL TEAM</p><h2>Caleb &amp; Kali Christensen</h2><p>Local owners who believe in straight answers, clear communication, and respect for your home. We’ll discuss the scope, pricing, and next steps before the work begins.</p></section>
<section id="fencing-terms" className="clean-shell clean-terms"><h2>Offer details</h2><p>15% off qualifying fencing projects completed by Rugged American Exteriors. Cannot be combined with other offers. Project minimums, scheduling, and additional terms may apply. Contact us for complete details.</p><p>Financing is available for qualified customers. <Link href="/financing">Explore financing</Link>.</p><a className="clean-button" href="#fencing-form">Claim My 15% Off<ArrowRight size={18}/></a></section></main><footer className="clean-footer"><div className="clean-shell"><strong>Rugged American Exteriors</strong><a href={dial}>{phone}</a><Link href="/privacy-policy">Privacy policy</Link></div></footer><a className="clean-sticky-call" href={dial}><Phone size={19}/>Call {phone}</a></div>;}
