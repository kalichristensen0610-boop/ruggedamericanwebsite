# Rugged American Exteriors

Production-ready Next.js marketing site for a DFW gutter specialist, with painting, roofing, and fencing as secondary divisions.

## Local setup

1. Install Node.js 22.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and replace every placeholder.
4. Run `npm run dev` and open `http://localhost:3000`.

## Estimate email configuration

The form validates all fields on the server, rejects unsupported/oversize uploads, uses a hidden honeypot for basic spam defense, and sends via SMTP. Set `CONTACT_TO_EMAIL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, and `SMTP_PASSWORD`. For higher-volume traffic, add a server-side rate-limit store and Turnstile before launch. Never put SMTP credentials in a `NEXT_PUBLIC_` variable.

## Production and Docker

Run `npm run build`, then `npm start`. For Docker: `docker build -t rugged-american-exteriors .` then `docker run --env-file .env.local -p 3000:3000 rugged-american-exteriors`.

## Research and design decisions

Reviewed current DFW gutter/painting results and leading service-company patterns, including Gutter Tex, Emerson Gutters & Drainage, Paint Corps, LIME Painting, Liberty Gutters, and Phillips Home Improvements. The useful patterns applied here are: service-and-location clarity in the first screen; phone plus estimate CTAs; trust indicators close to the hero; education before sales (5-inch vs. 6-inch, repair vs. replace); proof sections; short forms; and useful, internally linked local landing pages. The design, copy, hierarchy, and components are original.

## Content still required

- Confirmed public website domain
- Logo and brand guide
- Owner names, founder story, and approved veteran/family details
- Real owner/team photos and project photos with service/location captions
- Additional authentic reviews, if desired
- Confirmation of Sherwin-Williams Preferred Contractor wording and any permitted official asset
- SMTP provider credentials (or a preferred transactional email service)
- Any licenses, insurance wording, warranties, financing, hours, or legal policies that should be published
