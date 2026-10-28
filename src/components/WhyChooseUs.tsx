/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, MessageSquare, Target, Smartphone, Activity, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Built for Indian Campus Workflows',
      description: 'The Higher Education ERP is designed around NEP 2020, NAAC Binary evidence, UGC attendance rules, Indian fee concessions, and WhatsApp operations — not a generic overseas SIS with a localization patch.',
      icon: GraduationCap,
      color: '#10A5B5',
    },
    {
      title: 'Built Around Your Business Workflow',
      description: 'For custom websites and portals, we do not squeeze your operations into generic theme templates. We analyze how your team works, how inquiries arrive, and design systems that match everyday work.',
      icon: ShieldCheck,
      color: '#0F2D54',
    },
    {
      title: 'Direct, Simple Communication',
      description: 'No technical jargon and no translation layers. You speak directly with the builders. We listen to your goals and explain solutions in plain English or Hindi.',
      icon: MessageSquare,
      color: '#10A5B5',
    },
    {
      title: 'Focused on Practical Outcomes',
      description: 'We avoid features that inflate budgets without changing operations. Priority is core work: fee reconciliation, exam gatekeeping, accreditation evidence, secure forms, and systems staff will actually open.',
      icon: Target,
      color: '#0F2D54',
    },
    {
      title: 'Mobile-Friendly & Easy to Maintain',
      description: 'Students, parents, and staff will use these systems on phones. We design for mobile first so attendance, receipts, and notices stay usable on ordinary cellular connections.',
      icon: Smartphone,
      color: '#10A5B5',
    },
    {
      title: 'Continuous Post-Launch Support',
      description: 'We do not hand over a system and disappear. We remain available for patches, hosting, copy changes, security reviews, and backups so the platform stays online.',
      icon: Activity,
      color: '#0F2D54',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6 text-left lg:sticky lg:top-28">
            <span className="text-xs font-mono font-bold tracking-widest text-[#10A5B5] uppercase block">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 tracking-tight leading-tight">
              Why Institutions and Businesses Work With Us
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed text-base">
              Software Lab builds a campus ERP for Indian higher education and custom digital systems for organizations that need a precise operational fit.
            </p>

            <div className="bg-slate-50 border border-slate-100 rounded-lg p-6 space-y-4">
              <h3 className="font-display font-bold text-gray-800 text-sm">Our Commitments</h3>
              <ul className="space-y-2.5 text-xs font-sans text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10A5B5]" />
                  <span>Fixed-scope proposals — the agreed price is the price you pay.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10A5B5]" />
                  <span>Direct phone, WhatsApp, and email during business hours.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10A5B5]" />
                  <span>Indian data residency on AWS Mumbai for the campus ERP, with DPDPA-aligned handling.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            {points.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex gap-4 sm:gap-6 text-left"
                >
                  <div className="shrink-0">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: `${point.color}15` }}
                    >
                      <IconComponent className="w-5 h-5" style={{ color: point.color }} />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-lg text-gray-900 leading-tight">
                      {point.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
