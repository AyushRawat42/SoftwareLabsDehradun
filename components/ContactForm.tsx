'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Higher Education ERP Demo',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    try {
      const response = await fetch('https://formsubmit.co/ajax/softwarelabdehradun@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          service: formData.service,
          message: formData.message,
          _subject: `New Inquiry: ${formData.service} (${formData.name})`,
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Higher Education ERP Demo',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs sm:p-5">
      <h2 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
        Send Project Inquiry
      </h2>
      <p className="mt-1 text-xs text-slate-500">
        Fill out this brief form and we will respond within one business day.
      </p>

      {status === 'success' && (
        <div className="mt-3 flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-xs text-emerald-800">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" />
          <span>Thank you! Your message has been sent. We will get back to you shortly.</span>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-3 flex items-start gap-2 rounded-lg border border-rose-200 bg-rose-50 p-3 text-xs text-rose-800">
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-rose-600" />
          <span>Could not submit form. Please reach out via WhatsApp or call us directly.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-3 space-y-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-slate-700">
              Your Name *
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:border-[#10A5B5] focus:outline-hidden"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-700">
              Work Email *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@organization.com"
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:border-[#10A5B5] focus:outline-hidden"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-slate-700">
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:border-[#10A5B5] focus:outline-hidden"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-xs font-semibold text-slate-700">
              Project Interest
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-800 focus:border-[#10A5B5] focus:outline-hidden"
            >
              <option value="Higher Education ERP Demo">Higher Education ERP Demo</option>
              <option value="Custom Website & Web App">Custom Website &amp; Web App</option>
              <option value="Technical SEO & Google Ads">Technical SEO &amp; Google Ads</option>
              <option value="Web Analytics & GA4 Tracking">Web Analytics &amp; GA4 Tracking</option>
              <option value="Free Website & Ads Audit">Free Website &amp; Ads Audit</option>
              <option value="Other Custom Software">Other Custom Software</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-slate-700">
            Project Overview *
          </label>
          <textarea
            id="message"
            required
            rows={2}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your requirements, timeline, or objectives..."
            className="mt-1 w-full rounded-md border border-slate-200 px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:border-[#10A5B5] focus:outline-hidden"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-[#0F2D54] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#143e74] disabled:opacity-50"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="size-3.5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="size-3.5" />
              <span>Submit Inquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
