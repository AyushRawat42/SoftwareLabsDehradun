import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe, Layers, MessageSquare, Phone, TrendingUp } from 'lucide-react';
import PageContainer from '@/components/PageContainer';
import { createMetadata } from '@/lib/seo-config';

export const metadata = createMetadata('/');

export default function HomePage() {
  return (
    <PageContainer>
      {/* 1. HERO SECTION WITH PLATFORM SPOTLIGHT */}
      <section className="text-left">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
          {/* Left Hero Text (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#10A5B5]/30 bg-[#10A5B5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0d8592]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10A5B5] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#10A5B5]" />
              </span>
              Next-Gen Campus ERP &amp; Web Platforms
            </div>
            <h1 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#0F2D54] sm:text-4xl lg:text-5xl">
              Web Development, Custom ERP &amp; Digital Growth
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              The Software Lab builds high-performance Next.js websites, higher education ERPs, and parent-student school portals for modern institutions and forward-thinking enterprises.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 rounded-md bg-[#0F2D54] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#143e74] sm:text-sm"
              >
                Explore Live Portals <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-[#0F2D54] transition-colors hover:bg-slate-100 sm:text-sm"
              >
                Request Free Audit
              </Link>
            </div>
          </div>

          {/* Right Featured Spotlight (5 cols on lg, compact card on sm/md) */}
          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-3 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md">
              <div className="relative h-32 w-full overflow-hidden rounded-lg bg-slate-100 sm:h-40">
                <Image
                  src="/images/parent-portal/school-portal-hero.png"
                  alt="A Modern Portal for K-12 Schools & Parents - Beyond WhatsApp Groups"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-102"
                  priority
                />
              </div>
              <div className="mt-2 flex items-center justify-between px-1">
                <div>
                  <p className="text-xs font-semibold text-[#0F2D54]">
                    Parent-Student Portal for Schools
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Daily Attendance, Fees &amp; Circulars · Live Case Studies
                  </p>
                </div>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#10A5B5] hover:text-[#0d8592]"
                >
                  View <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3-CARD SERVICE OVERVIEW WITH CASE STUDY PROOFS */}
      <section
        aria-label="Core Services Overview"
        className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {/* Service 1: Web Development (Featuring SIMS College) */}
        <div className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5">
          <div>
            <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#10A5B5] group-hover:bg-[#10A5B5]/10">
              <Globe className="size-5" />
            </div>
            <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
              Website &amp; Web App Development
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Sub-second page speeds, clean Next.js architecture, and mobile-first responsive corporate and institutional portals.
            </p>

            {/* Proof Card: SIMS College Case Study */}
            <div className="mt-3 flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2">
              <div className="relative h-10 w-14 shrink-0 overflow-hidden rounded border border-slate-200 bg-white">
                <Image
                  src="/images/sims/sims-stack-performance.png"
                  alt="SIMS College 98/100 PageSpeed"
                  fill
                  sizes="56px"
                  className="object-cover object-left"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-semibold text-[#0F2D54]">SIMS College Case Study</p>
                <p className="text-[10px] font-medium text-emerald-600">98/100 PageSpeed · 24/7 Admissions</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">Next.js 15</span>
              <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">Core Web Vitals</span>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F2D54] group-hover:text-[#10A5B5]"
            >
              Case Tour <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Service 2: Custom Software & ERP (Featuring College & School Portals) */}
        <div className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5">
          <div>
            <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#10A5B5] group-hover:bg-[#10A5B5]/10">
              <Layers className="size-5" />
            </div>
            <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
              Custom Software &amp; Campus ERP
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
              College portals, school parent-student apps, NEP 2020 credit allocation, APAAR/ABC mobility, and NAAC Binary compliance.
            </p>

            {/* Proof Card: College & School Systems */}
            <div className="mt-3 flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2">
              <div className="relative h-10 w-14 shrink-0 overflow-hidden rounded border border-slate-200 bg-white">
                <Image
                  src="/images/college-portal/college-conversion-ui.png"
                  alt="College & University Campus Portals"
                  fill
                  sizes="56px"
                  className="object-cover object-left"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-semibold text-[#0F2D54]">College &amp; Campus Portals</p>
                <p className="text-[10px] font-medium text-[#10A5B5]">NEP 2020 · Course Grids · ERP</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">School Portals</span>
              <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">Higher Ed ERP</span>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F2D54] group-hover:text-[#10A5B5]"
            >
              Case Tour <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Service 3: Technical SEO & Growth (Featuring Aspire Academy) */}
        <div className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5 sm:col-span-2 lg:col-span-1">
          <div>
            <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#10A5B5] group-hover:bg-[#10A5B5]/10">
              <TrendingUp className="size-5" />
            </div>
            <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
              Technical SEO &amp; Google Ads
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Qualified student inquiry acquisition through high-intent search optimization, Performance Max campaigns, and full-funnel GA4 tracking.
            </p>

            {/* Proof Card: Aspire Academy Lead Routing & 97/100 Speed */}
            <div className="mt-3 flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2">
              <div className="relative h-10 w-14 shrink-0 overflow-hidden rounded border border-slate-200 bg-white">
                <Image
                  src="/images/aspire/aspire-mobile-registration.png"
                  alt="Aspire Academy 97/100 Mobile Speed & Lead Routing"
                  fill
                  sizes="56px"
                  className="object-cover object-left"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-semibold text-[#0F2D54]">Aspire Academy Case Study</p>
                <p className="text-[10px] font-medium text-amber-700">97/100 Speed · Counseling Lead Flow</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">Local SEO</span>
              <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">GA4 &amp; GTM</span>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F2D54] group-hover:text-[#10A5B5]"
            >
              Case Tour <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. CALL-TO-ACTION SECTION */}
      <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
              Want to turn your institution&apos;s website into a 24/7 admissions engine?
            </p>
            <p className="text-xs text-slate-600 sm:text-sm">
              Schedule a walkthrough of our school parent portal or higher education campus ERP.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#0F2D54] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#143e74] sm:text-sm"
            >
              Request Free Audit
            </Link>
            <a
              href="https://wa.me/919870871386?text=Hello%20The%20Software%20Lab,%20I%20would%20like%20to%20discuss%20a%20portal%20demo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-[#0F2D54] transition-colors hover:bg-slate-100 sm:text-sm"
            >
              <MessageSquare className="size-3.5 text-[#25D366]" />
              WhatsApp Us
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
  );
}
