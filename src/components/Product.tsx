/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Cloud,
  GraduationCap,
  Landmark,
  ShieldCheck,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { product } from '../data/product';
import { ENQUIRY_ERP_DEMO } from '../data/site';
import { requestEnquiry } from '../utils/scroll';
import type { ProductCapability } from '../data/product';

const audienceIcons = {
  colleges: Building2,
  autonomous: Landmark,
  universities: GraduationCap,
} as const;

function CapabilityMock({ id }: { id: string }) {
  if (id === 'nep') {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <span className="text-xs font-mono text-gray-400">academic_core · NCrF</span>
          <span className="text-[10px] bg-[#10A5B5]/10 text-[#0d8592] px-2 py-0.5 rounded font-semibold">APAAR linked</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {['Major 84 cr', 'Minor 24 cr', 'AEC / SEC', 'VAC basket'].map((label) => (
            <div key={label} className="bg-slate-50 border border-slate-100 rounded p-2.5">
              <p className="text-[10px] text-gray-400 font-medium">{label}</p>
              <p className="text-sm font-display font-bold text-gray-800 mt-0.5">On track</p>
            </div>
          ))}
        </div>
        <div className="bg-slate-50 border border-slate-100 rounded p-2.5 flex justify-between items-center">
          <div>
            <p className="text-[10px] text-gray-400">CO–PO attainment</p>
            <p className="text-xs font-semibold text-gray-800 mt-0.5">B.Sc. Nursing · PO4 78%</p>
          </div>
          <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-semibold">Live</span>
        </div>
      </div>
    );
  }

  if (id === 'naac') {
    const attrs = [
      ['Curriculum', 92],
      ['Faculty', 88],
      ['Infrastructure', 81],
      ['Finance', 90],
      ['Teaching', 76],
      ['Outcomes', 70],
    ];
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <span className="text-xs font-mono text-gray-400">accreditation_hub</span>
          <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold">DCF ready</span>
        </div>
        <div className="space-y-2">
          {attrs.map(([label, value]) => (
            <div key={label as string} className="space-y-1">
              <div className="flex justify-between text-[10px] font-medium text-gray-500">
                <span>{label}</span>
                <span>{value}%</span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#10A5B5] rounded-full" style={{ width: `${value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (id === 'finance') {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <span className="text-xs font-mono text-gray-400">fee_ops</span>
          <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-semibold">UPI cleared</span>
        </div>
        <div className="bg-slate-50 border border-slate-100 rounded p-2.5">
          <p className="text-[10px] text-gray-400">Today’s collections</p>
          <p className="text-lg font-display font-bold text-gray-900 mt-0.5">₹18.4 L</p>
          <p className="text-[10px] text-gray-500 mt-1">142 receipts · Tally Prime sync queued</p>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          {['UPI', 'Netbanking', 'Cards'].map((rail) => (
            <div key={rail} className="bg-slate-50 border border-slate-100 rounded p-2">
              <p className="text-[10px] text-gray-400">{rail}</p>
              <p className="text-xs font-bold text-gray-800 mt-0.5">Live</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (id === 'lifecycle') {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <span className="text-xs font-mono text-gray-400">exam_guard</span>
          <span className="text-[10px] bg-amber-50 text-amber-800 px-2 py-0.5 rounded font-semibold">75% UGC</span>
        </div>
        <div className="space-y-2">
          {[
            ['Hall tickets ready', '1,204', 'Fee + attendance clear'],
            ['Shortage alerts', '86', 'Below 75% this month'],
            ['CIE published', 'Batch 2025', '10-point CGPA'],
          ].map(([label, value, note]) => (
            <div key={label} className="flex justify-between items-center bg-slate-50 border border-slate-100 rounded p-2.5">
              <div>
                <p className="text-xs font-semibold text-gray-800">{label}</p>
                <p className="text-[10px] text-gray-400">{note}</p>
              </div>
              <p className="text-sm font-display font-bold text-[#0F2D54]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <span className="text-xs font-mono text-gray-400">whatsapp_ops</span>
        <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-semibold">Business API</span>
      </div>
      <div className="space-y-2">
        {['Fee receipt · ₹42,500', 'Attendance shortage · 71%', 'Hall ticket link · End-sem'].map((item) => (
          <div key={item} className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-left">
            <p className="text-[10px] text-[#10A5B5] font-semibold">Official campus</p>
            <p className="text-xs text-gray-800 mt-0.5">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CapabilityPanel({ capability }: { capability: ProductCapability }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
      <div className="lg:col-span-7 space-y-6 text-left">
        <div className="space-y-2">
          <p className="text-xs font-mono font-bold tracking-widest text-[#10A5B5] uppercase">
            Capability {capability.number}
          </p>
          <h3 className="text-2xl font-display font-bold text-gray-900 leading-tight">
            {capability.title}
          </h3>
          <p className="text-sm text-gray-500 font-sans">{capability.subtitle}</p>
        </div>
        <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
          {capability.body}
        </p>
        <div className="space-y-4">
          {capability.points.map((point) => (
            <div key={point.heading} className="space-y-1">
              <h4 className="text-sm font-display font-bold text-gray-900">{point.heading}</h4>
              <p className="text-sm text-gray-600 font-sans leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
        <ul className="space-y-2 pt-2">
          {capability.outcomes.map((outcome) => (
            <li key={outcome} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-5">
        <div className="bg-white rounded-lg border border-gray-100 shadow-lg p-5">
          <div className="flex gap-1.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <CapabilityMock id={capability.id} />
        </div>
      </div>
    </div>
  );
}

export default function Product() {
  const [activeId, setActiveId] = useState(product.capabilities[0].id);
  const active = product.capabilities.find((item) => item.id === activeId) ?? product.capabilities[0];

  return (
    <section id="product" className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 mb-14 text-left">
          <span className="text-xs font-mono font-bold tracking-widest text-[#10A5B5] uppercase block">
            {product.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 tracking-tight">
            {product.name}
          </h2>
          <p className="text-lg sm:text-xl font-display font-semibold text-[#0F2D54] leading-snug">
            {product.tagline}
          </p>
          <p className="text-base sm:text-lg text-gray-600 font-sans leading-relaxed">
            {product.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {product.audiences.map((audience) => {
            const Icon = audienceIcons[audience.id as keyof typeof audienceIcons];
            return (
              <div
                key={audience.id}
                className="border border-gray-100 rounded-lg p-6 bg-slate-50/60 space-y-3 text-left"
              >
                <div className="w-10 h-10 rounded-md bg-[#10A5B5]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#10A5B5]" />
                </div>
                <h3 className="font-display font-bold text-gray-900">{audience.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{audience.description}</p>
              </div>
            );
          })}
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-display font-bold text-gray-900">Key Capabilities</h3>
          <div
            role="tablist"
            aria-label="ERP capabilities"
            className="flex flex-wrap gap-2"
          >
            {product.capabilities.map((capability) => {
              const selected = capability.id === activeId;
              return (
                <button
                  key={capability.id}
                  type="button"
                  role="tab"
                  id={`capability-tab-${capability.id}`}
                  aria-selected={selected}
                  aria-controls={`capability-panel-${capability.id}`}
                  onClick={() => setActiveId(capability.id)}
                  className={`text-left text-sm font-sans font-medium px-3.5 py-2.5 rounded-md border transition-colors cursor-pointer ${
                    selected
                      ? 'bg-[#0F2D54] text-white border-[#0F2D54]'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className={`block text-[10px] font-mono uppercase tracking-wider ${selected ? 'text-[#10A5B5]' : 'text-gray-400'}`}>
                    {capability.number}
                  </span>
                  {capability.title}
                </button>
              );
            })}
          </div>

          <div className="bg-slate-50 border border-gray-100 rounded-xl p-6 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                role="tabpanel"
                id={`capability-panel-${active.id}`}
                aria-labelledby={`capability-tab-${active.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <CapabilityPanel capability={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-16 space-y-4">
          <h3 className="text-sm font-display font-bold text-gray-900">Supported integrations</h3>
          <p className="text-sm text-gray-500 max-w-2xl">
            Platform capabilities for Indian academic identity, payments, accounts, and messaging — not third-party certification badges.
          </p>
          <div className="flex flex-wrap gap-3">
            {product.integrations.map((item) => (
              <div
                key={item.name}
                className="border border-gray-200 bg-white rounded-md px-4 py-3 text-left"
              >
                <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {product.deployment.items.map((item, index) => (
            <div key={item.heading} className="border border-gray-100 rounded-lg p-8 bg-[#0A1729] text-white text-left space-y-3">
              <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center">
                {index === 0 ? (
                  <Cloud className="w-5 h-5 text-[#10A5B5]" />
                ) : (
                  <ShieldCheck className="w-5 h-5 text-[#10A5B5]" />
                )}
              </div>
              <h3 className="font-display font-bold text-lg">{item.heading}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-gray-100 rounded-lg p-6 sm:p-8 bg-slate-50">
          <div className="space-y-1 text-left">
            <p className="font-display font-bold text-gray-900 text-lg">See the campus platform in a working demo</p>
            <p className="text-sm text-gray-600">Tell us your institute type and current systems. We will scope a 30-day onboarding path.</p>
          </div>
          <button
            type="button"
            onClick={() => requestEnquiry(ENQUIRY_ERP_DEMO)}
            className="bg-[#0F2D54] hover:bg-[#143e74] text-white font-sans font-medium text-sm px-6 py-3 rounded-md shadow-sm flex items-center gap-2 cursor-pointer group shrink-0"
          >
            Request a campus demo
            <ArrowRight className="w-4 h-4 text-[#10A5B5] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
