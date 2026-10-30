import Link from 'next/link';
import { ArrowRight, CheckCircle2, Compass, MessageSquare, Phone, ShieldCheck, Zap } from 'lucide-react';
import PageContainer from '@/components/PageContainer';
import { BreadcrumbJsonLd, JsonLd } from '@/components/JsonLd';
import { createMetadata, SITE_NAME, SITE_URL } from '@/lib/seo-config';

export const metadata = createMetadata('/about');

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'About The Software Lab', path: '/about' },
  ];

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About The Software Lab | Dehradun-Based Engineering Team',
    description:
      'Meet The Software Lab, a Dehradun-based software and digital growth team serving institutions and businesses across India and globally.',
    url: `${SITE_URL}/about`,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <>
      <JsonLd data={aboutSchema} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <PageContainer>
        {/* Header Section */}
        <section className="text-left">
          <nav aria-label="Breadcrumbs" className="mb-2 flex items-center gap-1.5 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#10A5B5]">Home</Link>
            <span>/</span>
            <span className="font-semibold text-[#0F2D54]">About</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#10A5B5]/30 bg-[#10A5B5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0d8592]">
            Engineering Studio · Dehradun, Uttarakhand
          </div>
          <h1 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#0F2D54] sm:text-4xl lg:text-5xl">
            About The Software Lab
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            The Software Lab partners with institutions and businesses to build useful web experiences, operational campus software, and measurable digital marketing systems from Dehradun, India.
          </p>
        </section>

        {/* 3-Card Grid */}
        <section
          aria-label="Core Engineering Pillars"
          className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Card 1 */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5">
            <div>
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#10A5B5]">
                <Zap className="size-5" />
              </div>
              <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Solve the Real Problem
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                We begin by understanding user journeys, organizational workflows, and institutional goals before writing code, ensuring every project solves operational friction.
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Deep requirements mapping</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Zero template bloat</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5">
            <div>
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#10A5B5]">
                <Compass className="size-5" />
              </div>
              <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Dehradun Roots, Pan-India Reach
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Headquartered in Dehradun, Uttarakhand, our engineering studio delivers world-class web and software systems for academies, colleges, and enterprises across India.
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Direct engineer communication</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>On-time, phased delivery milestones</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5 sm:col-span-2 lg:col-span-1">
            <div>
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#10A5B5]">
                <ShieldCheck className="size-5" />
              </div>
              <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Durable Architecture &amp; Support
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                We write clean TypeScript, build with Next.js and Tailwind CSS, and maintain systems with regular security updates, automated backups, and guaranteed SLAs.
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Enterprise code standards</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Dedicated ongoing support</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Action Banner */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Looking for an engineering partner you can rely on?
              </p>
              <p className="text-xs text-slate-600 sm:text-sm">
                Talk directly with our team in Dehradun about your software or growth objectives.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#0F2D54] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#143e74] sm:text-sm"
              >
                Connect With Us <ArrowRight className="ml-1.5 size-3.5" />
              </Link>
              <a
                href="https://wa.me/919870871386?text=Hello%20The%20Software%20Lab,%20I%20would%20like%20to%20learn%20more%20about%20your%20team."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-[#0F2D54] transition-colors hover:bg-slate-100 sm:text-sm"
              >
                <MessageSquare className="size-3.5 text-[#25D366]" />
                WhatsApp
              </a>
              <a
                href="tel:+919870871386"
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-[#0F2D54] sm:text-sm ml-1"
              >
                <Phone className="size-3.5 text-[#10A5B5]" />
                +91 98708 71386
              </a>
            </div>
          </div>
        </section>
      </PageContainer>
    </>
  );
}
