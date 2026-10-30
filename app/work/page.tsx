import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ExternalLink, GraduationCap, MessageSquare, Phone, School, Trophy } from 'lucide-react';
import PageContainer from '@/components/PageContainer';
import CollegePortalScreenshotsModal from '@/components/CollegePortalScreenshotsModal';
import PortalScreenshotsModal from '@/components/PortalScreenshotsModal';
import SimsScreenshotsModal from '@/components/SimsScreenshotsModal';
import AspireScreenshotsModal from '@/components/AspireScreenshotsModal';
import { BreadcrumbJsonLd, JsonLd } from '@/components/JsonLd';
import { createMetadata, SITE_NAME, SITE_URL } from '@/lib/seo-config';

export const metadata = createMetadata('/work');

export default function WorkPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Work & Case Studies', path: '/work' },
  ];

  const workSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Web Development, ERP & Institutional Portals',
    description:
      'Explore selected website, custom software, ERP, SEO and institutional portal projects by The Software Lab.',
    url: `${SITE_URL}/work`,
    provider: {
      '@type': 'ProfessionalService',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <>
      <JsonLd data={workSchema} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <PageContainer>
        {/* Header Section */}
        <section className="text-left">
          <nav aria-label="Breadcrumbs" className="mb-2 flex items-center gap-1.5 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#10A5B5]">Home</Link>
            <span>/</span>
            <span className="font-semibold text-[#0F2D54]">Work &amp; Case Studies</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#10A5B5]/30 bg-[#10A5B5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0d8592]">
            Selected Portfolio · Production Deployments
          </div>
          <h1 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#0F2D54] sm:text-4xl lg:text-5xl">
            Web Development, ERP &amp; Institutional Portals
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Explore live production websites, custom software, higher education ERPs, and institutional portals engineered by The Software Lab.
          </p>
        </section>

        {/* 4-Card Responsive Grid */}
        <section
          aria-label="Portfolio Case Studies"
          className="my-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5"
        >
          {/* Card 1: College Portal for Universities (with real preview & tour modal) */}
          <div className="flex flex-col justify-between rounded-xl border-2 border-[#0F2D54]/30 bg-white p-4 shadow-xs transition-all hover:border-[#0F2D54] hover:shadow-md">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded bg-[#0F2D54]/10 px-2 py-0.5 text-[11px] font-bold text-[#0F2D54]">
                  Featured · University ERP
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#10A5B5]">
                  <GraduationCap className="size-3.5" />
                  College Portal
                </span>
              </div>

              {/* Visual Thumbnail */}
              <div className="relative mb-2.5 h-24 w-full overflow-hidden rounded-lg bg-slate-50 border border-slate-100">
                <Image
                  src="/images/college-portal/college-conversion-ui.png"
                  alt="College & University portal course pathways and quick-apply modal"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-top"
                />
              </div>

              <h2 className="font-display text-base font-bold text-[#0F2D54]">
                College Portal for Universities
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Unified digital campus portal connecting faculty, examinations, student lifecycle, NEP 2020 credit allocation, and continuous NAAC compliance.
              </p>
            </div>

            <div className="mt-3 border-t border-slate-100 pt-2.5 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-[#0F2D54]">NEP 2020 &amp; NAAC</span>
              <CollegePortalScreenshotsModal />
            </div>
          </div>

          {/* Card 2: Parent-Student Portal for Schools */}
          <div className="flex flex-col justify-between rounded-xl border-2 border-[#10A5B5]/40 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5] hover:shadow-md">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded bg-[#10A5B5]/15 px-2 py-0.5 text-[11px] font-bold text-[#0d8592]">
                  Featured · K-12 Portal
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#0d8592]">
                  <School className="size-3.5" />
                  School EdTech
                </span>
              </div>

              {/* Visual Thumbnail */}
              <div className="relative mb-2.5 h-24 w-full overflow-hidden rounded-lg bg-slate-50 border border-slate-100">
                <Image
                  src="/images/parent-portal/daily-engagement-mobile.png"
                  alt="Daily Engagement & Attendance mobile preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-top"
                />
              </div>

              <h2 className="font-display text-base font-bold text-[#0F2D54]">
                Parent-Student Portal for Schools
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Mobile-first school platform replacing noisy WhatsApp groups with real-time attendance, homework diaries, circulars, and fee ledgers.
              </p>
            </div>

            <div className="mt-3 border-t border-slate-100 pt-2.5 flex items-center justify-between">
              <span className="text-[10px] font-medium text-slate-500">4 Screen Tours</span>
              <PortalScreenshotsModal />
            </div>
          </div>

          {/* Card 3: SIMS College */}
          <div className="flex flex-col justify-between rounded-xl border-2 border-[#0F2D54]/30 bg-white p-4 shadow-xs transition-all hover:border-[#0F2D54] hover:shadow-md">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded bg-[#0F2D54]/10 px-2 py-0.5 text-[11px] font-bold text-[#0F2D54]">
                  Featured · Medical College
                </span>
                <a
                  href="https://sims.college/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-[#0F2D54]"
                  aria-label="Visit SIMS College live site"
                >
                  Live <ExternalLink className="size-3" />
                </a>
              </div>

              {/* Visual Thumbnail */}
              <div className="relative mb-2.5 h-24 w-full overflow-hidden rounded-lg bg-slate-50 border border-slate-100">
                <Image
                  src="/images/sims/sims-case-study-hero.png"
                  alt="SIMS College web app and admissions growth engine preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-top"
                />
              </div>

              <h2 className="font-display text-base font-bold text-[#0F2D54]">
                SIMS College
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Modern web application &amp; 24/7 admissions engine engineered with Next.js, 98/100 PageSpeed, and quick-apply inquiry pathways.
              </p>
            </div>

            <div className="mt-3 border-t border-slate-100 pt-2.5 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-emerald-600">98/100 Speed</span>
              <SimsScreenshotsModal />
            </div>
          </div>

          {/* Card 4: Aspire Academy */}
          <div className="flex flex-col justify-between rounded-xl border-2 border-amber-500/30 bg-white p-4 shadow-xs transition-all hover:border-amber-600 hover:shadow-md">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded bg-amber-500/10 px-2 py-0.5 text-[11px] font-bold text-amber-800">
                  Featured · Sports Academy
                </span>
                <a
                  href="https://www.theaspireacademy.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-[#0F2D54]"
                  aria-label="Visit Aspire Academy live site"
                >
                  Live <ExternalLink className="size-3" />
                </a>
              </div>

              {/* Visual Thumbnail */}
              <div className="relative mb-2.5 h-24 w-full overflow-hidden rounded-lg bg-slate-50 border border-slate-100">
                <Image
                  src="/images/aspire/aspire-case-study-hero.png"
                  alt="Aspire Academy web app and admissions portal preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-top"
                />
              </div>

              <h2 className="font-display text-base font-bold text-[#0F2D54]">
                Aspire Academy
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                High-converting sports coaching &amp; defence preparation admissions portal with 97/100 mobile speed and instant WhatsApp routing.
              </p>
            </div>

            <div className="mt-3 border-t border-slate-100 pt-2.5 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-amber-700">97/100 Speed</span>
              <AspireScreenshotsModal />
            </div>
          </div>
        </section>

        {/* Action Banner */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Have a campus portal or institutional website to build?
              </p>
              <p className="text-xs text-slate-600 sm:text-sm">
                Let us build a high-performance system tailored to your school, college, or university.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#0F2D54] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#143e74] sm:text-sm"
              >
                Discuss Your Portal <ArrowRight className="ml-1.5 size-3.5" />
              </Link>
              <a
                href="https://wa.me/919870871386?text=Hello%20The%20Software%20Lab,%20I%20am%20interested%20in%20a%20campus/school%20portal."
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
