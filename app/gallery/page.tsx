import {pageMetadata} from '@/lib/social-metadata';
import type {Metadata} from 'next';
import {PageHero} from '@/components/sections';
import {ProjectGallery} from '@/components/project-gallery';

export const metadata:Metadata=pageMetadata('Our Work | DFW Exterior Services','Explore real project photos and roofing footage from Rugged American Exteriors across Dallas Fort Worth.','/gallery');

const newProjects = [
  {
    "src": "/gallery/customer-projects/brick-home-exterior.webp",
    "title": "Brick home exterior",
    "category": "Gutters",
    "alt": "Brick home exterior by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/fresh-concrete-patio.webp",
    "title": "Freshly poured concrete patio",
    "category": "Concrete",
    "alt": "Freshly poured concrete patio by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/concrete-side-walkway.webp",
    "title": "Concrete walkway beside a brick home",
    "category": "Concrete",
    "alt": "Concrete walkway beside a brick home by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/brick-home-gutter-roofline.webp",
    "title": "Gutters along a brick home roofline",
    "category": "Gutters",
    "alt": "Gutters along a brick home roofline by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/dark-gutters-brick-home.webp",
    "title": "Dark gutters on a two story brick home",
    "category": "Gutters",
    "alt": "Dark gutters on a two story brick home by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/concrete-formwork.webp",
    "title": "Concrete formwork in progress",
    "category": "Site preparation",
    "alt": "Concrete formwork in progress by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/project-site-preparation.webp",
    "title": "Preparing the site for concrete",
    "category": "Site preparation",
    "alt": "Preparing the site for concrete by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/siding-home-gutters.webp",
    "title": "Gutter installation along siding and trim",
    "category": "Gutters",
    "alt": "Gutter installation along siding and trim by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/porch-gutter-detail.webp",
    "title": "Front porch and roofline detail",
    "category": "Gutters",
    "alt": "Front porch and roofline detail by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/brick-home-downspout.webp",
    "title": "Gutter and downspout detail",
    "category": "Gutters",
    "alt": "Gutter and downspout detail by Rugged American Exteriors"
  },
  {
    "src": "/fall-projects/img_0837.webp",
    "title": "Home exterior and gutter installation",
    "category": "Gutters",
    "alt": "Home exterior and gutter installation by Rugged American Exteriors"
  },
  {
    "src": "/fall-projects/img_0625.webp",
    "title": "Covered patio gutter detail",
    "category": "Gutters",
    "alt": "Covered patio gutter detail by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/img_0602-project.webp",
    "title": "Garage roofline and seamless gutters",
    "category": "Gutters",
    "alt": "Garage roofline and seamless gutters by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/img_0603-project.webp",
    "title": "Front elevation and gutter installation",
    "category": "Gutters",
    "alt": "Front elevation and gutter installation by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/img_0623-project.webp",
    "title": "Black seamless gutter run along brick",
    "category": "Gutters",
    "alt": "Black seamless gutter run along brick by Rugged American Exteriors"
  },
  {
    "src": "/fall-projects/img_0584.webp",
    "title": "Downspout and corner connection",
    "category": "Gutters",
    "alt": "Downspout and corner connection by Rugged American Exteriors"
  },
  {
    "src": "/fall-projects/img_0504.webp",
    "title": "A closer look along the gutter run",
    "category": "Gutters",
    "alt": "A closer look along the gutter run by Rugged American Exteriors"
  },
  {
    "src": "/fall-projects/img_0502.webp",
    "title": "Roof corner and gutter detail",
    "category": "Gutters",
    "alt": "Roof corner and gutter detail by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/img_0424-project.webp",
    "title": "Completed gutters around a brick home",
    "category": "Gutters",
    "alt": "Completed gutters around a brick home by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/img_0433-project.webp",
    "title": "Front entry and exterior gutter detail",
    "category": "Gutters",
    "alt": "Front entry and exterior gutter detail by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/img_0423-project.webp",
    "title": "Side roofline and downspout installation",
    "category": "Gutters",
    "alt": "Side roofline and downspout installation by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/wide-concrete-driveway.webp",
    "title": "Fresh concrete driveway",
    "category": "Concrete",
    "alt": "Fresh concrete driveway by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/backyard-concrete-patio.webp",
    "title": "Concrete patio beside the home",
    "category": "Concrete",
    "alt": "Concrete patio beside the home by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/garage-concrete-driveway.webp",
    "title": "Concrete driveway and garage approach",
    "category": "Concrete",
    "alt": "Concrete driveway and garage approach by Rugged American Exteriors"
  },
  {
    "src": "/gallery/customer-projects/rear-door-concrete-patio.webp",
    "title": "Concrete patio outside the back doors",
    "category": "Concrete",
    "alt": "Concrete patio outside the back doors by Rugged American Exteriors"
  }
];

