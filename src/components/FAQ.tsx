/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('cost');

  const faqs: FAQItem[] = [
    {
      id: 'cost',
      question: 'How much does a project cost?',
      answer: 'Our projects typically range between ₹45,000 (approx. $600 USD) for high-performing, professional business websites, while more comprehensive systems (like admissions databases, custom admin portals, or ERP portals) are scoped individually based on requirements. We always provide a highly detailed, fixed-price proposal before starting. The price we agree on is exactly what you pay — there are zero hidden fees or unexpected developer charges.'
    },
    {
      id: 'timeline',
      question: 'How long does a project take?',
      answer: 'A standard professional business website takes between 10 to 15 business days from discovery to live launch. Customized workflow portals, admissions systems, or dashboards with dynamic spreadsheets typically require 3 to 6 weeks depending on structural complexity. We establish clear milestone delivery dates during planning so your business can align its launch schedules with precision.'
    },
    {
      id: 'location',
      question: 'Do you only work with local clients?',
      answer: 'Not at all. While we are proud to be based in Dehradun, Uttarakhand, and actively support local hospitals, sports academies, and educational clinics, we regularly build custom platforms for international startups and businesses (like Sticky Cards in Canada). We manage all reviews and updates through WhatsApp, Google Meet, or secure email, ensuring smooth collaboration regardless of timezones.'
    },
    {
      id: 'support',
      question: 'Do you provide support after launch?',
      answer: 'Yes, we stay available. Every project we launch includes 30 days of complimentary full technical support to ensure your staff or customers are completely comfortable using the new system. Following that, we offer low-overhead monthly support packages that handle daily database backups, secure server hosting, SSL certificate renewals, and rapid same-day textual or layout updates.'
    }
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#10A5B5] uppercase block" id="faq-section-tag">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 tracking-tight" id="faq-headline">
            Common Inquiries
          </h2>
          <p className="text-lg text-gray-600 font-sans leading-relaxed" id="faq-subheadline">
            Simple, jargon-free answers to help you understand our design and build policies.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4 text-left" id="faq-accordions-container">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-lg transition-colors duration-300 ${
                  isOpen 
                    ? 'border-gray-200 bg-slate-50/50 shadow-sm' 
                    : 'border-gray-100 hover:border-gray-200 bg-white'
                }`}
                id={`faq-item-${faq.id}`}
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none select-none cursor-pointer group"
                  id={`faq-trigger-${faq.id}`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-[#10A5B5]' : 'text-gray-400 group-hover:text-gray-600'}`} />
                    <span className="font-display font-bold text-gray-800 text-base sm:text-lg leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full bg-slate-100/50 group-hover:bg-slate-100 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#10A5B5]' : 'text-gray-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                      id={`faq-panel-${faq.id}`}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 border-t border-gray-100/40">
                        <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed pl-9">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Section Footer */}
        <div className="mt-12 text-center" id="faq-bottom-cta">
          <p className="text-sm font-sans text-gray-500">
            Have a question not listed here?{' '}
            <a 
              href="#contact" 
              className="text-[#10A5B5] hover:text-[#0d8592] font-semibold underline underline-offset-4"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ask us directly
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
