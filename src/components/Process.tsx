/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, Compass, Cpu, HelpCircle, Rocket, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { ProcessStep } from '../types';

export default function Process() {
  const steps: ProcessStep[] = [
    {
      number: 1,
      title: 'Discovery',
      duration: '1 - 3 Days',
      description: 'We host a simple phone call or in-person session to understand your business operations. We identify how your inquiries arrive, what files or logs you track, and exactly what your non-technical staff or clients need to achieve.',
      deliverables: ['Detailed Project Scope', 'Sitemap & User Paths', 'Fixed Price Proposal']
    },
    {
      number: 2,
      title: 'Planning & Blueprints',
      duration: '3 - 5 Days',
      description: 'We draft clear, visual structural wireframes of your pages and map out form questions and dashboard layouts. You get to review the layout blueprint and copy structure before we write a single line of code.',
      deliverables: ['Visual Page Wireframes', 'Content & Form Outlines', 'Accreditation/Brand Placements']
    },
    {
      number: 3,
      title: 'Precision Build',
      duration: '2 - 4 Weeks',
      description: 'We build your application using modern, ultra-lightweight React and Tailwind CSS. The code is structured for massive loading speeds, absolute security, and perfect responsive layout adaptability across all smartphone screens.',
      deliverables: ['Active Client Preview Link', 'Tested Responsive Mobile Forms', 'Initial Admin Dashboard Setup']
    },
    {
      number: 4,
      title: 'Review & Polishing',
      duration: '2 - 4 Days',
      description: 'We sit down with you to review the preview link. We test form submissions, dashboard charts, and loading speed. We incorporate your feedback and perfect the spacing, logos, and typography.',
      deliverables: ['Responsive Form Testing', 'Minor Copy Adjustments', 'Final Approval Checkoff']
    },
    {
      number: 5,
      title: 'Launch & Support',
      duration: '1 - 2 Days',
      description: 'We configure your custom web domain (e.g. yourbusiness.com), set up secure email routing, launch the site on premium cloud servers, and activate automatic daily databases backups and monthly support systems.',
      deliverables: ['Live Production Server Launch', 'Custom Domain Configuration', 'Ongoing Monthly Backup System']
    }
  ];

  const getStepIcon = (num: number) => {
    switch (num) {
      case 1: return <Search className="w-5 h-5 text-[#10A5B5]" />;
      case 2: return <Compass className="w-5 h-5 text-[#0F2D54]" />;
      case 3: return <Cpu className="w-5 h-5 text-[#10A5B5]" />;
      case 4: return <HelpCircle className="w-5 h-5 text-[#0F2D54]" />;
      case 5: return <Rocket className="w-5 h-5 text-[#10A5B5]" />;
      default: return <Cpu className="w-5 h-5 text-[#10A5B5]" />;
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-slate-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#10A5B5] uppercase block" id="process-section-tag">
            Our Method
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 tracking-tight" id="process-headline">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 font-sans leading-relaxed" id="process-subheadline">
            We follow a structured, high-transparency process to ensure your project is delivered on schedule, with zero budget surprises.
          </p>
        </div>

        {/* Process Steps List */}
        <div className="relative" id="process-steps-container">
          
          {/* Timeline Line for large screens */}
          <div className="absolute left-[39px] top-12 bottom-12 w-0.5 bg-gray-200 hidden lg:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start relative text-left"
                id={`process-step-item-${step.number}`}
              >
                {/* Left Part: Number and Icon Indicator */}
                <div className="lg:col-span-4 flex items-center lg:items-start gap-4">
                  
                  {/* Step bubble */}
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-100 shadow-sm flex flex-col items-center justify-center shrink-0 z-10" id={`step-bubble-${step.number}`}>
                    <span className="text-[10px] font-mono font-bold text-[#10A5B5] leading-none uppercase">Step</span>
                    <span className="text-2xl font-display font-bold text-[#0F2D54] leading-tight">{step.number}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#10A5B5] font-semibold tracking-wider bg-[#10A5B5]/10 px-2 py-0.5 rounded-full inline-block">
                      {step.duration}
                    </span>
                    <h3 className="text-xl font-display font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>

                </div>

                {/* Right Part: Content and Deliverables */}
                <div className="lg:col-span-8 bg-white border border-gray-100 rounded-lg p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6">
                  
                  {/* Description text */}
                  <div className="md:col-span-8 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-slate-50 border border-slate-100 rounded-md">
                        {getStepIcon(step.number)}
                      </div>
                      <span className="font-mono text-xs font-bold text-gray-400">STAGE_{step.number}</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables column */}
                  <div className="md:col-span-4 bg-slate-50 rounded-md p-4 border border-slate-100/50 flex flex-col justify-between text-left">
                    <div>
                      <p className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-wider mb-3">Deliverables</p>
                      <div className="space-y-2">
                        {step.deliverables.map((deliv, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs font-sans text-gray-700">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
