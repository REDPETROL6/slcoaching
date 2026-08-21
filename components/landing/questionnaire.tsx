'use client';

import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Ruler,
  Dumbbell,
  HeartPulse,
  Salad,
  Camera,
  Loader2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Reveal } from './reveal';
import { useLanguage } from '@/lib/language-context';

type FormState = {
  age: string;
  gender: string;
  heightCm: string;
  weightKg: string;
  primaryGoal: string;
  daysPerWeek: string;
  timePerSession: string;
  equipment: string;
  experienceYears: string;
  injuries: string;
  allergies: string;
  dietaryRestrictions: string;
  dailyCalories: string;
  wantsPhotoAnalysis: boolean;
};

const initialState: FormState = {
  age: '',
  gender: '',
  heightCm: '',
  weightKg: '',
  primaryGoal: '',
  daysPerWeek: '',
  timePerSession: '',
  equipment: '',
  experienceYears: '',
  injuries: '',
  allergies: '',
  dietaryRestrictions: '',
  dailyCalories: '',
  wantsPhotoAnalysis: false,
};

const stepIcons = [Ruler, Dumbbell, HeartPulse, Salad, Camera];

const fieldBase =
  'w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/50 focus:ring-4 focus:ring-primary/10';

const labelClass = 'mb-2 block text-sm font-medium text-foreground';

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      {children}
      {hint && (
        <span className="mt-1.5 block text-xs text-muted-foreground">{hint}</span>
      )}
    </label>
  );
}

