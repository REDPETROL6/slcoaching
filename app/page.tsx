import { SiteHeader } from '@/components/landing/site-header';
import { Hero } from '@/components/landing/hero';
import { Methodology } from '@/components/landing/methodology';
import { Pricing } from '@/components/landing/pricing';
import { Questionnaire } from '@/components/landing/questionnaire';
import { Testimonials } from '@/components/landing/testimonials';
import { About } from '@/components/landing/about';
import { Contact } from '@/components/landing/contact';
import { SiteFooter } from '@/components/landing/site-footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Methodology />
      <Pricing />
      <Questionnaire />
      <Testimonials />
      <About />
      <Contact />
      <SiteFooter />
    </main>
  );
}
