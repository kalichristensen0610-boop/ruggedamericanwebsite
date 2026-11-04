import type {Metadata} from 'next';
import {FallGutterOfferPage} from '@/components/fall-gutter-offer-page';

export const metadata:Metadata={
  title:'North Texas Seamless Gutters',
  description:'Seamless gutter installation, replacement, guards, repair, and cleaning from a local, family and veteran owned North Texas contractor.',
  robots:{index:false,follow:false},
};

export default function EstimateA(){return <FallGutterOfferPage
 campaign="estimate-a"
 badge="Free Estimates"
 headline="North Texas Gutters"
 highlight="Done Right."
 description="Seamless gutters measured, formed onsite, and installed around your home. Local, family owned, and veteran owned in Dallas-Fort Worth."
 cta="Get My Free Estimate"
 detailsLabel="Estimate details"
 terms="Your gutter estimate is free and comes with no obligation. Tell us what you need, and our team will reach out to discuss the project, confirm service availability, and arrange the next step."
/>;}
