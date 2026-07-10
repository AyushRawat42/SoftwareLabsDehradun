/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-[#10A5B5]/20 selection:text-[#0F2D54]">
      {/* Premium Sticky Navigation */}
      <Header />

      {/* Main Content Layout Sections */}
      <main id="main-content">
        {/* Section 1: Hero banner */}
        <Hero />

        {/* Section 2: Core services overview */}
        <Services />

        {/* Section 3: Live projects portfolio mock showcase */}
        <Projects />

        {/* Section 4: Philosophy and trust points */}
        <WhyChooseUs />

        {/* Section 5: Stage sprint working model */}
        <Process />

        {/* Section 6: Jargon-free FAQ Accordion stack */}
        <FAQ />

        {/* Section 7: Multi-channel contact and enquiry forms */}
        <Contact />
      </main>

      {/* Footer credits and location index */}
      <Footer />
    </div>
  );
}
