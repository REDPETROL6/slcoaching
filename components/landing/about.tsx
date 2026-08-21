'use client';

import Image from 'next/image';
import { Dumbbell } from 'lucide-react';
import { Reveal } from './reveal';
import { useLanguage } from '@/lib/language-context';

export function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section className="relative border-t border-border py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="/posing.jpg"
              alt={a.alt}
              fill
              sizes="(max-width: 1024px) 80vw, 35vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 rounded-2xl bg-card px-5 py-4 shadow-md">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <Dumbbell className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <div>
                <div className="text-sm font-extrabold">Sacha</div>
                <div className="text-[11px] font-medium text-muted-foreground">
                  {a.coach}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="text-sm font-semibold text-primary">{a.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {a.title}
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
            {a.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {a.badges.map((item) => (
              <div key={item.k} className="paper-card-soft rounded-xl p-4">
                <div className="text-sm font-bold text-foreground">{item.k}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">
                  {item.v}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
