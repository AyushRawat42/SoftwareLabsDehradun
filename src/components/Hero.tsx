/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, MapPin, ShieldCheck, Users, FileCheck, Wallet } from 'lucide-react';
import { motion } from 'motion/react';
import { ENQUIRY_ERP_DEMO, site } from '../data/site';
import { requestEnquiry, scrollToId } from '../utils/scroll';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#10A5B5]/10 border border-[#10A5B5]/20 px-3.5 py-1.5 rounded-full text-[#0d8592] font-sans text-xs font-semibold tracking-wide"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10A5B5] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10A5B5]" />
              </span>
              Flagship product for Indian higher education
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 tracking-tight leading-[1.1]"
            >
              Unify campus operations for <span className="text-[#0F2D54]">NEP and NAAC</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 font-sans leading-relaxed max-w-2xl"
            >
              Software Labs Higher Education ERP is a cloud campus platform for Indian colleges, autonomous institutes, and universities. We also design custom websites and operational systems for businesses that need something built around their workflow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={() => requestEnquiry(ENQUIRY_ERP_DEMO)}
                className="bg-[#0F2D54] hover:bg-[#143e74] text-white font-sans font-medium text-base px-8 py-4 rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                Request a campus demo
                <ArrowRight className="w-5 h-5 text-[#10A5B5] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollToId('projects')}
                className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-sans font-medium text-base px-8 py-4 rounded-md shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                View recent work
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 border-t border-gray-100 flex flex-col gap-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-gray-500 text-sm font-sans">
                <div className="flex items-center gap-2 text-gray-800 font-medium">
                  <MapPin className="w-4 h-4 text-[#10A5B5]" />
                  <span>{site.city}, India</span>
                </div>
                <div className="h-1.5 w-1.5 rounded-full bg-gray-300 hidden sm:block" />
                <p className="leading-snug">
                  Three live platforms in production. Custom systems for academies, colleges, and international clients.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['NEP 2020', 'NAAC Binary', 'APAAR / ABC', 'DPDPA 2023', 'AWS Mumbai'].map((chip) => (
                  <span
                    key={chip}
                    className="text-[11px] font-mono font-semibold uppercase tracking-wide text-[#0F2D54] bg-slate-100 border border-slate-200 px-2.5 py-1 rounded"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[420px] lg:max-w-none"
            >
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#10A5B5]/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#0F2D54]/5 rounded-full blur-3xl -z-10" />

              <div className="relative space-y-6">
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, type: 'spring' }}
                  className="bg-white rounded-lg border border-gray-100 shadow-xl p-5 relative"
                >
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <span className="text-xs font-mono text-gray-400 ml-2">campus_erp</span>
                    </div>
                    <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">HEI Console</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded border border-slate-100">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#0F2D54]" />
                        <div className="text-left">
                          <p className="text-[10px] font-sans text-gray-400 font-medium leading-none">Attendance guard</p>
                          <p className="text-xs font-sans font-bold text-gray-800 leading-snug mt-0.5">86 students below 75%</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded font-semibold">Alerts sent</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-slate-50 p-2.5 rounded border border-slate-100 text-left">
                        <p className="text-[10px] font-sans text-gray-400 font-medium">Fee reconciled</p>
                        <p className="text-sm font-display font-bold text-gray-800 mt-0.5">₹18.4 L</p>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded border border-slate-100 text-left">
                        <p className="text-[10px] font-sans text-gray-400 font-medium">NAAC attributes</p>
                        <p className="text-sm font-display font-bold text-gray-800 mt-0.5">8 / 10 live</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 20, y: 10 }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15, type: 'spring' }}
                  className="bg-white rounded-lg border border-gray-100 shadow-lg p-5 lg:ml-12 relative border-l-4 border-l-[#10A5B5]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#10A5B5]/10 rounded">
                      <FileCheck className="w-5 h-5 text-[#10A5B5]" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-gray-800">Hall ticket gatekeeping</p>
                      <p className="text-[10px] text-gray-500">Attendance + fee clearance</p>
                    </div>
                  </div>
                  <div className="space-y-2 pt-1">
                    <div className="h-6 bg-gray-50 rounded border border-gray-100 flex items-center px-2 text-[10px] text-gray-500 justify-between">
                      <span>APAAR · ABC credit push</span>
                      <span className="text-emerald-600 font-semibold">Ready</span>
                    </div>
                    <div className="h-6 bg-gray-50 rounded border border-gray-100 flex items-center px-2 text-[10px] text-gray-500 justify-between">
                      <span>DCF export · One Nation One Data</span>
                      <span className="text-emerald-600 font-semibold">Queued</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
                  className="bg-slate-900 text-white rounded-lg p-3.5 shadow-md flex items-center justify-between px-5 max-w-[300px]"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#10A5B5]" />
                    <span className="text-xs font-sans font-medium">AWS Mumbai · DPDPA</span>
                  </div>
                  <Wallet className="w-3.5 h-3.5 text-gray-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
