'use client';

import Image from 'next/image';
import { ArrowRight, Activity, ShieldCheck, LineChart } from 'lucide-react';
import { Reveal } from './reveal';
import { useLanguage } from '@/lib/language-context';

const cardIcons = [Activity, LineChart, ShieldCheck];

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 warm-gradient" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <div>
          <Reveal className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-medium tracking-wide text-muted-foreground">
              {h.badge}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {h.title1}{' '}
              <span className="text-primary">{h.title1Accent}</span>
              <br />
              {h.title2}
              <br className="hidden sm:block" /> {h.title2Break}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {h.subtitle}
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#protocol"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              {h.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#methodology"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-secondary"
            >
              {h.ctaSecondary}
            </a>
          </Reveal>

          <Reveal delay={320} className="mt-10 flex flex-wrap gap-8">
            {h.stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-foreground sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-0.5 text-xs font-medium tracking-wide text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-soft sm:aspect-[4/4]">
            <Image
              src="/sachahero.jpg"
              alt={h.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {h.cards.map((card, i) => {
              const Icon = cardIcons[i];
              return (
                <div
                  key={card.label}
                  className="paper-card-soft flex flex-col items-center gap-1.5 rounded-xl px-2 py-3 text-center"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-[11px] font-medium tracking-wide text-muted-foreground">
                    {card.label}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
