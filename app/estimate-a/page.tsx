import type {Metadata} from 'next';
import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import {LandingPageClient} from './landing-page-client';
import './landing-page.css';

export const metadata:Metadata={
  title:'North Texas Seamless Gutters',
  description:'Seamless gutter installation, replacement, guards, repair, and cleaning from a local, family and veteran owned North Texas contractor.',
  robots:{index:false,follow:false},
};

function landingMarkup(){
  const source=readFileSync(join(process.cwd(),'app','estimate-a','landing.html'),'utf8');
  const body=source.match(/<body[^>]*>([\s\S]*?)<script\s+src="script\.js"><\/script>[\s\S]*?<\/body>/i)?.[1];
  if(!body) throw new Error('The Estimate A landing-page markup could not be loaded.');
  return body.replaceAll('src="images/','src="/estimate-a-assets/');
}

export default function EstimateA(){
  return <LandingPageClient html={landingMarkup()}/>;
}
