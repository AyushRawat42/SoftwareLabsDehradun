import Link from 'next/link';
import { ArrowRight, CheckCircle2, MapPin, MessageSquare, Phone, Search, Target } from 'lucide-react';
import PageContainer from '@/components/PageContainer';
import { BreadcrumbJsonLd, createServiceStructuredData, JsonLd } from '@/components/JsonLd';
import { createMetadata } from '@/lib/seo-config';

export const metadata = createMetadata('/services/seo-digital-marketing');

export default function SeoDigitalMarketingPage() {
  const serviceJsonLd = createServiceStructuredData({
    name: 'Technical SEO & Google Ads Management',
    description:
      'Generate qualified leads with technical SEO, local SEO, Google Ads and Performance Max management from a Dehradun-based growth team serving India.',
    path: '/services/seo-digital-marketing',
  });

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'SEO & Digital Marketing', path: '/services/seo-digital-marketing' },
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
            <span className="font-semibold text-[#0F2D54]">SEO &amp; Digital Marketing</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#10A5B5]/30 bg-[#10A5B5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0d8592]">
            Growth &amp; Acquisition · Dehradun &amp; India
          </div>
          <h1 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#0F2D54] sm:text-4xl lg:text-5xl">
            Technical SEO &amp; Google Ads Management
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Generate qualified leads with technical SEO, local SEO, Google Ads, and Performance Max management from a Dehradun-based growth team serving India.
          </p>
        </section>

        {/* 3-Card Grid */}
        <section
          aria-label="SEO and Marketing Pillars"
          className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Card 1 */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5">
            <div>
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#10A5B5]">
                <Search className="size-5" />
              </div>
              <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Technical SEO &amp; Audits
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Crawl architecture optimization, structured data schemas, Core Web Vitals health, and clean canonical hierarchies that elevate organic rank.
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Technical Architecture &amp; Indexation</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Structured Schema &amp; Rich Results</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5">
            <div>
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#10A5B5]">
                <MapPin className="size-5" />
              </div>
              <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Local SEO &amp; Regional Maps
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Capture high-intent local queries in Dehradun and Uttarakhand. Google Business Profile optimization, local citations, and geo-targeted keywords.
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Google Business 3-Pack Ranking</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>High-Intent Dehradun Local Reach</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5 sm:col-span-2 lg:col-span-1">
            <div>
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#10A5B5]">
                <Target className="size-5" />
              </div>
              <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Google Ads &amp; Performance Max
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Target high-intent search traffic with negative match filtering, conversion-focused landing copy, and ongoing cost-per-lead optimization.
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Search &amp; Performance Max Campaigns</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Strict Cost-Per-Acquisition Controls</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Action Banner */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Request a free technical SEO and Google Ads audit
              </p>
              <p className="text-xs text-slate-600 sm:text-sm">
                Discover why your campaigns leak spend or why your site lags in search rank.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#0F2D54] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#143e74] sm:text-sm"
              >
                Claim Free Audit <ArrowRight className="ml-1.5 size-3.5" />
              </Link>
              <a
                href="https://wa.me/919870871386?text=Hello%20The%20Software%20Lab,%20I%20would%20like%20to%20request%20an%20SEO%20and%20Ads%20audit."
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
