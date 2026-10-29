'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const serviceLinks = [
  { href: '/services/web-development', label: 'Website & Web App Development' },
  { href: '/services/custom-software-erp', label: 'Custom Software & ERP' },
  { href: '/services/seo-digital-marketing', label: 'SEO & Digital Marketing' },
  { href: '/services/web-analytics-tracking', label: 'Analytics & Conversion Tracking' },
];

const primaryLinks = [
  { href: '/industries/education-healthcare', label: 'Education & Healthcare' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="The Software Lab home"
          onClick={closeMenu}
        >
          <span className="grid size-10 place-items-center rounded-md bg-[#0F2D54] text-xs font-extrabold tracking-tight text-white">
            SL
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold tracking-tight text-[#0F2D54] sm:text-lg">
              The Software Lab
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#10A5B5]">
              Dehradun · India
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-slate-200 text-[#0F2D54] md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span aria-hidden="true" className="text-xl leading-none">{mobileOpen ? '×' : '☰'}</span>
        </button>

        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={`${mobileOpen ? 'absolute inset-x-0 top-full block border-b border-slate-200 bg-white px-4 pb-5 pt-2 shadow-lg' : 'hidden'} md:static md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-1">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                aria-current={pathname === '/' ? 'page' : undefined}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${pathname === '/' ? 'text-[#0F2D54]' : 'text-slate-600 hover:text-[#0F2D54]'}`}
              >
                Home
              </Link>
            </li>
            <li className="group relative">
              <details>
                <summary
                  className={`list-none cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors marker:hidden [&::-webkit-details-marker]:hidden ${pathname.startsWith('/services/') ? 'text-[#0F2D54]' : 'text-slate-600 hover:text-[#0F2D54]'}`}
                >
                  Services <span aria-hidden="true" className="ml-1 text-xs">▾</span>
                </summary>
                <ul className="mt-1 space-y-1 pl-3 md:invisible md:absolute md:left-0 md:top-full md:mt-0 md:min-w-64 md:rounded-lg md:border md:border-slate-100 md:bg-white md:p-2 md:opacity-0 md:shadow-xl md:transition md:group-hover:visible md:group-hover:opacity-100 md:group-focus-within:visible md:group-focus-within:opacity-100">
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                        className="block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-[#0F2D54]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive(pathname, link.href) ? 'text-[#0F2D54]' : 'text-slate-600 hover:text-[#0F2D54]'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 md:pt-0">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block rounded-md bg-[#0F2D54] px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#143e74]"
              >
                Request a Proposal
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
