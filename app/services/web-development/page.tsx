import Link from 'next/link';
import { ArrowRight, CheckCircle2, Code2, Globe, MessageSquare, Phone, Smartphone } from 'lucide-react';
import PageContainer from '@/components/PageContainer';
import { BreadcrumbJsonLd, createServiceStructuredData, JsonLd } from '@/components/JsonLd';
import { createMetadata } from '@/lib/seo-config';

export const metadata = createMetadata('/services/web-development');

export default function WebDevelopmentPage() {
  const serviceJsonLd = createServiceStructuredData({
    name: 'Custom Website & Web App Development',
    description:
      'Build fast, accessible corporate websites, institutional portals and web apps with Next.js, React and Tailwind CSS. Based in Dehradun, serving India.',
    path: '/services/web-development',
  });

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Web Development', path: '/services/web-development' },
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
            <span className="font-semibold text-[#0F2D54]">Web Development</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#10A5B5]/30 bg-[#10A5B5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0d8592]">
            Web Development · Dehradun &amp; India
          </div>
          <h1 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#0F2D54] sm:text-4xl lg:text-5xl">
            Custom Website &amp; Web App Development
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Build fast, accessible corporate websites, institutional portals, and web apps with Next.js, React, and Tailwind CSS. Based in Dehradun, serving clients across India.
          </p>
        </section>

        {/* 3-Card Grid */}
        <section
          aria-label="Web Development Capabilities"
          className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Card 1 */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5">
            <div>
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#10A5B5]">
                <Globe className="size-5" />
              </div>
              <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Corporate &amp; Institutional Portals
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Clean Next.js architecture engineered for lightning load speeds, structured content hierarchy, and seamless lead acquisition.
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Next.js App Router &amp; SSR/SSG</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Admissions &amp; Enquiry Funnels</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5">
            <div>
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#10A5B5]">
                <Smartphone className="size-5" />
              </div>
              <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Mobile-First &amp; Accessible
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Optimized layouts that adapt to 320px–768px+ mobile screens with zero layout shifts, smooth touch interactions, and WCAG AA compliance.
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Zero Horizontal Scroll</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Mobile Viewport Optimization</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5 sm:col-span-2 lg:col-span-1">
            <div>
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#10A5B5]">
                <Code2 className="size-5" />
              </div>
              <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Technical SEO &amp; Performance
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Built-in structured JSON-LD data, automated XML sitemaps, open-graph image generation, and 95+ Core Web Vitals audit scores.
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Core Web Vitals 95+</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Integrated Schema Markup</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Action Banner */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Need a modern website or web application?
              </p>
              <p className="text-xs text-slate-600 sm:text-sm">
                Get a free consultation and project quote from our Dehradun team.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#0F2D54] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#143e74] sm:text-sm"
              >
                Start Web Project <ArrowRight className="ml-1.5 size-3.5" />
              </Link>
              <a
                href="https://wa.me/919870871386?text=Hello%20The%20Software%20Lab,%20I%20need%20a%20quote%20for%20web%20development."
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
