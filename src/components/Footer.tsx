/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { hasPhone, hasWhatsApp, site } from '../data/site';
import { scrollToId } from '../utils/scroll';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'product', label: 'Higher Education ERP' },
  { id: 'services', label: 'Custom Software' },
  { id: 'projects', label: 'Recent Projects' },
  { id: 'process', label: 'How We Work' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps) {
  return (
    <footer id="main-footer" className="bg-[#0A1729] text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5 space-y-5 text-left">
            <div className="flex items-center">
              <Logo size="sm" showText={true} className="text-white brightness-100 invert-0" />
            </div>

            <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed max-w-sm">
              {site.shortName} — Higher Education ERP for Indian campuses, plus custom websites and operational systems for growing organizations.
            </p>

            <div className="space-y-2.5 pt-2 text-slate-300 font-sans text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#10A5B5] shrink-0" />
                <span>{site.locationLine}</span>
              </div>
              {hasPhone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#10A5B5] shrink-0" />
                  <a href={`tel:${site.phoneTel}`} className="hover:text-white transition-colors">
                    {site.phoneDisplay}
                    {hasWhatsApp ? ' (WhatsApp & Call)' : ''}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#10A5B5] shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors underline">
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-display font-bold text-slate-200 text-sm uppercase tracking-wider">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-1 gap-2.5 font-sans text-slate-400 text-sm">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(item.id);
                  }}
                  className="hover:text-white hover:underline underline-offset-4 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="font-display font-bold text-slate-200 text-sm uppercase tracking-wider">
              Built with Integrity
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
              Campus data for the Higher Education ERP is hosted in India (AWS Mumbai) with DPDPA-aligned handling and encrypted audit logging. Custom project clients retain ownership of the code we ship for them.
            </p>
            <div className="pt-2">
              <span className="text-[10px] font-mono font-bold text-[#10A5B5] uppercase bg-[#10A5B5]/10 px-2.5 py-1.5 rounded border border-[#10A5B5]/20 inline-block">
                Studio based in {site.city}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 font-sans text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="hover:text-white underline underline-offset-4 cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={onOpenTerms}
                className="hover:text-white underline underline-offset-4 cursor-pointer"
              >
                Terms of Use
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3 py-1.5 rounded transition-colors cursor-pointer"
            title="Scroll to top of page"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
