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
          <div className="home-reveal lg:col-span-7">
            <h1 className="animate-brand-shimmer mt-3 font-display text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Web Development, Custom ERP &amp; Digital Growth
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              The Software Lab builds high-performance Next.js websites, higher education ERPs, and parent-student school portals for modern institutions and forward-thinking enterprises.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 rounded-md bg-[#0F2D54] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#143e74] hover:shadow-md active:translate-y-0 motion-reduce:transition-none sm:text-sm"
              >
                Explore Live Portals <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-[#0F2D54] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-rose-300 hover:bg-slate-50 hover:shadow-[0_4px_16px_rgba(225,29,72,0.12)] active:translate-y-0 motion-reduce:transition-none sm:text-sm"
              >
                Request Free Audit
              </Link>
            </div>
          </div>

          {/* Right Featured Spotlight (5 cols on lg, compact card on sm/md) */}
          <div className="home-reveal home-reveal-delay-1 lg:col-span-5">
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-3 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-rose-300 hover:shadow-[0_8px_24px_rgba(225,29,72,0.12)] motion-reduce:transition-none">
              <div className="animate-float relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-100">
                <Image
                  src="/images/parent-portal/school-portal-hero.webp"
                  alt="A Modern Portal for K-12 Schools & Parents - Beyond WhatsApp Groups"
                  width={733}
                  height={652}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="h-full w-full object-contain"
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
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#10A5B5] transition-colors duration-300 ease-out hover:text-[#0d8592]"
                >
                  View <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO */}
      <section
        aria-labelledby="what-we-do-heading"
        className="home-scroll-reveal my-6 border-y border-gray-200 bg-white py-4 sm:py-5"
      >
        <div className="mb-2 px-1">
          <h2
            id="what-we-do-heading"
            className="font-display text-lg font-bold text-gray-900 sm:text-xl"
          >
            What We Do
          </h2>
        </div>

        <article className="group grid gap-3 border-b border-gray-200 px-1 py-4 transition-colors duration-200 hover:bg-gray-50 sm:grid-cols-[minmax(0,1fr)_minmax(220px,0.65fr)] sm:items-center sm:gap-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Globe aria-hidden="true" className="size-4 shrink-0 text-[#B5121B]" />
              <h3 className="font-display text-sm font-bold text-gray-900 sm:text-base">
                Website &amp; Web App Development
              </h3>
              <span className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs text-gray-800">Next.js 15</span>
              <span className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs text-gray-800">Core Web Vitals</span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
              Sub-second page speeds, clean Next.js architecture, and mobile-first responsive corporate and institutional portals.
            </p>
          </div>
          <Link
            href="/work"
            className="group/case inline-flex min-w-0 items-center gap-3 rounded-lg py-1 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5121B]"
          >
            <span className="relative size-12 shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-50">
              <Image
                src="/images/sims/sims-stack-performance.webp"
                alt="SIMS College website performance case study"
                width={785}
                height={616}
                sizes="48px"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-xs font-semibold text-gray-900">SIMS College Case Study</span>
              <span className="block text-[11px] text-gray-600">98/100 PageSpeed · 24/7 Admissions</span>
            </span>
            <span aria-hidden="true" className="shrink-0 text-lg text-[#B5121B] transition-transform duration-200 group-hover/case:translate-x-1">→</span>
          </Link>
        </article>

        <article className="group grid gap-3 border-b border-gray-200 px-1 py-4 transition-colors duration-200 hover:bg-gray-50 sm:grid-cols-[minmax(0,1fr)_minmax(220px,0.65fr)] sm:items-center sm:gap-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Layers aria-hidden="true" className="size-4 shrink-0 text-[#B5121B]" />
              <h3 className="font-display text-sm font-bold text-gray-900 sm:text-base">
                Custom Software &amp; Campus ERP
              </h3>
              <span className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs text-gray-800">School Portals</span>
              <span className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs text-gray-800">Higher Ed ERP</span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
              College portals, school parent-student apps, NEP 2020 credit allocation, APAAR/ABC mobility, and NAAC Binary compliance.
            </p>
          </div>
          <Link
            href="/work"
            className="group/case inline-flex min-w-0 items-center gap-3 rounded-lg py-1 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5121B]"
          >
            <span className="relative size-12 shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-50">
              <Image
                src="/images/college-portal/college-conversion-ui.webp"
                alt="College and university campus portals case study"
                width={774}
                height={616}
                sizes="48px"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-xs font-semibold text-gray-900">College &amp; Campus Portals</span>
              <span className="block text-[11px] text-gray-600">NEP 2020 · Course Grids · ERP</span>
            </span>
            <span aria-hidden="true" className="shrink-0 text-lg text-[#B5121B] transition-transform duration-200 group-hover/case:translate-x-1">→</span>
          </Link>
        </article>

        <article className="group grid gap-3 px-1 py-4 transition-colors duration-200 hover:bg-gray-50 sm:grid-cols-[minmax(0,1fr)_minmax(220px,0.65fr)] sm:items-center sm:gap-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <TrendingUp aria-hidden="true" className="size-4 shrink-0 text-[#B5121B]" />
              <h3 className="font-display text-sm font-bold text-gray-900 sm:text-base">
                Technical SEO &amp; Google Ads
              </h3>
              <span className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs text-gray-800">Local SEO</span>
              <span className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs text-gray-800">GA4 &amp; GTM</span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
              Qualified student inquiry acquisition through high-intent search optimization, Performance Max campaigns, and full-funnel GA4 tracking.
            </p>
          </div>
          <Link
            href="/work"
            className="group/case inline-flex min-w-0 items-center gap-3 rounded-lg py-1 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5121B]"
          >
            <span className="relative size-12 shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-50">
              <Image
                src="/images/aspire/aspire-mobile-registration.webp"
                alt="Aspire Academy mobile registration and lead flow case study"
                width={793}
                height={552}
                sizes="48px"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-xs font-semibold text-gray-900">Aspire Academy Case Study</span>
              <span className="block text-[11px] text-gray-600">97/100 Speed · Counseling Lead Flow</span>
            </span>
            <span aria-hidden="true" className="shrink-0 text-lg text-[#B5121B] transition-transform duration-200 group-hover/case:translate-x-1">→</span>
          </Link>
        </article>
      </section>

      {/* 3. CALL-TO-ACTION SECTION */}
      <section className="home-scroll-reveal rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
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
              className="home-cta-pulse inline-flex items-center justify-center rounded-md bg-[#0F2D54] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#143e74] hover:shadow-md active:translate-y-0 motion-reduce:transition-none sm:text-sm"
            >
              Request Free Audit
            </Link>
            <a
              href="https://wa.me/919870871386?text=Hello%20The%20Software%20Lab,%20I%20would%20like%20to%20discuss%20a%20portal%20demo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-[#0F2D54] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-rose-300 hover:bg-slate-100 hover:shadow-[0_4px_16px_rgba(225,29,72,0.12)] active:translate-y-0 motion-reduce:transition-none sm:text-sm"
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
