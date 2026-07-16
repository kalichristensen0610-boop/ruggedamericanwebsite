import type {MetadataRoute} from 'next';
import {allSitePages} from '@/lib/site-routes';

export default function sitemap():MetadataRoute.Sitemap {
  const base=process.env.NEXT_PUBLIC_SITE_URL||'https://www.example.com';
  return allSitePages.map(page=>({
    url:`${base}${page.href==='/'?'':page.href}`,
    lastModified:new Date(),
    changeFrequency:'monthly' as const,
    priority:page.href==='/'?1:page.href.startsWith('/gutter')?.9:.7,
  }));
}