const projects = [
  {
    src: '/gallery/white-seamless-gutters-brick-home.webp',
    alt: 'White seamless gutters installed on a red brick home',
    title: 'White seamless gutter system',
    detail: 'Custom fitted gutters and downspouts',
  },
  {
    src: '/gallery/bronze-gutters-brick-home.webp',
    alt: 'Bronze seamless gutters installed on a brick home',
    title: 'Color matched seamless gutters',
    detail: 'A clean finish designed around the exterior',
  },
  {
    src: '/gallery/dark-gutters-two-story-home.webp',
    alt: 'Dark seamless gutters on a large two story home',
    title: 'Two story gutter installation',
    detail: 'Dark gutters matched to the trim and roofline',
  },
  {
    src: '/gallery/white-gutters-side-installation.webp',
    alt: 'White gutter and downspout installed along a residential side wall',
    title: 'Seamless side run and downspout',
    detail: 'Custom formed for the full roofline',
  },
  {
    src: '/gallery/garage-seamless-gutter-installation.webp',
    alt: 'White seamless gutter and downspout installed above a garage',
    title: 'Garage gutter installation',
    detail: 'Precise corners and carefully placed drainage',
  },
  {
    src: '/gallery/front-porch-gutter-installation.webp',
    alt: 'White gutters and downspouts installed on a brick home front porch',
    title: 'Front porch gutter system',
    detail: 'A tailored installation with a clean profile',
  },
];

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="OUR WORK"
        title="Real work. Built for real homes."
        desc="See our team at work, from roofing projects to gutters and concrete across North Texas."
      />
      <section aria-labelledby="project-video-heading" className="border-b border-ink/10 bg-steel px-5 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_.8fr] lg:gap-20">
          <div><p className="text-xs font-black uppercase tracking-[.2em] text-[#b83e12]">From the job site</p><h2 id="project-video-heading" className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">A closer look at<br/>the work behind the roof.</h2><p className="mt-5 max-w-lg text-lg leading-8 text-ink/70">Watch a roofing project in progress with the Rugged American Exteriors team.</p><p className="mt-5 text-sm text-ink/60">Press play to watch. Sound and full screen controls are available in the player.</p></div>
          <figure className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-ink/15 bg-white shadow-lg"><video controls playsInline preload="metadata" poster="/project-videos/roofing-project-poster.jpg" aria-label="Rugged American Exteriors roofing project in progress" className="aspect-[9/16] w-full bg-black object-contain"><source src="/project-videos/roofing-project.mp4" type="video/mp4"/>Your browser does not support video playback. <a href="/project-videos/roofing-project.mp4">Download the roofing project video</a>.</video><figcaption className="border-t-4 border-oxide px-5 py-4 font-bold">Roofing project in progress</figcaption></figure>
        </div>
      </section>
      <section id="project-photos" aria-labelledby="project-photos-heading" className="px-5 py-14 md:py-20"><div className="mx-auto max-w-7xl"><div className="mb-8 border-b border-white/15 pb-8"><p className="text-xs font-black uppercase tracking-[.2em] text-oxide">Explore the details</p><h2 id="project-photos-heading" className="mt-3 text-3xl font-extrabold sm:text-5xl">Find the work you want to see.</h2><p className="mt-4 max-w-2xl leading-7 text-ink/70">Browse by project type, then open any photo for a closer look. Finished work and progress photos are kept together by service.</p></div><ProjectGallery projects={[...newProjects,...projects.map(project=>({...project,category:'Gutters'}))]}/></div></section>
    </>
  );
}
