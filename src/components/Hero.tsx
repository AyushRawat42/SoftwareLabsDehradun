/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, MapPin, CheckCircle, ShieldCheck, Laptop, Users, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
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
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white"
    >
      {/* Subtle Grid Pattern for "Labs/Engineering" vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Minimalist Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#10A5B5]/10 border border-[#10A5B5]/20 px-3.5 py-1.5 rounded-full text-[#0d8592] font-sans text-xs font-semibold tracking-wide"
              id="hero-badge"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10A5B5] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10A5B5]"></span>
              </span>
              Now Booking Projects for Q3-Q4 2026
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 tracking-tight leading-[1.1]"
              id="hero-headline"
            >
              Custom websites and software systems for businesses that want to <span className="text-[#0F2D54]">grow faster</span>.
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 font-sans leading-relaxed max-w-2xl"
              id="hero-subheadline"
            >
              We design and build business websites, booking flows, admin dashboards, and custom software that help organizations look professional, manage operations better, and save time.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              id="hero-cta-group"
            >
              <button
                onClick={() => handleScrollTo('contact')}
                className="bg-[#0F2D54] hover:bg-[#143e74] text-white font-sans font-medium text-base px-8 py-4 rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
                id="hero-primary-cta"
              >
                Discuss Your Project
                <ArrowRight className="w-5 h-5 text-[#10A5B5] group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => handleScrollTo('projects')}
                className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-sans font-medium text-base px-8 py-4 rounded-md shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="hero-secondary-cta"
              >
                View Recent Work
              </button>
            </motion.div>

            {/* Trust Line & Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-gray-500 text-sm font-sans"
              id="hero-trust-line"
            >
              <div className="flex items-center gap-2 text-gray-800 font-medium">
                <MapPin className="w-4 h-4 text-[#10A5B5]" />
                <span>Dehradun, India</span>
              </div>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-300 hidden sm:block" />
              <p className="leading-snug">
                Building custom digital systems for local businesses, academies, and international clients.
              </p>
            </motion.div>

          </div>

          {/* Right Column: Premium Visual Mockup (Representing core software solutions) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0" id="hero-visual-column">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[420px] lg:max-w-none"
            >
              {/* Decorative Blur Backdrops */}
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#10A5B5]/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#0F2D54]/5 rounded-full blur-3xl -z-10" />

              {/* Main Visual: Layered System Layout */}
              <div className="relative space-y-6">
                
                {/* Layer 1: Admin Dashboard Mock (Top floating layer) */}
                <motion.div 
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, type: 'spring' }}
                  className="bg-white rounded-lg border border-gray-100 shadow-xl p-5 relative"
                  id="mock-dashboard-layer"
                >
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <span className="text-xs font-mono text-gray-400 ml-2">portal_admin.exe</span>
                    </div>
                    <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">SIMS Medical</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded border border-slate-100">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#0F2D54]" />
                        <div className="text-left">
                          <p className="text-[10px] font-sans text-gray-400 font-medium leading-none">New Enquiries</p>
                          <p className="text-xs font-sans font-bold text-gray-800 leading-snug mt-0.5">38 prospective students</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded font-semibold">+12% today</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-slate-50 p-2.5 rounded border border-slate-100 text-left">
                        <p className="text-[10px] font-sans text-gray-400 font-medium">Admission Yield</p>
                        <p className="text-sm font-display font-bold text-gray-800 mt-0.5">86.4%</p>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded border border-slate-100 text-left">
                        <p className="text-[10px] font-sans text-gray-400 font-medium">Support Tickets</p>
                        <p className="text-sm font-display font-bold text-gray-800 mt-0.5">0 Pending</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Layer 2: Client Web View (Middle Layer offset) */}
                <motion.div 
                  initial={{ x: 20, y: 10 }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15, type: 'spring' }}
                  className="bg-white rounded-lg border border-gray-100 shadow-lg p-5 lg:ml-12 relative border-l-4 border-l-[#10A5B5]"
                  id="mock-client-view"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#10A5B5]/10 rounded">
                      <Laptop className="w-5 h-5 text-[#10A5B5]" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-gray-800">Aspire Academy Website</p>
                      <p className="text-[10px] text-gray-500">Responsive Admissions Flow</p>
                    </div>
                  </div>
                  
                  {/* Visual simulated wireframe form */}
                  <div className="space-y-2 pt-1">
                    <div className="h-6 bg-gray-50 rounded border border-gray-100 flex items-center px-2 text-[10px] text-gray-400">
                      Full Name
                    </div>
                    <div className="h-6 bg-gray-50 rounded border border-gray-100 flex items-center px-2 text-[10px] text-gray-400">
                      Selected Program (Defence Prep / Sports)
                    </div>
                    <div className="h-7 bg-[#10A5B5] rounded flex items-center justify-center text-[10px] font-medium text-white shadow-sm">
                      Submit Secure Application
                    </div>
                  </div>
                </motion.div>

                {/* Layer 3: Trust Badges Line (Small Bottom Floating) */}
                <motion.div 
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
                  className="bg-slate-900 text-white rounded-lg p-3.5 shadow-md flex items-center justify-between px-5 max-w-[280px]"
                  id="mock-metric-bar"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4.5 h-4.5 text-[#10A5B5]" />
                    <span className="text-xs font-sans font-medium">Production-Ready Code</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">100% Secure</span>
                </motion.div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
