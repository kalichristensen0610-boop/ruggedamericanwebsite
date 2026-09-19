import type {Metadata} from 'next';
import {FallGutterOfferPage} from '@/components/fall-gutter-offer-page';

export const metadata:Metadata={
  title:'$500 Off Full Seamless Gutter Systems | Fall Special',
  description:'Save $500 on a qualifying full seamless gutter system from Rugged American Exteriors this fall. Request a free North Texas estimate.',
  robots:{index:false,follow:false},
};

export default function FallFullSystemOffer(){return <FallGutterOfferPage
  campaign="fall-seamless-gutters-500-off"
  badge="$500 Off"
  headline="A Full Seamless Gutter System."
  highlight="$500 Off This Fall."
  description="Prepare your whole roofline for fall with a complete seamless gutter system formed onsite and installed around your home by a local North Texas team."
  cta="Claim My $500 Off"
  terms="Offer applies to qualifying full seamless gutter system installations completed by Rugged American Exteriors. Cannot be combined with other offers. Contact us for eligibility and complete terms."
  videoSrc="/fall-videos/fall-500-off.mp4"
  videoPoster="/fall-videos/fall-500-off-poster.jpg"
  videoTitle="Save $500 on a Full Seamless Gutter System"
/>;}
