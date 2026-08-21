'use client';

import { useState } from 'react';
import { Check, Loader2, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Reveal } from './reveal';
import { useLanguage } from '@/lib/language-context';

const fieldBase =
  'w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/50 focus:ring-4 focus:ring-primary/10';

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>(
    'idle'
  );

  const valid =
    form.name.trim() !== '' &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.message.trim() !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e7005c25-5d5b-4178-b000-ccaf37ad2dc7',
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Nouveau message de contact - SL Performance`
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('done');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative border-t border-border py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <span className="text-sm font-semibold text-primary">{c.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {c.title}
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
            {c.intro}
          </p>
          <div className="mt-8 space-y-3.5">
            {c.points.map((line) => (
              <div
                key={line}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {line}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="paper-card rounded-2xl p-7 sm:p-8">
          {status === 'done' ? (
            <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success">
                <Check className="h-7 w-7" strokeWidth={3} />
              </span>
              <h3 className="mt-5 text-xl font-bold">{c.sentTitle}</h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                {c.sentBody}
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-6 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                {c.another}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-foreground">
                  {c.name}
                </span>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={c.namePlaceholder}
                  className={fieldBase}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-foreground">
                  {c.email}
                </span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={c.emailPlaceholder}
                  className={fieldBase}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-foreground">
                  {c.message}
                </span>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  placeholder={c.messagePlaceholder}
                  className={cn(fieldBase, 'resize-none')}
                />
              </label>

              {status === 'error' && (
                <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  {c.error}
                </p>
              )}

              <button
                type="submit"
                disabled={!valid || status === 'submitting'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 disabled:opacity-40"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {c.sending}
                  </>
                ) : (
                  <>
                    {c.send}
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}