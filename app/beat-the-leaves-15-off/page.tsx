import type {Metadata} from 'next';
import {FallGutterOfferPage} from '@/components/fall-gutter-offer-page';

export const metadata:Metadata={
  title:'15% Off Gutters | Beat the Leaves Fall Special',
  description:'Beat the leaves and save 15% on qualifying seamless gutter installation from Rugged American Exteriors in North Texas.',
  robots:{index:false,follow:false},
};

export default function BeatTheLeavesOffer(){return <FallGutterOfferPage
  campaign="beat-the-leaves-15-off"
  badge="15% Off"
  headline="Beat the Leaves."
  highlight="Save 15% This Fall."
  description="Get ahead of falling leaves and North Texas rain with seamless gutters measured, formed, and installed for your home by a local, family owned, veteran owned team."
  cta="Claim My 15% Off"
  terms="Offer applies to qualifying seamless gutter installation or replacement projects completed by Rugged American Exteriors. Cannot be combined with other offers. Contact us for complete terms."
  videoSrc="/fall-videos/beat-the-leaves-15-off.mp4"
  videoPoster="/fall-videos/beat-the-leaves-15-off-poster.jpg"
  videoTitle="Beat the Leaves and Save 15%"
/>;}
