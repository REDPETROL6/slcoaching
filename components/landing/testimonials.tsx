'use client';

import Image from 'next/image';
import { Quote, Star, TrendingUp } from 'lucide-react';
import { Reveal } from './reveal';
import { useLanguage } from '@/lib/language-context';

const transformationImgs = [
  '/aurelien.png',
  '/tom.png',
  '/celine.png'
];

const customDurations = [
  '16 semaines',
  '26 semaines',
  '26 semaines'
];

export function Testimonials() {
  const { t } = useLanguage();
  const r = t.testimonials;

  return (
    <section id="results" className="relative border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold text-primary">{r.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {r.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {r.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {r.items.map((item, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className="paper-card flex flex-col rounded-2xl p-7"
            >
              <Quote className="h-7 w-7 text-primary/40" />
              <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <div className="text-sm font-bold">{item.name}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">
                    {item.detail}
                  </div>
                </div>
                <div className="flex gap-0.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {r.transformations.map((tr, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className="paper-card overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[3/4] w-full bg-muted/20">
                <Image
                  src={transformationImgs[i]}
                  alt={`${tr.focus} ${r.altSuffix}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                  {r.beforeAfter}
                </span>
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-sm font-bold">{tr.focus}</span>
                </div>
                <span className="text-xs font-medium text-muted-foreground">
                  {customDurations[i]}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}