import Link from 'next/link';
import { ArrowRight, CheckCircle2, Cloud, GraduationCap, LayoutDashboard, MessageSquare, Phone } from 'lucide-react';
import PageContainer from '@/components/PageContainer';
import { BreadcrumbJsonLd, createServiceStructuredData, JsonLd } from '@/components/JsonLd';
import { createMetadata } from '@/lib/seo-config';

export const metadata = createMetadata('/services/custom-software-erp');

export default function CustomSoftwareErpPage() {
  const serviceJsonLd = createServiceStructuredData({
    name: 'Custom Software, SaaS & ERP Development',
    description:
      'Custom cloud software, higher education ERPs, hotel property systems and multi-tenant SaaS platforms engineered in Dehradun for organizations across India.',
    path: '/services/custom-software-erp',
  });

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Custom Software & ERP', path: '/services/custom-software-erp' },
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
            <span className="font-semibold text-[#0F2D54]">Custom Software &amp; ERP</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#10A5B5]/30 bg-[#10A5B5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0d8592]">
            Enterprise Systems · Dehradun &amp; India
          </div>
          <h1 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#0F2D54] sm:text-4xl lg:text-5xl">
            Custom Software, SaaS &amp; ERP Development
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Custom cloud software, higher education ERPs, hotel property systems, and multi-tenant SaaS platforms engineered in Dehradun for organizations across India.
          </p>
        </section>

        {/* 3-Card Grid */}
        <section
          aria-label="Software and ERP Modules"
          className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Card 1 */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5">
            <div>
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#10A5B5]">
                <GraduationCap className="size-5" />
              </div>
              <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Higher Education Campus ERP
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Built for Indian colleges and universities. Fully compliant with NEP 2020 multidisciplinary tracks, APAAR/ABC digital credit mobility, and NAAC Binary reporting.
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>NEP 2020 &amp; NCrF Major/Minor Baskets</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>NAAC Binary 10-Attribute Hub</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5">
            <div>
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#10A5B5]">
                <LayoutDashboard className="size-5" />
              </div>
              <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Custom Operational Portals
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Eliminate spreadsheets with custom internal dashboards, automated approvals, billing workflows, and role-based staff access control.
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Role-Based Multi-User Access</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Automated Workflow &amp; PDF/Excel Exports</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5 sm:col-span-2 lg:col-span-1">
            <div>
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#10A5B5]">
                <Cloud className="size-5" />
              </div>
              <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Multi-Tenant SaaS Systems
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Production-grade cloud architectures engineered for high concurrency, automated database backups, secure REST APIs, and DPDPA compliance.
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Scalable Cloud Infrastructure</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#10A5B5]" />
                <span>Enterprise Security &amp; Encryption</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Action Banner */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Schedule a live Campus ERP demo or custom software scoping call
              </p>
              <p className="text-xs text-slate-600 sm:text-sm">
                Discuss modules, timelines, and tailored deployment with our engineering lead.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#0F2D54] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#143e74] sm:text-sm"
              >
                Request ERP Demo <ArrowRight className="ml-1.5 size-3.5" />
              </Link>
              <a
                href="https://wa.me/919870871386?text=Hello%20The%20Software%20Lab,%20I%20would%20like%20to%20request%20an%20ERP%20demo."
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
