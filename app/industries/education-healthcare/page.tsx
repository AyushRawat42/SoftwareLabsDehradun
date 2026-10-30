import Link from 'next/link';
import { ArrowRight, CheckCircle2, GraduationCap, HeartPulse, Hospital, MessageSquare, Phone } from 'lucide-react';
import PageContainer from '@/components/PageContainer';
import { BreadcrumbJsonLd, createServiceStructuredData, JsonLd } from '@/components/JsonLd';
import { createMetadata } from '@/lib/seo-config';

export const metadata = createMetadata('/industries/education-healthcare');

export default function EducationHealthcarePage() {
  const serviceJsonLd = createServiceStructuredData({
    name: 'Web Portals, Admissions & ERP for Education and Healthcare',
    description:
      'Modern websites, admissions lead generation and campus ERP automation for colleges, universities, medical institutes and hospitals in India.',
    path: '/industries/education-healthcare',
  });

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Education & Healthcare', path: '/industries/education-healthcare' },
  ];

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <PageContainer>
        {/* Header Section */}
        <section className="text-left">
          <nav aria-label="Breadcrumbs" className="mb-2 flex items-center gap-1.5 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#10A5B5]">Home</Link>
            <span>/</span>
            <span className="font-semibold text-[#0F2D54]">Education &amp; Healthcare</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#10A5B5]/30 bg-[#10A5B5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0d8592]">
            Industry Focus · Dehradun &amp; India
          </div>
          <h1 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#0F2D54] sm:text-4xl lg:text-5xl">
            Web Portals, Admissions &amp; ERP for Education &amp; Healthcare
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Modern websites, admissions lead generation, and campus ERP automation engineered specifically for colleges, universities, medical institutes, and hospitals in India.
          </p>
        </section>

        {/* 3-Card Grid */}
        <section
          aria-label="Industry Solutions"
          className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Card 1 */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5">
            <div>
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#10A5B5]">
                <GraduationCap className="size-5" />
              </div>
              <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Colleges &amp; Universities
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Unified institutional portals, course catalogs, student fee payment systems, and NEP 2020 &amp; NAAC Binary compliant management.
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Admissions &amp; Prospectus Portals</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>APAAR / ABC Academic Mobility</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5">
            <div>
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#10A5B5]">
                <HeartPulse className="size-5" />
              </div>
              <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Medical &amp; Nursing Institutes
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                High-credibility web platforms for paramedical and nursing colleges, displaying statutory council recognitions, clinical facilities, and fee structures.
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Statutory Regulatory Compliance</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>High-Speed Inquiry Routing</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5 sm:col-span-2 lg:col-span-1">
            <div>
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#10A5B5]">
                <Hospital className="size-5" />
              </div>
              <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Hospitals &amp; Healthcare Centers
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Patient-centric portals with doctor directories, department service pages, OPD schedules, WhatsApp appointment hooks, and local search visibility.
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Specialist &amp; OPD Booking Pathways</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Local Healthcare SEO &amp; Maps</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Action Banner */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Upgrade your institutional website or campus ERP
              </p>
              <p className="text-xs text-slate-600 sm:text-sm">
                Join education and healthcare institutions already powered by The Software Lab.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#0F2D54] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#143e74] sm:text-sm"
              >
                Discuss Campus Project <ArrowRight className="ml-1.5 size-3.5" />
              </Link>
              <a
                href="https://wa.me/919870871386?text=Hello%20The%20Software%20Lab,%20I%20would%20like%20to%20discuss%20an%20education/healthcare%20project."
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
