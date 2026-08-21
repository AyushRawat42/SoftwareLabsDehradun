/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Phone, Mail, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ENQUIRY_ERP_DEMO, enquiryTypes, hasPhone, hasWhatsApp, site } from '../data/site';
import { subscribeEnquiry } from '../utils/scroll';
import { ContactFormState } from '../types';

const initialForm: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  projectType: ENQUIRY_ERP_DEMO,
  timeline: 'Within 1 Month',
  message: '',
  company: '',
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    return subscribeEnquiry((projectType) => {
      setFormData((prev) => ({ ...prev, projectType }));
    });
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    if (formData.company) return;

    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    const formEmail = import.meta.env.VITE_FORMSUBMIT_EMAIL || site.email;
    const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(formEmail)}`;
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      organization: formData.organization || 'Not provided',
      projectType: formData.projectType,
      timeline: formData.timeline,
      message: formData.message,
      _subject: `Software Labs enquiry: ${formData.projectType}`,
      _template: 'table',
      _captcha: 'false',
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Could not send the enquiry.');
      }
      setSubmitSuccess(true);
      setFormData(initialForm);
      window.setTimeout(() => setSubmitSuccess(false), 8000);
    } catch {
      setSubmitError(
        `We could not send the form just now. Email ${site.email} directly and we will reply.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#10A5B5] uppercase block">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 tracking-tight">
            Request a Demo or Discuss a Project
          </h2>
          <p className="text-lg text-gray-600 font-sans leading-relaxed">
            Book a Higher Education ERP campus demo, or share a custom website or portal brief. {site.replyWindow}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 leading-tight">
                Connect Directly
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                Prefer to skip the form? Email us with your institute or company name and what you need. {site.hours}.
              </p>
            </div>

            <div className="space-y-4">
              {hasWhatsApp && (
                <a
                  href={`https://wa.me/${site.whatsappDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-emerald-600">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-wider">Quick Response</span>
                    <p className="font-display font-bold text-gray-900 leading-none text-base">Chat on WhatsApp</p>
                    <p className="text-xs font-sans text-gray-500 leading-snug mt-1">{site.phoneDisplay || site.whatsappDigits}</p>
                  </div>
                </a>
              )}

              {hasPhone && (
                <a
                  href={`tel:${site.phoneTel}`}
                  className="flex items-center gap-4 bg-white hover:bg-[#0F2D54]/5 border border-gray-200 hover:border-[#0F2D54]/20 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-[#0F2D54]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-[#0F2D54] font-bold uppercase tracking-wider">Call Our Studio</span>
                    <p className="font-display font-bold text-gray-900 leading-none text-base">Direct Phone Line</p>
                    <p className="text-xs font-sans text-gray-500 leading-snug mt-1">{site.phoneDisplay}</p>
                  </div>
                </a>
              )}

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 bg-white hover:bg-[#10A5B5]/5 border border-gray-200 hover:border-[#10A5B5]/20 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-[#10A5B5]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-[#10A5B5] font-bold uppercase tracking-wider">Official Email</span>
                  <p className="font-display font-bold text-gray-900 leading-none text-base">{site.email}</p>
                  <p className="text-xs font-sans text-gray-500 leading-snug mt-1">Demo requests and project briefs</p>
                </div>
              </a>
            </div>

            <p className="pt-2 text-gray-400 text-xs font-sans">Based in {site.locationLine}</p>
          </div>

          <div className="lg:col-span-7 bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-10 text-left">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 leading-tight mb-2">
              Share Your Details
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-sans leading-relaxed mb-8">
              Choose a campus demo or a custom project. We reply with next steps and, where relevant, a fixed-scope proposal.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-gray-700 font-sans uppercase tracking-wider">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Dr. Satish Negi"
                    className="w-full bg-slate-50 border border-gray-200 rounded-md px-3.5 py-2.5 text-sm font-sans focus:outline-none focus:border-[#10A5B5] focus:bg-white transition-all text-gray-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-gray-700 font-sans uppercase tracking-wider">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. registrar@yourcollege.edu.in"
                    className="w-full bg-slate-50 border border-gray-200 rounded-md px-3.5 py-2.5 text-sm font-sans focus:outline-none focus:border-[#10A5B5] focus:bg-white transition-all text-gray-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-bold text-gray-700 font-sans uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-slate-50 border border-gray-200 rounded-md px-3.5 py-2.5 text-sm font-sans focus:outline-none focus:border-[#10A5B5] focus:bg-white transition-all text-gray-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="organization" className="text-xs font-bold text-gray-700 font-sans uppercase tracking-wider">
                    Institute / Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    id="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="e.g. Sushila Medical College"
                    className="w-full bg-slate-50 border border-gray-200 rounded-md px-3.5 py-2.5 text-sm font-sans focus:outline-none focus:border-[#10A5B5] focus:bg-white transition-all text-gray-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="projectType" className="text-xs font-bold text-gray-700 font-sans uppercase tracking-wider">
                    Enquiry Type
                  </label>
                  <select
                    name="projectType"
                    id="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-gray-200 rounded-md px-3.5 py-2.5 text-sm font-sans focus:outline-none focus:border-[#10A5B5] focus:bg-white transition-all text-gray-800"
                  >
                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="timeline" className="text-xs font-bold text-gray-700 font-sans uppercase tracking-wider">
                    Desired Timeline
                  </label>
                  <select
                    name="timeline"
                    id="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-gray-200 rounded-md px-3.5 py-2.5 text-sm font-sans focus:outline-none focus:border-[#10A5B5] focus:bg-white transition-all text-gray-800"
                  >
                    <option value="Immediately (Within 2 Weeks)">Immediately (Within 2 Weeks)</option>
                    <option value="Within 1 Month">Within 1 Month</option>
                    <option value="1 to 2 Months">1 to 2 Months</option>
                    <option value="Flexible Schedule">Flexible Schedule</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-gray-700 font-sans uppercase tracking-wider">
                  What You Need <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="e.g. We are an autonomous college preparing for NAAC Binary and need NEP credit mapping, fee reconciliation, and ABC push."
                  className="w-full bg-slate-50 border border-gray-200 rounded-md px-3.5 py-2.5 text-sm font-sans focus:outline-none focus:border-[#10A5B5] focus:bg-white transition-all text-gray-800 resize-none"
                />
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0F2D54] hover:bg-[#143e74] disabled:bg-gray-400 text-white font-sans font-medium py-3.5 px-6 rounded-md shadow hover:shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer text-base"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending enquiry...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-[#10A5B5]" />
                      Send enquiry
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-emerald-50 border border-emerald-200 rounded-md p-4 flex items-start gap-3 text-left"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-display font-bold text-emerald-900 text-sm">Enquiry sent</p>
                        <p className="text-xs text-emerald-700 mt-1 font-sans leading-relaxed">
                          Thank you. We have received your message at {site.email} and will reply with next steps.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start gap-3 text-left"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-red-800 font-sans leading-relaxed">{submitError}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
