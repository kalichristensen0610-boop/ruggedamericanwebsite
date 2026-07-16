import type {ReactNode} from 'react';
import {PageHero} from '@/components/sections';

export function LegalPage({title, description, children}:{title:string;description:string;children:ReactNode}) {
  return <><PageHero eyebrow="WEBSITE INFORMATION" title={title} desc={description}/><section className="px-4 py-16 sm:py-20"><article className="legal-content mx-auto max-w-4xl bg-white p-6 shadow-[0_10px_35px_rgba(32,29,26,.08)] sm:p-10"><p className="mb-10 border-l-4 border-oxide pl-4 text-sm font-bold text-ink/65">Last updated July 16, 2026</p>{children}</article></section></>;
}

export function LegalSection({title,children}:{title:string;children:ReactNode}) {
  return <section className="mb-10"><h2 className="font-display text-2xl uppercase sm:text-3xl">{title}</h2><div className="mt-4 space-y-4 leading-7 text-ink/75">{children}</div></section>;
}
