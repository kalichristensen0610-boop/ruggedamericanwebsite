'use client';

import {usePathname} from 'next/navigation';
import {Footer,Header,PersistentActions} from './site';

const standaloneRoutes=new Set(['/estimate-a']);

export function SiteShell({children}:{children:React.ReactNode}){
  const pathname=usePathname();

  if(standaloneRoutes.has(pathname)) return <>{children}</>;

  return <div className="pb-20 md:pb-0">
    <a href="#main" className="focus-ring fixed left-2 top-2 z-[100] -translate-y-20 bg-white p-3 focus:translate-y-0">Skip to content</a>
    <Header/>
    <main id="main">{children}</main>
    <Footer/>
    <PersistentActions/>
  </div>;
}
