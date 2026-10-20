import type {Metadata} from 'next';
export const publicSite='https://ruggedamericanexteriors.com';
export const shareImage={url:`${publicSite}/social/built-for-your-home-share-v3.jpg`,width:1200,height:630,alt:'Built for the exterior of your home. Gutters, concrete, patio covers and more.'};
export function pageMetadata(title:string,description:string,path:string):Metadata{
 const previewTitle=`${title.replace(/DFW Exterior Services/g, "Built for the exterior of your home")} | Rugged American Exteriors`;
 return {title,description,alternates:{canonical:`${publicSite}${path}`},openGraph:{type:'website',siteName:'Rugged American Exteriors',locale:'en_US',url:`${publicSite}${path}`,title:previewTitle,description,images:[shareImage]},twitter:{card:'summary_large_image',title:previewTitle,description,images:[shareImage.url]}};
}