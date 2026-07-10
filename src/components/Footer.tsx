/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#0A1729] text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-5 space-y-5 text-left">
            <div className="flex items-center">
              <Logo size="sm" showText={true} className="text-white brightness-100 invert-0" />
            </div>
            
            <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed max-w-sm">
              Software Labs Dehradun — websites, systems, and software for growing businesses. We replace complex tech barriers with simple, fast, high-yielding software.
            </p>

            <div className="space-y-2.5 pt-2 text-slate-300 font-sans text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#10A5B5] shrink-0" />
                <span>Dehradun, Uttarakhand, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#10A5B5] shrink-0" />
                <span>+91 99999 99999 (WhatsApp & Call)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#10A5B5] shrink-0" />
                <a href="mailto:ayushrawat42@gmail.com" className="hover:text-white transition-colors underline">
                  ayushrawat42@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation map */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-display font-bold text-slate-200 text-sm uppercase tracking-wider">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-1 gap-2.5 font-sans text-slate-400 text-sm">
              <a 
                href="#home" 
                onClick={(e) => handleLinkClick(e, 'home')} 
                className="hover:text-white hover:underline underline-offset-4 transition-colors"
              >
                Home Portfolio
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleLinkClick(e, 'services')} 
                className="hover:text-white hover:underline underline-offset-4 transition-colors"
              >
                Our Services
              </a>
              <a 
                href="#projects" 
                onClick={(e) => handleLinkClick(e, 'projects')} 
                className="hover:text-white hover:underline underline-offset-4 transition-colors"
              >
                Recent Projects
              </a>
              <a 
                href="#process" 
                onClick={(e) => handleLinkClick(e, 'process')} 
                className="hover:text-white hover:underline underline-offset-4 transition-colors"
              >
                Our Working Process
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleLinkClick(e, 'contact')} 
                className="hover:text-white hover:underline underline-offset-4 transition-colors"
              >
                Discuss Project
              </a>
            </div>
          </div>

          {/* Column 3: Mission Statements / Trust Callout */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="font-display font-bold text-slate-200 text-sm uppercase tracking-wider">
              Built with Integrity
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
              We focus on building reliable, fast, and secure business portals. No unrequested integrations, no template bloat, and 100% ownership of your code.
            </p>
            <div className="pt-2">
              <span className="text-[10px] font-mono font-bold text-[#10A5B5] uppercase bg-[#10A5B5]/10 px-2.5 py-1.5 rounded border border-[#10A5B5]/20 inline-block">
                Licensed Studio — Dehradun
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 font-sans text-xs">
          <p>© 2026 Software Labs Dehradun. All rights reserved.</p>
          
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3 py-1.5 rounded transition-colors cursor-pointer"
            id="back-to-top-button"
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
