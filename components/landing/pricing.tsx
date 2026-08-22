'use client';

import { Check, ArrowRight } from 'lucide-react';
import { Reveal } from './reveal';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/language-context';

const prices = ['30', '60', '100'];
const featured = [false, true, false];

export function Pricing() {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <section id="plans" className="relative border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-primary">{p.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {p.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {p.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {p.plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 90}
              className={cn(
                'relative flex h-full flex-col rounded-2xl p-8 transition-all',
                featured[i]
                  ? 'bg-card shadow-soft ring-1 ring-primary/30 lg:-mt-4 lg:mb-4'
                  : 'paper-card hover:shadow-md'
              )}
            >
              {featured[i] && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm">
                  {p.mostPopular}
                </span>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{plan.tagline}</p>

              <div className="mt-6 flex items-end gap-1.5">
                <span className="text-5xl font-extrabold leading-none tracking-tight">
                  {prices[i]}
                </span>
                <span className="mb-1 text-2xl font-medium text-muted-foreground">
                  €
                </span>
              </div>

              <ul className="mt-7 flex-1 space-y-3.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={cn(
                        'mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full',
                        featured[i]
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-primary/10 text-primary'
                      )}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="leading-relaxed text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#protocol"
                className={cn(
                  'group mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold transition-all',
                  featured[i]
                    ? 'bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg'
                    : 'border border-border bg-card text-foreground hover:bg-secondary'
                )}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
