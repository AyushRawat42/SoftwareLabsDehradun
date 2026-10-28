/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';
import { site } from '../data/site';
import { scrollToId } from '../utils/scroll';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('erp-what');

  const faqs: FAQItem[] = [
    {
      id: 'erp-what',
      question: 'What is Software Lab Higher Education ERP?',
      answer: 'It is a unified, cloud-based campus platform for Indian colleges, autonomous institutes, and universities. Academics, finance, examinations, NAAC Binary evidence, and WhatsApp communication run in one system, designed around NEP 2020 rather than as add-ons to a generic SIS.',
    },
    {
      id: 'erp-price',
      question: 'How is the campus ERP priced?',
      answer: 'We do not publish a one-size list price. After a demo we issue a fixed-scope proposal based on student strength, campuses, modules (academics, finance, exams, accreditation, WhatsApp), and migration complexity. The figure in that proposal is what you pay — there are no hidden implementation surcharges.',
    },
    {
      id: 'abc-apaar',
      question: 'Does it support APAAR, ABC, and DigiLocker / NAD?',
      answer: 'Yes. The academic engine is built to work with 12-digit APAAR IDs, the Academic Bank of Credits, and automated push of verified digital marksheets and degree certificates to DigiLocker / NAD as platform capabilities of the ERP.',
    },
    {
      id: 'tally-zoho',
      question: 'Can finance sync with Tally Prime or Zoho Books?',
      answer: 'Yes. Fee collection, receipts, and daybooks are designed for bi-directional synchronization with Tally Prime and Zoho Books so accounts teams do not re-enter the same transactions.',
    },
    {
      id: 'residency',
      question: 'Where is campus data hosted?',
      answer: 'The Higher Education ERP is hosted in Indian cloud regions on AWS Mumbai, with encrypted audit logging and handling aligned to the Digital Personal Data Protection Act (DPDPA 2023).',
    },
    {
      id: 'whatsapp-api',
      question: 'How does WhatsApp messaging work?',
      answer: 'The platform integrates with the official WhatsApp Business API for fee receipts, attendance shortage alerts, hall ticket links, and campus circulars. Students, parents, faculty, and administrators also get role-specific web dashboards and mobile applications.',
    },
    {
      id: 'cost',
      question: 'How much does a custom website or portal cost?',
      answer: 'Custom projects typically start at ₹45,000 for a professional business website. Admissions databases, admin portals, and operational systems are scoped individually. We always provide a detailed, fixed-price proposal before work starts.',
    },
    {
      id: 'timeline',
      question: 'How long does a custom project take?',
      answer: 'A standard business website takes 10 to 15 business days from discovery to launch. Custom portals and dashboards typically need 3 to 6 weeks. Campus ERP onboarding is a separate 30-day migration and configuration track.',
    },
    {
      id: 'location',
      question: 'Do you only work with local clients?',
      answer: `We work with institutes and businesses across India as well as international clients (for example Sticky Cards in Canada). Reviews and updates run over email, scheduled video calls, and — when you prefer — WhatsApp.`,
    },
    {
      id: 'support',
      question: 'Do you provide support after launch?',
      answer: 'Yes. Every custom project includes 30 days of complimentary technical support. After that, monthly packages cover backups, hosting, SSL renewals, and same-day copy or layout updates. ERP customers receive onboarding training plus ongoing platform support as agreed in the proposal.',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#10A5B5] uppercase block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 tracking-tight">
            Common Inquiries
          </h2>
          <p className="text-lg text-gray-600 font-sans leading-relaxed">
            Answers for campus ERP evaluators and for teams commissioning a custom website or portal.
          </p>
        </div>

        <div className="space-y-4 text-left">
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
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none select-none cursor-pointer group"
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

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
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

        <div className="mt-12 text-center">
          <p className="text-sm font-sans text-gray-500">
            Have a question not listed here?{' '}
            <button
              type="button"
              className="text-[#10A5B5] hover:text-[#0d8592] font-semibold underline underline-offset-4 cursor-pointer"
              onClick={() => scrollToId('contact')}
            >
              Ask us directly
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
