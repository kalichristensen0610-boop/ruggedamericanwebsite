import type {Metadata} from 'next';
import Link from 'next/link';
import {PageHero} from '@/components/sections';
import {primaryPages,servicePages,serviceAreaPages,legalPages} from '@/lib/site-routes';

export const metadata:Metadata={title:'Sitemap',description:'Browse every active page on the Rugged American Exteriors website.'};

const groups=[
  {title:'Main Pages',pages:primaryPages},
  {title:'Services',pages:servicePages},
  {title:'Service Areas',pages:serviceAreaPages},
  {title:'Website Information',pages:legalPages.filter(page=>page.href!=='/sitemap')},
];

export default function HtmlSitemap(){return <><PageHero eyebrow="FIND YOUR WAY" title="Website Sitemap" desc="Quick links to every active page on the Rugged American Exteriors website."/><section className="px-4 py-16 sm:py-20"><div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">{groups.map(group=><section className="border-t-4 border-oxide bg-white p-6 shadow-[0_8px_24px_rgba(32,29,26,.08)]" key={group.title}><h2 className="font-display text-2xl uppercase">{group.title}</h2><ul className="mt-5 space-y-3">{group.pages.map(page=><li key={page.href}><Link className="font-bold text-ink/70 hover:text-oxide focus:text-oxide" href={page.href}>{page.name}</Link></li>)}</ul></section>)}</div></section></>}
