import type {Metadata} from 'next';
import {LegalPage,LegalSection} from '@/components/legal-page';
import {business} from '@/lib/data';

export const metadata:Metadata={title:'Accessibility Statement',description:'Rugged American Exteriors commitment to accessible website and customer communication.'};

export default function Accessibility(){return <LegalPage title="Accessibility Statement" description="We want every homeowner to be able to learn about our services and contact our team.">
  <LegalSection title="Our commitment"><p>Rugged American Exteriors is committed to providing an inclusive experience for people with disabilities. We work to make our website understandable, navigable, and usable with common assistive technologies and to improve accessibility as the site changes.</p></LegalSection>
  <LegalSection title="Accessibility practices"><p>Our efforts include meaningful page structure, keyboard accessible navigation, visible focus indicators, descriptive image text, labeled form controls, readable contrast, responsive layouts, a skip link, and content written in clear language. We use the Web Content Accessibility Guidelines as a helpful reference for ongoing improvements.</p></LegalSection>
  <LegalSection title="Ongoing work"><p>Accessibility is an ongoing process. Some third party content or newly added material may not always perform perfectly with every browser, device, or assistive technology. We review reported barriers and make reasonable improvements when we identify them.</p></LegalSection>
  <LegalSection title="Alternative ways to contact us"><p>If a website feature is difficult to use, we will make a reasonable effort to provide the same information or service another way. Call <a className="font-bold text-oxide underline" href={`tel:${business.phoneHref}`}>{business.phone}</a> or email <a className="font-bold text-oxide underline" href={`mailto:${business.email}`}>{business.email}</a>. Please describe the page, feature, and assistance you need. We welcome accessibility feedback.</p></LegalSection>
  <LegalSection title="Third party content"><p>This website links to outside services such as social media and Google Reviews. We cannot control the accessibility of third party platforms, but we encourage their providers to offer accessible experiences.</p></LegalSection>
</LegalPage>}
