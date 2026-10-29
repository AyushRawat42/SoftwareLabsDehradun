import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

const serviceLinks = [
  { href: '/services/web-development', label: 'Website & Web App Development' },
  { href: '/services/custom-software-erp', label: 'Custom Software & ERP Development' },
  { href: '/services/seo-digital-marketing', label: 'Technical SEO & Digital Marketing' },
  { href: '/services/web-analytics-tracking', label: 'GA4, GTM & Conversion Tracking' },
];

const companyLinks = [
  { href: '/industries/education-healthcare', label: 'Education & Healthcare Solutions' },
  { href: '/work', label: 'Work & Case Studies' },
  { href: '/about', label: 'About The Software Lab' },
  { href: '/blog', label: 'Insights & Guides' },
  { href: '/contact', label: 'Contact & Request a Proposal' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1729] py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="The Software Lab home">
              <BrandLogo />
            </Link>
            <p className="max-w-sm text-sm leading-6 text-slate-400">
              Web development, custom software and measurable digital growth for institutions and businesses.
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#10A5B5]">
              Dehradun, Uttarakhand · Serving India and beyond
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-200">Services</h2>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link className="text-sm text-slate-400 transition-colors hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-200">Explore</h2>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link className="text-sm text-slate-400 transition-colors hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-200">Talk to our team</h2>
            <address className="space-y-4 text-sm not-italic text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#10A5B5]" />
                Dehradun, Uttarakhand, India
              </p>
              <a className="flex items-center gap-2 hover:text-white" href="tel:+919870871386">
                <Phone aria-hidden="true" className="size-4 shrink-0 text-[#10A5B5]" />
                +91 98708 71386
              </a>
              <a className="flex items-center gap-2 hover:text-white" href="mailto:softwarelabdehradun@gmail.com">
                <Mail aria-hidden="true" className="size-4 shrink-0 text-[#10A5B5]" />
                softwarelabdehradun@gmail.com
              </a>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Software Lab. All rights reserved.</p>
          <p>Custom websites, software and digital marketing from Dehradun, India.</p>
        </div>
      </div>
    </footer>
  );
}
