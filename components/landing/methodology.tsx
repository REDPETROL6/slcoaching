'use client';

import {
  VideoOff,
  CalendarX,
  FileSpreadsheet,
  ScanLine,
  GraduationCap,
  BadgeCheck,
} from 'lucide-react';
import { Reveal } from './reveal';
import { useLanguage } from '@/lib/language-context';

const pillarIcons = [VideoOff, CalendarX, FileSpreadsheet, ScanLine];
const credentialIcons = [GraduationCap, BadgeCheck];

export function Methodology() {
  const { t } = useLanguage();
  const m = t.methodology;

  return (
    <section id="methodology" className="relative border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold text-primary">{m.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {m.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {m.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {m.pillars.map((p, i) => {
            const Icon = pillarIcons[i];
            return (
              <Reveal
                key={p.title}
                delay={i * 80}
                className="paper-card group rounded-2xl p-7 transition-all hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {m.credentials.map((c, i) => {
            const Icon = credentialIcons[i];
            return (
              <Reveal
                key={c.title}
                delay={i * 80}
                className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/[0.04] p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {c.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
