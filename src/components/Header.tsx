/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, PhoneCall, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import { site } from '../data/site';
import { scrollToId } from '../utils/scroll';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Product', href: '#product' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) => {
          const id = link.href.substring(1);
          const element = document.getElementById(id);
          if (!element) return null;
          const rect = element.getBoundingClientRect();
          return {
            id,
            offsetTop: rect.top + window.scrollY - 100,
            offsetBottom: rect.bottom + window.scrollY - 100,
          };
        })
        .filter(Boolean) as { id: string; offsetTop: number; offsetBottom: number }[];

      const scrollPos = window.scrollY;
      const currentSection = sections.find(
        (section) => scrollPos >= section.offsetTop && scrollPos < section.offsetBottom
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else if (scrollPos < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    const targetId = href.substring(1);
    setIsMobileMenuOpen(false);
    setActiveSection(targetId);

    window.setTimeout(() => {
      scrollToId(targetId);
      if (targetId) {
        history.replaceState(null, '', `#${targetId}`);
      }
    }, 220);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center shrink-0">
            <Logo size="sm" />
          </a>

          <nav className="hidden md:flex items-center gap-5 lg:gap-6" id="desktop-nav">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`font-sans font-medium text-sm transition-colors relative py-1 whitespace-nowrap ${
                    isActive ? 'text-[#0F2D54]' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#10A5B5] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.phoneTel}`}
              className="bg-[#0F2D54] hover:bg-[#143e74] text-white font-sans font-medium text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 rounded-md flex items-center gap-2 shadow-sm hover:shadow transition-all cursor-pointer shrink-0"
            >
              <PhoneCall className="w-4 h-4 text-[#10A5B5]" />
              <span className="hidden sm:inline">Request a Demo</span>
              <span className="sm:hidden">Demo</span>
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none p-1.5 rounded-md border border-gray-100 hover:bg-gray-50 transition-colors"
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-lg overflow-hidden absolute top-full left-0 right-0"
          >
            <nav className="px-4 pt-3 pb-4 space-y-1">
              {navLinks.map((link) => {
                const id = link.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block px-4 py-3 rounded-md font-sans text-base font-medium transition-colors touch-manipulation ${
                      isActive
                        ? 'bg-gray-50 text-[#0F2D54] border-l-4 border-[#10A5B5]'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
