import type {Metadata} from 'next';
import Link from 'next/link';
import Script from 'next/script';
import {CheckCircle2,Home,Phone} from 'lucide-react';
import {business} from '@/lib/data';

export const metadata:Metadata={
  title:'Thank You',
  description:'Your request has been received by Rugged American Exteriors.',
  robots:{index:false,follow:false},
};

export default function ThankYouPage(){
  return <main className="bg-warm px-4 py-20 md:py-28">
    <Script id="gutter-submission-lead" strategy="afterInteractive" dangerouslySetInnerHTML={{__html:"(function () {\n  var params = new URLSearchParams(window.location.search);\n  var source = params.get('source');\n  var id = params.get('lead_id');\n  if (!['estimate-a', 'fall-seamless-gutters-500-off'].includes(source) ||\n      !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id || '')) return;\n  var key = 'rae:gutter-lead:' + id;\n  var attempts = 0;\n  function send() {\n    try { if (window.localStorage.getItem(key)) return; } catch (_) { return; }\n    if (typeof window.fbq !== 'function') {\n      if (++attempts < 120) window.setTimeout(send, 500);\n      return;\n    }\n    try {\n      window.localStorage.setItem(key, 'sent');\n      window.fbq('track', 'Lead',\n        {content_name: source, content_category: 'Gutter estimate'},\n        {eventID: 'gutter_' + id});\n    } catch (_) {\n      try { window.localStorage.removeItem(key); } catch (_) {}\n    }\n  }\n  send();\n})();"}}/>
    <section className="brand-shadow-lg mx-auto max-w-3xl border-t-8 border-oxide bg-white px-6 py-12 text-center md:px-14 md:py-16">
      <CheckCircle2 className="mx-auto text-oxide" size={64} strokeWidth={2.25} aria-hidden="true"/>
      <p className="mt-6 text-sm font-black uppercase tracking-[.2em] text-oxide">Request received</p>
      <h1 className="mt-3 font-display text-4xl font-black uppercase leading-tight text-ink md:text-6xl">Thank you for reaching out.</h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/70">We received your request, and a member of the Rugged American Exteriors team will be in touch soon.</p>
      <div className="mx-auto mt-9 max-w-xl border border-ink/15 bg-warm p-6">
        <p className="font-bold text-ink">Need help right away? Give us a call.</p>
        <a className="focus-ring mt-3 inline-flex items-center justify-center gap-2 text-2xl font-black text-oxide hover:text-ink" href={`tel:${business.phoneHref}`}>
          <Phone size={24} aria-hidden="true"/>{business.phone}
        </a>
      </div>
      <Link className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-6 py-3 font-black uppercase tracking-wide text-white transition hover:bg-oxide hover:text-ink" href="/">
        <Home size={18} aria-hidden="true"/>Return to homepage
      </Link>
    </section>
  </main>;
}
