/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Globe,
  ClipboardCheck,
  BarChart3,
  LayoutGrid,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Service } from '../types';
import { ENQUIRY_ERP_DEMO } from '../data/site';
import { requestEnquiry } from '../utils/scroll';

export default function Services() {
  const services: Service[] = [
    {
      id: 'websites',
      title: 'Business Websites',
      description: 'High-performing, fully custom websites designed to present your organization with credibility. Built with mobile responsiveness, rapid loading speeds, and clear navigation.',
      iconName: 'Globe',
      benefits: ['Optimized for local search & Google Maps', 'Custom CMS & easy text updates', 'Fast loading on mobile connections']
    },
    {
      id: 'admissions',
      title: 'Admissions & Enquiry Systems',
      description: 'Streamline student intakes, patient bookings, or client enquiries. We build customized forms, lead capture queues, and automatic email/SMS notifications that prevent lost opportunities.',
      iconName: 'ClipboardCheck',
      benefits: ['Instant lead routing to your staff', 'Integrated course/program selectors', 'Secure digital enquiry storage']
    },
    {
      id: 'dashboards',
      title: 'Admin Dashboards',
      description: 'Take control of your business data. We translate complex spreadsheet records into clean, interactive screens that let directors and managers track inquiries, sales, bookings, or student lists.',
      iconName: 'BarChart3',
      benefits: ['Visual charts & status updates', 'Export to Excel/PDF with one click', 'Secure roles for multiple staff members']
    },
    {
      id: 'portals',
      title: 'Custom Operational Portals',
      description: 'Bespoke internal systems for staff schedules, customer files, inventory, or workflows that do not fit a packaged product. Distinct from our Higher Education ERP — these portals are designed around your exact operations.',
      iconName: 'LayoutGrid',
      benefits: ['Central database for operational data', 'Automated task assignments', 'Saves hours of paper & manual work']
    },
    {
      id: 'redesigns',
      title: 'Website Redesigns',
      description: 'Revitalize an outdated, slow, or hard-to-edit existing website. We modernize the look, restructure pages for higher conversions, and migrate content without losing current SEO rankings.',
      iconName: 'Sparkles',
      benefits: ['Modern premium layout redesign', 'Significant performance & speed boost', 'SEO-friendly redirect mapping']
    },
    {
      id: 'support',
      title: 'Ongoing Support',
      description: 'Reliable monthly technical support so you never have to worry about security patches, server hosting, domain renewals, or small textual updates. We act as your on-call technical partner.',
      iconName: 'HeartHandshake',
      benefits: ['Regular backups & security scans', 'Same-day minor changes guarantee', 'Hosting & domain maintenance included']
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-6 h-6 text-[#10A5B5]" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-6 h-6 text-[#10A5B5]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#10A5B5]" />;
      case 'LayoutGrid': return <LayoutGrid className="w-6 h-6 text-[#10A5B5]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#10A5B5]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#10A5B5]" />;
      default: return <Globe className="w-6 h-6 text-[#10A5B5]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#10A5B5] uppercase block">
            Custom Software
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 tracking-tight">
            What We Also Build
          </h2>
          <p className="text-lg text-gray-600 font-sans leading-relaxed">
            Alongside the Higher Education ERP, we design practical digital systems for businesses and institutes — from websites to workflow tools your team can actually use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white border border-gray-100 hover:border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-md bg-[#10A5B5]/10 flex items-center justify-center">
                  {getIcon(service.iconName)}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-display font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-50 space-y-2.5 text-left">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2 text-xs font-sans text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span className="leading-tight font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-2">
          <p className="text-sm font-sans text-gray-500">
            Running a college or university?{' '}
            <button
              type="button"
              className="text-[#10A5B5] hover:text-[#0d8592] font-semibold underline underline-offset-4 cursor-pointer"
              onClick={() => requestEnquiry(ENQUIRY_ERP_DEMO)}
            >
              Request a campus ERP demo
            </button>
          </p>
          <p className="text-sm font-sans text-gray-500">
            Need a custom website or portal instead?{' '}
            <button
              type="button"
              className="text-[#10A5B5] hover:text-[#0d8592] font-semibold underline underline-offset-4 cursor-pointer"
              onClick={() => requestEnquiry('Business Website')}
            >
              Discuss a custom project
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
