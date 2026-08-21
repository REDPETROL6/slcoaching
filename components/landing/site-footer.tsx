import { Dumbbell, Instagram, Youtube, Twitter } from 'lucide-react';

const nav = [
  { label: 'Methodology', href: '#methodology' },
  { label: 'Plans', href: '#plans' },
  { label: 'Get Your Protocol', href: '#protocol' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Twitter, label: 'X' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <Dumbbell className="h-4.5 w-4.5" strokeWidth={2.5} />
              </span>
              <span className="text-sm font-extrabold tracking-tight">
                SL PERFORMANCE
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Science-based, 100% asynchronous coaching. Engineer your physique
              with precision protocols, macro calibration, and biomechanical
              form analysis.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Navigate
              </div>
              <ul className="mt-4 space-y-2.5">
                {nav.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Legal
              </div>
              <ul className="mt-4 space-y-2.5">
                {['Privacy Policy', 'Terms of Service', 'Coaching Agreement'].map(
                  (l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-foreground/80 transition-colors hover:text-primary"
                      >
                        {l}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs font-medium text-muted-foreground">
            © {new Date().getFullYear()} SL Performance. All rights reserved.
          </p>
          <p className="text-xs font-medium text-muted-foreground">
            WADA / ADEL Certified · Clean Sport
          </p>
        </div>
      </div>
    </footer>
  );
}
