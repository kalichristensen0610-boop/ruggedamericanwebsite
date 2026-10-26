import {notFound} from 'next/navigation';
import Link from 'next/link';
import {allServices} from '@/lib/data';
import {pageMetadata} from '@/lib/social-metadata';
import {ServiceEstimate} from '@/components/service-estimate';
export function generateStaticParams(){return allServices.map(service=>({slug:service.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const service=allServices.find(item=>item.slug===slug);
 return service?pageMetadata(`Free ${service.name} Estimate`,`Request a free ${service.name.toLowerCase()} estimate from Rugged American Exteriors in Dallas Fort Worth.`,`/${slug}/estimate`):{};
}
export default async function EstimatePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const service=allServices.find(item=>item.slug===slug);if(!service)notFound();
 return <><header className="mx-auto max-w-7xl px-5 pt-10 sm:px-6"><Link href={`/${slug}`} className="font-bold text-oxide underline">Back to {service.name}</Link><h1 className="mt-5 text-4xl font-black sm:text-5xl">Your free {service.name.toLowerCase()} estimate.</h1></header><ServiceEstimate slug={slug} dedicated/></>;
}
