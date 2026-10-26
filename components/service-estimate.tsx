import Link from 'next/link';
import {allServices} from '@/lib/data';
import {EstimateForm} from './estimate-form';

const formServices:Record<string,string>={
 'gutter-installation':'Gutter installation','gutter-repair':'Gutter repair','gutter-guards':'Gutter guards','gutter-cleaning':'Gutter cleaning',
 'painting-services':'Painting','interior-painting':'Interior painting','exterior-painting':'Exterior painting','cabinet-painting':'Cabinet painting',
 roofing:'Roofing inspection',fencing:'Fencing',concrete:'Concrete, tell us more','patio-covers':'Patio cover, tell us more','metal-shops':'Metal shop building',
};
export function ServiceEstimate({slug,dedicated=false}:{slug:string;dedicated?:boolean}){
 const service=allServices.find(item=>item.slug===slug);
 if(!service)return null;
 return <section id="service-estimate" className="scroll-mt-28 px-5 py-10 sm:px-6 md:py-14"><div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-sm font-black uppercase tracking-widest text-oxide">YOUR PROJECT STARTS HERE</p><h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">Let’s talk about your {service.name.toLowerCase()} project.</h2><p className="mt-5 max-w-lg text-lg leading-8">Tell us a little about your property and what you need. Our family will reach out to discuss your project and arrange your free estimate.</p><p className="mt-5">Financing available for qualified customers. <Link href="/financing" className="font-bold text-oxide underline">Explore financing</Link>.</p>{!dedicated&&<Link href={`/${slug}/estimate`} className="mt-6 inline-block font-bold text-oxide underline underline-offset-4">Open the {service.name.toLowerCase()} estimate page</Link>}</div><div className="rae-estimate-spotlight rounded-2xl p-6 sm:p-8"><h3 className="font-black">Free {service.name.toLowerCase()} estimate.</h3><EstimateForm compact fixedService={formServices[slug]||service.name}/></div></div></section>;
}
