import Image from 'next/image';
import Link from 'next/link';
import {Phone,ArrowRight,Check} from 'lucide-react';
import {GutterEstimateSteps} from '@/components/gutter-estimate-steps';
import {business} from '@/lib/data';
import './clean-offer.css';
type Props={
  campaign:string;
  badge:string;
  headline:string;
  highlight:string;
  description:string;
  cta:string;
  terms:string;
  videoSrc?:string;
  videoPoster?:string;
  videoTitle?:string;
  detailsLabel?:string;
};


const landingPhone='(817) 799-6434';
const landingPhoneHref='+18177996434';
const photos=[
 ['red-brick-gutters','Seamless gutters and downspout on a red brick home'],
 ['red-brick-corner','Custom gutter corner around a bay window'],
 ['blue-home-gutters','Dark seamless gutters along a blue home'],
 ['white-brick-gutters','Gutters and downspout on a white brick home'],
 ['white-brick-roofline','Finished seamless gutter run along a white brick home'],
];
export function FallGutterOfferPage({campaign,badge,headline,highlight,description,cta,terms,videoSrc,videoPoster,videoTitle,detailsLabel="Offer details"}:Props){
return <div className="rae-clean-offer">
<header className="clean-header"><div className="clean-shell clean-header-row"><Link href="/" aria-label="Rugged American Exteriors home"><Image src="/rugged-american-exteriors-logo-transparent.png" alt="Rugged American Exteriors" width={2058} height={764} priority className="clean-logo"/></Link><a className="clean-phone" href={`tel:${landingPhoneHref}`}><Phone size={18}/><span>Call {landingPhone}</span></a></div></header>
<main>
<section className="clean-hero"><div className="clean-shell clean-hero-grid"><div className="clean-copy"><p className="clean-eyebrow">DALLAS-FORT WORTH · FAMILY &amp; VETERAN OWNED</p><div className="clean-offer-tag">{badge}</div><h1>{headline}<span>{highlight}</span></h1><p className="clean-intro">{description}</p><a className="clean-review-link" href={business.googleProfileUrl} target="_blank" rel="noopener noreferrer">Read our Google reviews ↗</a><div className="clean-hero-photo"><Image src="/landing-projects/white-brick-gutters.webp" alt="Real Rugged American gutter installation on a North Texas home" fill priority sizes="(min-width:1024px) 50vw,100vw" className="object-cover"/></div></div>
<div id="fall-offer-form" className="clean-form-card"><div className="clean-form-heading"><p>FREE ESTIMATE · NO OBLIGATION</p><h2>Let’s get your project started.</h2></div><GutterEstimateSteps campaign={campaign}/><a className="clean-form-call" href={`tel:${landingPhoneHref}`}><Phone size={18}/>Call {landingPhone}</a><a className="clean-terms-link" href="#offer-terms">{detailsLabel}</a></div></div></section>
<section className="clean-trust"><div className="clean-shell">{['Local, family & veteran owned','Seamless gutters formed onsite','Free estimates. Clear pricing.'].map(item=><p key={item}><Check size={19}/>{item}</p>)}</div></section>
<section className="clean-projects clean-shell"><p className="clean-eyebrow">REAL HOMES. OUR WORK.</p><h2>A clean finish, down to the details.</h2><p>See gutter installations completed by our team across North Texas.</p><div className="clean-photo-grid">{photos.map(([src,alt])=><a key={src} href={`/landing-projects/${src}.webp`} target="_blank" rel="noopener noreferrer" aria-label={`Open photo: ${alt}`}><Image src={`/landing-projects/${src}.webp`} alt={alt} fill sizes="(min-width:1024px) 33vw,50vw" className="object-cover"/></a>)}</div></section>
<section className="clean-how"><div className="clean-shell"><p className="clean-eyebrow">SIMPLE FROM START TO FINISH</p><h2>Your home. A system that fits.</h2><div className="clean-steps">{[['01','Tell us what you need','Answer a few quick questions above.'],['02','Get your free estimate','We review your roofline and explain the options.'],['03','Enjoy the finished work','Custom-fit gutters, careful installation, and a clean jobsite.']].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
{videoSrc&&<section className="clean-shell clean-video"><h2>{videoTitle}</h2><video controls playsInline preload="none" poster={videoPoster}><source src={videoSrc} type="video/mp4"/></video></section>}
<section id="offer-terms" className="clean-shell clean-terms"><h2>{detailsLabel}</h2><p>{terms}</p><p>Financing available for qualified customers. <Link href="/financing">Explore financing</Link>.</p><a className="clean-button" href="#fall-offer-form">{cta}<ArrowRight size={18}/></a></section>
</main><footer className="clean-footer"><div className="clean-shell"><strong>Rugged American Exteriors</strong><a href={`tel:${landingPhoneHref}`}>{landingPhone}</a><Link href="/privacy-policy">Privacy policy</Link></div></footer>
<a className="clean-sticky-call" href={`tel:${landingPhoneHref}`}><Phone size={19}/>Call {landingPhone}</a></div>;
}
