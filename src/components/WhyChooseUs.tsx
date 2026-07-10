/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, MessageSquare, Target, Smartphone, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Built Around Your Business Workflow',
      description: 'We do not squeeze your operations into generic pre-designed theme templates. We analyze how your team works, how inquiries arrive, and design digital portals or booking flows that match your actual everyday workflow.',
      icon: ShieldCheck,
      color: '#10A5B5',
    },
    {
      title: 'Direct, Simple Communication',
      description: 'No technical jargon, no over-engineered developer terms, and no translation layers. You speak directly with the builders. We listen to your real-world goals and explain our solutions in simple, direct English or Hindi.',
      icon: MessageSquare,
      color: '#0F2D54',
    },
    {
      title: 'Focused on Practical Outcomes',
      description: 'We avoid unnecessary features that inflate budgets and complicate operations. We prioritize core functionality first: secure forms, clear institutional presentation, lightning-fast loads, and straightforward actions.',
      icon: Target,
      color: '#10A5B5',
    },
    {
      title: 'Mobile-Friendly & Easy to Maintain',
      description: 'Over 85% of your target customers, students, or patients will view your system on their phones. We build starting from mobile layout precision, ensuring everything remains instantly legible, responsive, and light on cellular data.',
      icon: Smartphone,
      color: '#0F2D54',
    },
    {
      title: 'Continuous Post-Launch Support',
      description: 'We do not hand over code and disappear. We remain your digital partners, handling software patches, domain mapping, periodic copy changes, security audits, and cloud backups so your system remains online 24/7.',
      icon: Activity,
      color: '#10A5B5',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Summary Card */}
          <div className="lg:col-span-5 space-y-6 text-left lg:sticky lg:top-28" id="why-us-visual-column">
            <span className="text-xs font-mono font-bold tracking-widest text-[#10A5B5] uppercase block">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 tracking-tight leading-tight">
              Why Businesses Work With Us
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed text-base">
              We started Software Labs Dehradun to bridge the gap between technical complexity and business logic. We design software that helps institutions save labor and look professional.
            </p>
            
            {/* Trust box callout */}
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-6 space-y-4">
              <h4 className="font-display font-bold text-gray-800 text-sm">Our Commitments to Every Client</h4>
              <ul className="space-y-2.5 text-xs font-sans text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10A5B5]" />
                  <span>Fixed-scope pricing — zero hidden fees or surprise additions.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10A5B5]" />
                  <span>Direct phone calls or WhatsApp availability during business hours.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10A5B5]" />
                  <span>Clean, industry-standard modern technology that is built to last.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: Stacked Points */}
          <div className="lg:col-span-7 space-y-8" id="why-us-points">
            {points.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex gap-4 sm:gap-6 text-left"
                  id={`why-us-item-${index}`}
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