export function Questionnaire() {
  const { t } = useLanguage();
  const q = t.questionnaire;
  const f = q.fields;

  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>(
    'idle'
  );

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const stepValid = () => {
    if (step === 0) {
      return (
        form.age.trim() !== '' &&
        form.gender.trim() !== '' &&
        form.primaryGoal.trim() !== ''
      );
    }
    return true;
  };

  const next = () => setStep((s) => Math.min(s + 1, stepIcons.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async () => {
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
          subject: '🔥 Nouvelle candidature Coaching - SL Performance',
          Âge: form.age,
          Genre: form.gender,
          Taille: form.heightCm ? `${form.heightCm} cm` : 'Non précisé',
          Poids: form.weightKg ? `${form.weightKg} kg` : 'Non précisé',
          Objectif_Principal: form.primaryGoal,
          Jours_Entraînement: form.daysPerWeek || 'Non précisé',
          Durée_Session: form.timePerSession || 'Non précisé',
          Matériel_Disponible: form.equipment || 'Aucun/Non précisé',
          Années_Expérience: form.experienceYears || 'Non précisé',
          Blessures: form.injuries || 'Aucune',
          Allergies: form.allergies || 'Aucune',
          Restrictions_Alimentaires: form.dietaryRestrictions || 'Aucune',
          Calories_Actuelles: form.dailyCalories ? `${form.dailyCalories} kcal` : 'Ne compte pas',
          Analyse_Posturale: form.wantsPhotoAnalysis ? 'Oui (Photos à demander)' : 'Non'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('done');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const isLast = step === stepIcons.length - 1;
  const stepLabel = q.stepOf
    .replace('{n}', String(step + 1))
    .replace('{total}', String(stepIcons.length));

  return (
    <section id="protocol" className="relative border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold text-primary">{q.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {q.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {q.intro}
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="paper-card overflow-hidden rounded-3xl">
            {status === 'done' ? (
              <div className="flex flex-col items-center px-6 py-20 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-success/15 text-success">
                  <Check className="h-8 w-8" strokeWidth={3} />
                </span>
                <h3 className="mt-6 text-2xl font-extrabold">{q.done.title}</h3>
                <p className="mt-3 max-w-md text-base text-muted-foreground">
                  {q.done.body}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(initialState);
                    setStep(0);
                    setStatus('idle');
                  }}
                  className="mt-8 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  {q.done.another}
                </button>
              </div>
            ) : (
              <>
                {/* Stepper */}
                <div className="border-b border-border bg-secondary/40 px-6 py-5 sm:px-9">
                  <div className="flex items-center justify-between">
                    {q.steps.map((s, i) => {
                      const active = i === step;
                      const complete = i < step;
                      const Icon = stepIcons[i];
                      return (
                        <div key={i} className="flex flex-1 items-center">
                          <div className="flex flex-col items-center gap-2">
                            <span
                              className={cn(
                                'grid h-10 w-10 place-items-center rounded-full border-2 transition-all',
                                active &&
                                  'border-primary bg-primary text-primary-foreground shadow-sm',
                                complete &&
                                  'border-success/50 bg-success/15 text-success',
                                !active &&
                                  !complete &&
                                  'border-border bg-card text-muted-foreground'
                              )}
                            >
                              {complete ? (
                                <Check className="h-4 w-4" strokeWidth={3} />
                              ) : (
                                <Icon className="h-4 w-4" strokeWidth={2} />
                              )}
                            </span>
                            <span
                              className={cn(
                                'hidden text-xs font-medium sm:block',
                                active
                                  ? 'text-foreground'
                                  : 'text-muted-foreground'
                              )}
                            >
                              {s.title}
                            </span>
                          </div>
                          {i < q.steps.length - 1 && (
                            <div
                              className={cn(
                                'mx-3 h-0.5 flex-1 rounded-full transition-colors',
                                i < step ? 'bg-success/50' : 'bg-border'
                              )}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step body */}
                <div className="px-6 py-8 sm:px-9">
                  <div className="mb-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {stepLabel}
                  </div>

                  {step === 0 && (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label={f.age}>
                        <input
                          type="number"
                          min={14}
                          max={100}
                          value={form.age}
                          onChange={(e) => update('age', e.target.value)}
                          placeholder={f.agePlaceholder}
                          className={fieldBase}
                        />
                      </Field>
                      <Field label={f.gender}>
                        <select
                          value={form.gender}
                          onChange={(e) => update('gender', e.target.value)}
                          className={cn(fieldBase, 'appearance-none')}
                        >
                          <option value="">{f.select}</option>
                          <option value="male">{f.male}</option>
                          <option value="female">{f.female}</option>
                          <option value="other">{f.other}</option>
                        </select>
                      </Field>
                      <Field label={f.height}>
                        <input
                          type="number"
                          value={form.heightCm}
                          onChange={(e) => update('heightCm', e.target.value)}
                          placeholder={f.heightPlaceholder}
                          className={fieldBase}
                        />
                      </Field>
                      <Field label={f.weight}>
                        <input
                          type="number"
                          value={form.weightKg}
                          onChange={(e) => update('weightKg', e.target.value)}
                          placeholder={f.weightPlaceholder}
                          className={fieldBase}
                        />
                      </Field>
                      <div className="sm:col-span-2">
                        <span className={labelClass}>{f.primaryGoal}</span>
                        <div className="grid gap-3 sm:grid-cols-3">
                          {q.goals.map((g) => (
                            <button
                              key={g.value}
                              type="button"
                              onClick={() => update('primaryGoal', g.value)}
                              className={cn(
                                'rounded-xl border px-4 py-3.5 text-sm font-medium transition-all',
                                form.primaryGoal === g.value
                                  ? 'border-primary bg-primary/10 text-foreground shadow-sm'
                                  : 'border-border bg-card text-muted-foreground hover:border-primary/40'
                              )}
                            >
                              {g.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label={f.daysPerWeek}>
                        <select
                          value={form.daysPerWeek}
                          onChange={(e) => update('daysPerWeek', e.target.value)}
                          className={cn(fieldBase, 'appearance-none')}
                        >
                          <option value="">{f.select}</option>
                          {['2', '3', '4', '5', '6'].map((d) => (
                            <option key={d} value={d}>
                              {d} {f.days}
                            </option>
                          ))}
                        </select>
                      </Field>
                      <Field label={f.timePerSession}>
                        <select
                          value={form.timePerSession}
                          onChange={(e) =>
                            update('timePerSession', e.target.value)
                          }
                          className={cn(fieldBase, 'appearance-none')}
                        >
                          <option value="">{f.select}</option>
                          <option value="30-45">30–45 min</option>
                          <option value="45-60">45–60 min</option>
                          <option value="60-90">60–90 min</option>
                          <option value="90+">90+ min</option>
                        </select>
                      </Field>
                      <div className="sm:col-span-2">
                        <Field label={f.equipment} hint={f.equipmentHint}>
                          <textarea
                            value={form.equipment}
                            onChange={(e) => update('equipment', e.target.value)}
                            rows={3}
                            placeholder={f.equipmentPlaceholder}
                            className={cn(fieldBase, 'resize-none')}
                          />
                        </Field>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="grid gap-5">
                      <Field label={f.experience}>
                        <select
                          value={form.experienceYears}
                          onChange={(e) =>
                            update('experienceYears', e.target.value)
                          }
                          className={cn(fieldBase, 'appearance-none')}
                        >
                          <option value="">{f.select}</option>
                          <option value="<1">{f.lessThan1}</option>
                          <option value="1-3">{f.years13}</option>
                          <option value="3-5">{f.years35}</option>
                          <option value="5+">{f.years5plus}</option>
                        </select>
                      </Field>
                      <Field label={f.injuries} hint={f.injuriesHint}>
                        <textarea
                          value={form.injuries}
                          onChange={(e) => update('injuries', e.target.value)}
                          rows={4}
                          placeholder={f.injuriesPlaceholder}
                          className={cn(fieldBase, 'resize-none')}
                        />
                      </Field>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <Field label={f.allergies}>
                          <input
                            value={form.allergies}
                            onChange={(e) => update('allergies', e.target.value)}
                            placeholder={f.allergiesPlaceholder}
                            className={fieldBase}
                          />
                        </Field>
                      </div>
                      <div className="sm:col-span-2">
                        <Field label={f.restrictions}>
                          <input
                            value={form.dietaryRestrictions}
                            onChange={(e) =>
                              update('dietaryRestrictions', e.target.value)
                            }
                            placeholder={f.restrictionsPlaceholder}
                            className={fieldBase}
                          />
                        </Field>
                      </div>
                      <Field label={f.calories} hint={f.caloriesHint}>
                        <input
                          type="number"
                          value={form.dailyCalories}
                          onChange={(e) =>
                            update('dailyCalories', e.target.value)
                          }
                          placeholder={f.caloriesPlaceholder}
                          className={fieldBase}
                        />
                      </Field>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="grid gap-5">
                      <button
                        type="button"
                        onClick={() =>
                          update('wantsPhotoAnalysis', !form.wantsPhotoAnalysis)
                        }
                        className={cn(
                          'flex items-start gap-4 rounded-2xl border-2 p-6 text-left transition-all',
                          form.wantsPhotoAnalysis
                            ? 'border-primary bg-primary/[0.05]'
                            : 'border-border bg-card hover:border-primary/30'
                        )}
                      >
                        <span
                          className={cn(
                            'mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border-2 transition-colors',
                            form.wantsPhotoAnalysis
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-border'
                          )}
                        >
                          {form.wantsPhotoAnalysis && (
                            <Check className="h-4 w-4" strokeWidth={3} />
                          )}
                        </span>
                        <span>
                          <span className="block text-base font-bold">
                            {q.photo.title}
                          </span>
                          <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                            {q.photo.desc}
                          </span>
                        </span>
                      </button>

                      {form.wantsPhotoAnalysis && (
                        <div className="grid grid-cols-3 gap-3">
                          {[q.photo.front, q.photo.side, q.photo.back].map((v) => (
                            <div
                              key={v}
                              className="flex aspect-[3/4] flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-secondary/30 text-muted-foreground"
                            >
                              <Camera className="h-5 w-5" />
                              <span className="text-xs font-medium">{v}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {status === 'error' && (
                        <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                          {q.error}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Footer nav */}
                <div className="flex items-center justify-between border-t border-border px-6 py-5 sm:px-9">
                  <button
                    type="button"
                    onClick={back}
                    disabled={step === 0}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {q.nav.back}
                  </button>

                  {isLast ? (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={status === 'submitting'}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 disabled:opacity-70"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          {q.nav.submitting}
                        </>
                      ) : (
                        <>
                          {q.nav.submit}
                          <Check className="h-4 w-4" strokeWidth={3} />
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={next}
                      disabled={!stepValid()}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 disabled:opacity-40"
                    >
                      {q.nav.continue}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}