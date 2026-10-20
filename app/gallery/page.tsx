import Image from 'next/image';
import type {Metadata} from 'next';
import {PageHero} from '@/components/sections';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'See roofing project footage and completed gutter installations by Rugged American Exteriors across Dallas Fort Worth.',
};

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
        desc="See our team at work, from roofing projects to seamless gutter installations across North Texas."
      />
      <section aria-labelledby="project-video-heading" className="border-b border-ink/10 bg-steel px-5 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_.8fr] lg:gap-20">
          <div><p className="text-xs font-black uppercase tracking-[.2em] text-[#b83e12]">From the job site</p><h2 id="project-video-heading" className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">A closer look at<br/>the work behind the roof.</h2><p className="mt-5 max-w-lg text-lg leading-8 text-ink/70">Watch a roofing project in progress with the Rugged American Exteriors team.</p><p className="mt-5 text-sm text-ink/60">Press play to watch. Sound and full screen controls are available in the player.</p></div>
          <figure className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-ink/15 bg-white shadow-lg"><video controls playsInline preload="metadata" poster="/project-videos/roofing-project-poster.jpg" aria-label="Rugged American Exteriors roofing project in progress" className="aspect-[9/16] w-full bg-black object-contain"><source src="/project-videos/roofing-project.mp4" type="video/mp4"/>Your browser does not support video playback. <a href="/project-videos/roofing-project.mp4">Download the roofing project video</a>.</video><figcaption className="border-t-4 border-oxide px-5 py-4 font-bold">Roofing project in progress</figcaption></figure>
        </div>
      </section>
      <section className="px-5 py-14 md:py-20" aria-labelledby="new-projects-heading"><div className="mx-auto max-w-7xl"><p className="text-xs font-black uppercase tracking-[.2em] text-oxide">More from our job sites</p><h2 id="new-projects-heading" className="mt-3 text-3xl font-extrabold sm:text-5xl">Real homes. Work we're proud of.</h2><p className="mt-4 max-w-2xl leading-7 text-ink/70">Gutter installations, concrete projects, and the preparation behind the finished work. Select any photo for a closer look.</p><div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{newProjects.map(project=><figure key={project.src} className="group overflow-hidden rounded-xl border border-ink/15 bg-white"><a href={project.src} target="_blank" rel="noopener noreferrer" aria-label={`Open photo: ${project.title}`} className="focus-ring relative block aspect-[3/4] overflow-hidden bg-steel"><Image src={project.src} alt={project.alt} fill sizes="(min-width:1024px) 33vw,(min-width:640px) 50vw,100vw" className="object-cover transition-transform duration-700 group-hover:scale-105"/></a><figcaption className="border-t-4 border-oxide p-5"><p className="text-xs font-bold uppercase tracking-wider text-oxide">{project.category}</p><h3 className="mt-2 text-xl font-bold">{project.title}</h3></figcaption></figure>)}</div></div></section>
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6 border-b border-ink/15 pb-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-oxide">Completed projects</p>
              <h2 className="mt-2 font-display text-3xl uppercase sm:text-4xl">Gutter installations</h2>
            </div>
            <p className="hidden max-w-sm text-right text-sm text-ink/60 sm:block">
              Authentic project photos from homes we have worked on.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <figure
                className="group overflow-hidden border border-ink/15 bg-white shadow-[0_8px_24px_rgba(32,29,26,.08)]"
                key={project.src}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-steel">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    priority={index < 3}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute left-4 top-4 bg-oxide px-3 py-2 text-xs font-black uppercase tracking-wider text-ink shadow-lg">
                    Gutters
                  </div>
                </div>
                <figcaption className="border-t-4 border-oxide p-5">
                  <h3 className="font-display text-2xl uppercase">{project.title}</h3>
                  <p className="mt-2 text-sm text-ink/65">{project.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
