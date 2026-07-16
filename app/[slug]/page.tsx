import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {allServices} from '@/lib/data';
import {PageHero, Checklist, CTA, Eyebrow} from '@/components/sections';
import {Button} from '@/components/ui/button';

export function generateStaticParams() {
  return allServices.map((service) => ({slug: service.slug}));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params;
  const service = allServices.find((item) => item.slug === slug);
  if (!service) return {};

  return {
    title: `${service.name} in Dallas Fort Worth`,
    description: `${service.desc} Free estimates from a local, family owned, veteran owned DFW exterior company.`,
    alternates: {canonical: `/${slug}`},
  };
}

export default async function Service({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const service = allServices.find((item) => item.slug === slug);
  if (!service) notFound();

  const isGutterInstallation = slug === 'gutter-installation';
  const isGutterService = slug.startsWith('gutter-');
  const isRoofing = slug === 'roofing';
  const isPainting = ['painting-services','interior-painting','exterior-painting','cabinet-painting'].includes(slug);
  const paintingDetails:Record<string,{heading:string;intro:string;cards:Array<[string,string]>}>={
    'painting-services':{heading:'A detailed painting process built around your space',intro:'Every painting project starts with the surface, the surrounding environment, and the finish you want to achieve. We use and work with trusted Sherwin-Williams products, selecting coatings and preparation methods for the specific application.',cards:[['Preparation first','We identify surface wear, make appropriate minor repairs, clean and prepare the work area, and create a clear plan before coating begins.'],['Protection and organization','Floors, furniture, fixtures, landscaping, roofing, and nearby finishes are protected according to the project area.'],['The right product for the surface','We help narrow color, sheen, and product choices based on appearance, durability, cleaning needs, moisture, and exposure.'],['A finish we review together','Our team applies the selected system carefully, keeps the area organized, completes cleanup, and walks the finished work with you.']]},
    'interior-painting':{heading:'Fresh rooms without unnecessary disruption',intro:'Interior painting should improve the room without taking over your home. We plan the sequence, protect the spaces around us, and use trusted Sherwin-Williams products selected for the room, surface, sheen, and everyday use.',cards:[['Room preparation','We review walls, ceilings, trim, and doors, then address appropriate nail holes, minor imperfections, loose caulk, and surfaces that need sanding or primer.'],['Protection inside your home','Furniture is moved or covered as the scope requires. Floors, fixtures, hardware, windows, and adjacent finishes are masked and protected before application.'],['Color and sheen guidance','We help you consider lighting, existing finishes, traffic, washability, moisture, and how flat, eggshell, satin, or higher sheen options will perform.'],['Careful application and cleanup','Paint is applied with the method best suited to the surface. We maintain an orderly work area, remove coverings, complete touchups, and conduct a final walkthrough.']]},
    'exterior-painting':{heading:'Preparation for a finish that faces Texas weather',intro:'Exterior paint must handle sun, heat, moisture, and changing North Texas conditions. We evaluate the existing finish and use trusted Sherwin-Williams products chosen for the substrate, exposure, and desired appearance.',cards:[['Exterior surface preparation','Depending on the condition, preparation may include cleaning, scraping loose coating, sanding, caulking gaps, addressing minor surface defects, and spot priming bare areas.'],['Protection around the home','Landscaping, windows, roofing, masonry, concrete, fixtures, and other surfaces outside the painting scope are covered or masked as needed.'],['Product and color planning','We help compare colors and sheens while considering siding or trim material, sun exposure, existing architectural elements, and product requirements.'],['Weather aware application','We schedule and apply coatings with suitable weather conditions in mind, maintain a clean site, inspect coverage and details, and finish with a customer walkthrough.']]},
    'cabinet-painting':{heading:'A controlled process for a furniture grade look',intro:'Cabinet painting depends on disciplined preparation and products designed for repeated handling. We use trusted Sherwin-Williams products selected for cabinetry and build the finish through an organized, step by step process.',cards:[['Labeling and preparation','Doors, drawer fronts, and hardware are carefully identified before removal. Surfaces are cleaned to remove residue, then sanded and prepared for proper primer adhesion.'],['Kitchen and bath protection','Counters, backsplashes, floors, walls, appliances, and cabinet interiors outside the scope are masked and protected to control dust and overspray.'],['Cabinet coating selection','We guide color and sheen decisions and select a primer and coating system appropriate for the cabinet material, existing finish, and expected use.'],['Application and reassembly','Coatings are applied in controlled stages with proper drying between steps. Components are carefully reinstalled, details are reviewed, and we complete a final walkthrough.']]},
  };
  const paintingDetail=paintingDetails[slug];
  const paintingArea=slug==='interior-painting'?'rooms, walls, ceilings, trim, and doors':slug==='exterior-painting'?'siding, trim, fascia, soffit, doors, and exterior details':slug==='cabinet-painting'?'cabinet boxes, doors, drawer fronts, and surrounding surfaces':'interior, exterior, or cabinet surfaces';
  const processSteps:Array<[string,string]>=isGutterService?[
    ['Free Estimate','Contact us for a free, no obligation gutter estimate. We will learn what you are seeing and schedule a convenient time to evaluate the system.'],
    ['Property Walkthrough','We inspect the roofline, fascia, existing gutters, drainage paths, and downspout locations, take measurements, and discuss water management concerns.'],
    ['Clear Plan and Timeline','We explain sizing, repairs, replacement options, guards, or cleaning needs as applicable, then provide a clear scope, price, and expected schedule.'],
    ['Professional Completion','Our crew completes the gutter work carefully, respects the property, cleans the work area, tests drainage where practical, and reviews the finished system with you.'],
  ]:isRoofing?[
    ['Free Estimate','Contact us to schedule a free, no obligation roof inspection and estimate for repair or replacement.'],
    ['Property Walkthrough','We inspect accessible roof areas for age, storm, hail, wind, and other visible damage, document our findings, take measurements, and discuss your concerns.'],
    ['Clear Plan and Timeline','We explain cash and insurance related options, answer scope and material questions, provide straightforward pricing, and outline the expected roofing schedule.'],
    ['Professional Completion','Our team completes the approved roof work carefully, protects the property, manages cleanup, and conducts a final walkthrough. Coverage decisions remain with your carrier and policy.'],
  ]:isPainting?[
    ['Free Estimate',`Contact us to schedule a free, no obligation ${service.name.toLowerCase()} estimate and tell us what you want to change.`],
    ['Property Walkthrough',`We inspect the ${paintingArea}, take measurements, discuss colors and performance concerns, and learn how you want the finished space to look and function.`],
    ['Clear Plan and Timeline','We explain the preparation, protection, Sherwin-Williams product options, application approach, scope, pricing, and expected project schedule.'],
    ['Professional Completion',`Our painters complete the ${service.name.toLowerCase()} carefully, keep the property protected and organized, clean the work area, address final details, and walk the finished project with you.`],
  ]:[
    ['Free Estimate','Contact us to schedule a free, no obligation estimate and tell us what you want to accomplish.'],
    ['Property Walkthrough','We inspect the project area, take measurements, discuss concerns, and learn what matters most for the finished work.'],
    ['Clear Plan and Timeline','We provide straightforward recommendations, explain the scope and pricing, answer questions, and outline the expected schedule.'],
    ['Professional Completion','Our team completes the work carefully, respects the property, cleans the work area, and conducts a final walkthrough.'],
  ];
  const eyebrow =
    'eyebrow' in service && typeof service.eyebrow === 'string'
      ? service.eyebrow
      : 'RUGGED AMERICAN EXTERIORS';

  return (
    <>
      <PageHero eyebrow={eyebrow} title={service.title} desc={service.desc} />
      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <Eyebrow>WHAT’S INCLUDED</Eyebrow>
            <h2 className="font-display text-4xl uppercase">A clear scope. A practical recommendation.</h2>
          </div>
          <div>
            <Checklist items={service.items} />

            {isGutterService&&<aside className="mt-12 overflow-hidden border-2 border-oxide bg-ink text-white shadow-[0_12px_35px_rgba(32,29,26,.18)]"><div className="grid gap-6 p-7 sm:p-9 md:grid-cols-[1fr_auto] md:items-center"><div><p className="text-xs font-black uppercase tracking-[.22em] text-oxide">WE STAND BEHIND OUR WORK</p><h3 className="mt-3 font-display text-3xl uppercase sm:text-4xl">Lifetime Workmanship Warranty on Gutter Installations</h3><p className="mt-4 max-w-3xl text-white/75">Qualifying gutter installation workmanship completed by Rugged American Exteriors is backed by our lifetime workmanship warranty. This coverage applies to our installation workmanship and is separate from any manufacturer or material warranty.</p></div><Button asChild><Link href="/contact">Request Complete Warranty Terms</Link></Button></div></aside>}

            {paintingDetail&&<section className="mt-12 overflow-hidden border border-ink/15 bg-white shadow-[0_10px_30px_rgba(32,29,26,.08)]"><div className="grid gap-6 bg-ink p-7 text-white sm:p-9 md:grid-cols-[1fr_auto] md:items-center"><div><Eyebrow>PRODUCTS AND PROCESS</Eyebrow><h3 className="font-display text-3xl uppercase sm:text-4xl">{paintingDetail.heading}</h3><p className="mt-4 max-w-3xl text-white/75">{paintingDetail.intro}</p></div><div className="rounded-sm bg-white p-4"><Image src="/sherwin-williams-logo.png" alt="Sherwin-Williams" width={262} height={88} className="h-auto w-52"/></div></div><div className="grid gap-px bg-ink/15 sm:grid-cols-2">{paintingDetail.cards.map(([title,description])=><article className="bg-white p-6 sm:p-8" key={title}><h4 className="font-display text-2xl uppercase">{title}</h4><p className="mt-3 text-ink/70">{description}</p></article>)}</div><p className="border-t border-ink/15 bg-steel px-6 py-4 text-xs text-ink/60 sm:px-8">Sherwin-Williams is a trademark of The Sherwin-Williams Company. Product use does not imply affiliation, certification, or endorsement.</p></section>}

            {isRoofing && (
              <div className="mt-12 space-y-8">
                <section className="overflow-hidden border border-ink/15 bg-white shadow-[0_10px_30px_rgba(32,29,26,.08)]">
                  <div className="bg-ink p-7 text-white sm:p-9">
                    <Eyebrow>FREE ROOF INSPECTIONS</Eyebrow>
                    <h3 className="font-display text-3xl uppercase sm:text-4xl">Know what is happening before deciding what comes next.</h3>
                    <p className="mt-4 max-w-3xl text-white/75">
                      Our free, no obligation inspection looks for visible signs of hail, wind, storm, age related, and other roof damage. We document what we find, explain it in plain language, and give you practical options without pressuring you into a decision.
                    </p>
                    <div className="mt-6">
                      <Button asChild><Link href="/contact">Schedule Your Free Roof Inspection</Link></Button>
                    </div>
                  </div>

                  <div className="grid gap-px bg-ink/15 md:grid-cols-2">
                    <article className="bg-white p-7 sm:p-8">
                      <p className="text-xs font-black uppercase tracking-[.2em] text-oxide">CASH ROOFING ESTIMATES</p>
                      <h3 className="mt-3 font-display text-3xl uppercase">A competitive bid with a clear scope</h3>
                      <p className="mt-4 text-ink/70">
                        Paying out of pocket can be the right path when damage is not covered, a claim is not appropriate, or you simply prefer a direct cash project. We provide a competitive written bid that explains the recommended work, materials, and project scope so you can compare your options confidently.
                      </p>
                      <div className="mt-6"><Button asChild><Link href="/contact">Request a Cash Bid</Link></Button></div>
                    </article>

                    <article className="bg-steel p-7 sm:p-8">
                      <p className="text-xs font-black uppercase tracking-[.2em] text-oxide">INSURANCE CLAIM ASSISTANCE</p>
                      <h3 className="mt-3 font-display text-3xl uppercase">Help understanding the process</h3>
                      <p className="mt-4 text-ink/70">
                        If the inspection shows damage that may qualify for coverage, we help you understand the next steps and the benefits available under your policy. We can provide documentation, answer roofing questions, and help keep communication organized throughout the claim and construction process.
                      </p>
                      <div className="mt-6"><Button asChild><Link href="/contact">Get Help With Your Roofing Claim</Link></Button></div>
                    </article>
                  </div>
                </section>

                <section className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
                  <div className="border-l-4 border-oxide bg-ink p-7 text-white sm:p-8">
                    <p className="text-xs font-black uppercase tracking-[.2em] text-oxide">WORKING WITH YOUR ADJUSTER</p>
                    <h3 className="mt-3 font-display text-3xl uppercase">Clear coordination from the roof to the paperwork</h3>
                    <p className="mt-4 text-white/70">
                      When requested, we coordinate with your insurance carrier and adjuster, share relevant roof findings, discuss the repair scope, and help answer construction questions. Our role is to make the roofing side easier to understand and help you use the benefits your policy provides.
                    </p>
                  </div>
                  <div className="border border-ink/15 bg-white p-7 sm:p-8">
                    <p className="text-xs font-black uppercase tracking-[.2em] text-oxide">FROM INSPECTION TO INSTALLATION</p>
                    <ol className="mt-5 grid gap-4 sm:grid-cols-2">
                      {[
                        ['01', 'Inspect and document', 'We examine the roof and explain any visible damage.'],
                        ['02', 'Review your options', 'Choose a cash bid or decide whether to contact your carrier.'],
                        ['03', 'Coordinate the scope', 'We help organize roofing details and communication.'],
                        ['04', 'Complete the work', 'Our team schedules installation and walks through the finished project.'],
                      ].map(([number, title, description]) => (
                        <li key={number} className="border-t-2 border-oxide pt-4">
                          <span className="text-xs font-black text-oxide">{number}</span>
                          <h4 className="mt-2 font-bold">{title}</h4>
                          <p className="mt-2 text-sm text-ink/65">{description}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </section>

                <aside className="border border-ink/20 bg-steel p-6 text-sm text-ink/70">
                  <strong className="text-ink">A straightforward note about coverage:</strong> We cannot promise claim approval or guarantee a specific insurance payment. Coverage, claim decisions, deductibles, and payments are determined by your insurance carrier and the terms of your policy.
                </aside>
              </div>
            )}

            {isGutterInstallation && (
              <>
                <div className="mt-12 overflow-hidden border border-ink/15 bg-steel">
                  <div className="bg-ink px-6 py-8 text-white sm:px-8">
                    <Eyebrow>FORMED AT YOUR HOME</Eyebrow>
                    <h3 className="mt-2 font-display text-3xl uppercase sm:text-4xl">
                      Custom seamless gutters made for your roofline
                    </h3>
                    <p className="mt-4 max-w-3xl text-white/75">
                      We measure your home first, then feed gutter coil through the professional roll forming machine in our trailer. Each straight run comes out at the length your home needs, ready to be fitted onsite.
                    </p>
                  </div>
                  <div className="grid gap-px bg-ink/15 sm:grid-cols-2">
                    <article className="bg-white p-6 sm:p-8">
                      <p className="text-xs font-black tracking-[.2em] text-oxide">CONTINUOUS RUNS</p>
                      <h4 className="mt-3 font-display text-2xl uppercase">Fewer joints along the roofline</h4>
                      <p className="mt-3 text-ink/70">
                        Forming long sections onsite eliminates unnecessary seams across straight gutter runs. The result is a cleaner appearance and fewer connection points to maintain.
                      </p>
                    </article>
                    <article className="bg-white p-6 sm:p-8">
                      <p className="text-xs font-black tracking-[.2em] text-oxide">CUSTOM CORNERS</p>
                      <h4 className="mt-3 font-display text-2xl uppercase">Fabricated by hand without strip miters</h4>
                      <p className="mt-3 text-ink/70">
                        We hand cut and build each inside and outside corner to follow the actual angles of your home. Instead of covering the joint with a bulky miter strip, we create a tailored transition, then fasten and seal it carefully for dependable drainage and a sharper finished look.
                      </p>
                    </article>
                  </div>
                  <ol className="grid gap-4 p-6 sm:grid-cols-4 sm:p-8">
                    {['Measure the roofline', 'Form each gutter run', 'Build custom corners', 'Fit outlets and downspouts'].map((step, index) => (
                      <li key={step} className="border-l-2 border-oxide pl-4">
                        <span className="text-xs font-black text-oxide">0{index + 1}</span>
                        <p className="mt-2 font-bold">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2">
                  <div className="border-t-4 border-oxide bg-white p-6">
                    <h3 className="font-display text-2xl uppercase">Repair may fit when</h3>
                    <p className="mt-3 text-ink/70">
                      Damage is limited, the system is otherwise sound, and the pitch, sizing, and drainage layout are working.
                    </p>
                  </div>
                  <div className="border-t-4 border-ink bg-steel p-6">
                    <h3 className="font-display text-2xl uppercase">Replacement may fit when</h3>
                    <p className="mt-3 text-ink/70">
                      Problems are widespread, sections repeatedly fail, capacity is inadequate, or the layout needs a broader correction.
                    </p>
                  </div>
                </div>
              </>
            )}

            <div className="mt-12">
              <Eyebrow>WHAT TO EXPECT</Eyebrow>
              <h3 className="font-display text-3xl uppercase">Our four step process</h3>
              <ol className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {processSteps.map(([step,description], index) => (
                  <li className="border-t-4 border-oxide bg-white p-5 shadow-[0_8px_22px_rgba(32,29,26,.06)]" key={step}>
                    <span className="text-xs font-black text-oxide">0{index + 1}</span>
                    <h4 className="mt-3 font-display text-xl uppercase">{step}</h4>
                    <p className="mt-3 text-sm leading-6 text-ink/65">{description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-14">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold">Also serving homeowners across the Metroplex.</p>
          <Link className="mt-3 inline-block font-black text-oxide" href="/service-areas">
            Explore service areas
          </Link>
        </div>
      </section>
      {isRoofing ? (
        <CTA eyebrow="A simpler roofing process" title="Start with a free, no obligation roof inspection." label="Schedule Your Free Roof Inspection" />
      ) : (
        <CTA />
      )}
    </>
  );
}
