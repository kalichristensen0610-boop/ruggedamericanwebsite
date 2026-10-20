import type {Metadata} from 'next';
export const publicSite='https://ruggedamericanexteriors.com';
export const shareImage={url:`${publicSite}/social/dfw-exterior-services-share-v2.jpg`,width:1200,height:630,alt:'Rugged American Exteriors, DFW Exterior Services. Gutters, concrete and patio covers.'};
export function pageMetadata(title:string,description:string,path:string):Metadata{
 const previewTitle=`${title} | Rugged American Exteriors`;
 return {title,description,alternates:{canonical:`${publicSite}${path}`},openGraph:{type:'website',siteName:'Rugged American Exteriors',locale:'en_US',url:`${publicSite}${path}`,title:previewTitle,description,images:[shareImage]},twitter:{card:'summary_large_image',title:previewTitle,description,images:[shareImage.url]}};
}
