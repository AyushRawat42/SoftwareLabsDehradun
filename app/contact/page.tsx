import Link from 'next/link';
import { Clock, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import PageContainer from '@/components/PageContainer';
import ContactForm from '@/components/ContactForm';
import { BreadcrumbJsonLd, JsonLd } from '@/components/JsonLd';
import { createMetadata, SITE_NAME, SITE_URL } from '@/lib/seo-config';

export const metadata = createMetadata('/contact');

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Contact & Proposal', path: '/contact' },
  ];

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Request a Proposal or Free Website & Ads Audit',
    description:
      'Talk to The Software Lab about your website, ERP, SEO or ads. Request a proposal or a free website and advertising audit in Dehradun or anywhere in India.',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'ProfessionalService',
      name: SITE_NAME,
      telephone: '+919870871386',
      email: 'softwarelabdehradun@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dehradun',
        addressRegion: 'Uttarakhand',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <>
      <JsonLd data={contactSchema} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <PageContainer>
        {/* Header Section */}
        <section className="text-left">
          <nav aria-label="Breadcrumbs" className="mb-2 flex items-center gap-1.5 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#10A5B5]">Home</Link>
            <span>/</span>
            <span className="font-semibold text-[#0F2D54]">Contact</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#10A5B5]/30 bg-[#10A5B5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0d8592]">
            Direct Consultation · Dehradun &amp; India
          </div>
          <h1 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#0F2D54] sm:text-4xl lg:text-5xl">
            Request a Proposal or Free Website &amp; Ads Audit
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Talk to The Software Lab about your website, ERP, SEO, or Google Ads. Request a customized proposal or a complimentary performance audit from our Dehradun team.
          </p>
        </section>

        {/* Content Layout: 2 Columns on desktop / Compact Stacked on Mobile */}
        <section
          aria-label="Contact Details and Inquiry Form"
          className="my-6 grid grid-cols-1 gap-6 lg:grid-cols-12"
        >
          {/* Left Column: Direct Phone / WhatsApp / Office details (5 cols) */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5 lg:col-span-5">
            <div>
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#10A5B5]">
                Direct Contacts
              </span>
              <h2 className="mt-1 font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                The Software Lab Office
              </h2>
              <p className="mt-1 text-xs text-slate-600">
                Reach us directly for rapid consultation, campus ERP scoping, or quotes.
              </p>

              <div className="mt-4 space-y-3 text-xs text-slate-700">
                <a
                  href="tel:+919870871386"
                  className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white p-2.5 transition-colors hover:border-[#10A5B5] hover:text-[#0F2D54]"
                >
                  <div className="flex size-7 items-center justify-center rounded-md bg-[#10A5B5]/10 text-[#0d8592]">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-semibold text-slate-400">Call Directly</p>
                    <p className="font-semibold text-slate-900">+91 98708 71386</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919870871386?text=Hello%20The%20Software%20Lab,%20I%20would%20like%20to%20request%20a%20proposal."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white p-2.5 transition-colors hover:border-emerald-400 hover:text-emerald-800"
                >
                  <div className="flex size-7 items-center justify-center rounded-md bg-emerald-100 text-emerald-600">
                    <MessageSquare className="size-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-semibold text-slate-400">Instant Chat</p>
                    <p className="font-semibold text-slate-900">WhatsApp (+91 9870871386)</p>
                  </div>
                </a>

                <a
                  href="mailto:softwarelabdehradun@gmail.com"
                  className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white p-2.5 transition-colors hover:border-[#10A5B5] hover:text-[#0F2D54]"
                >
                  <div className="flex size-7 items-center justify-center rounded-md bg-[#10A5B5]/10 text-[#0d8592]">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-semibold text-slate-400">Email Address</p>
                    <p className="font-semibold text-slate-900 truncate">softwarelabdehradun@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-4 border-t border-slate-200 pt-3 text-[11px] text-slate-500 space-y-1">
              <p className="flex items-center gap-1.5">
                <MapPin className="size-3.5 text-[#10A5B5] shrink-0" />
                <span>Dehradun, Uttarakhand, India (Serving nationwide)</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Clock className="size-3.5 text-[#10A5B5] shrink-0" />
                <span>Mon–Sat, 10:00 AM – 6:00 PM IST (Typical reply within 1 business day)</span>
              </p>
            </div>
          </div>

          {/* Right Column: Clean Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </section>

        {/* Action Banner / Quick assurance */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center sm:text-left">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row text-xs text-slate-600">
            <span>🛡️ NDA protected discussions. No spam, sales pushiness, or unnecessary markups.</span>
            <span className="font-semibold text-[#0F2D54]">The Software Lab · Dehradun</span>
          </div>
        </section>
      </PageContainer>
    </>
  );
}
