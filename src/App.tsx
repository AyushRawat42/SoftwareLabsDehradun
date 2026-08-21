/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Product from './components/Product';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModal, { LegalDoc } from './components/LegalModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import { scrollToId } from './utils/scroll';

export default function App() {
  const [legalDoc, setLegalDoc] = useState<LegalDoc>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-[#10A5B5]/20 selection:text-[#0F2D54]">
      <a
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          scrollToId('main-content', 0);
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[70] focus:bg-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <Product />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Process />
        <FAQ />
        <Contact />
      </main>

      <Footer onOpenPrivacy={() => setLegalDoc('privacy')} onOpenTerms={() => setLegalDoc('terms')} />
      <WhatsAppFloat />
      <LegalModal doc={legalDoc} onClose={() => setLegalDoc(null)} />
    </div>
  );
}
