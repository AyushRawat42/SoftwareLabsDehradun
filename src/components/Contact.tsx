/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Database, 
  X, 
  Trash2, 
  Download, 
  Filter 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Inquiry } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    projectType: 'Business Website',
    timeline: 'Within 1 Month',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [showManager, setShowManager] = useState(false);
  const [managerPassword, setManagerPassword] = useState('');
  const [isPasswordVerified, setIsPasswordVerified] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'new' | 'contacted'>('all');

  // Load submissions from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('rawat_labs_inquiries');
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse inquiries', e);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate reliable API post
    setTimeout(() => {
      const newInquiry: Inquiry = {
        id: `inq_${Date.now()}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        organization: formData.organization || 'Not provided',
        projectType: formData.projectType,
        timeline: formData.timeline,
        message: formData.message,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        status: 'new'
      };

      const updated = [newInquiry, ...inquiries];
      setInquiries(updated);
      localStorage.setItem('rawat_labs_inquiries', JSON.stringify(updated));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        projectType: 'Business Website',
        timeline: 'Within 1 Month',
        message: ''
      });

      // Clear success toast after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const handleVerifyPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple verification for the workspace demo: 'rawatlabs2026' or 'admin'
    if (managerPassword === 'rawatlabs' || managerPassword === 'admin') {
      setIsPasswordVerified(true);
      setPasswordError('');
    } else {
      setPasswordError('Invalid password. Try "admin" to inspect leads.');
    }
  };

  const handleUpdateStatus = (id: string, status: 'new' | 'contacted' | 'archived') => {
    const updated = inquiries.map(inq => {
      if (inq.id === id) {
        return { ...inq, status };
      }
      return inq;
    });
    setInquiries(updated);
    localStorage.setItem('rawat_labs_inquiries', JSON.stringify(updated));
  };

  const handleDeleteInquiry = (id: string) => {
    if (confirm('Are you sure you want to delete this submission record?')) {
      const updated = inquiries.filter(inq => inq.id !== id);
      setInquiries(updated);
      localStorage.setItem('rawat_labs_inquiries', JSON.stringify(updated));
    }
  };

  const exportToCSV = () => {
    if (inquiries.length === 0) return;
    
    const headers = ['ID', 'Date (IST)', 'Name', 'Email', 'Phone', 'Organization', 'Project Type', 'Timeline', 'Status', 'Message'];
    const rows = inquiries.map(inq => [
      inq.id,
      inq.timestamp,
      `"${inq.name.replace(/"/g, '""')}"`,
      inq.email,
      inq.phone,
      `"${inq.organization.replace(/"/g, '""')}"`,
      inq.projectType,
      inq.timeline,
      inq.status,
      `"${inq.message.replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Software_Labs_Dehradun_Leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredInquiries = inquiries.filter(inq => {
    if (activeFilter === 'all') return inq.status !== 'archived';
    return inq.status === activeFilter;
  });

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#10A5B5] uppercase block" id="contact-section-tag">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 tracking-tight" id="contact-headline">
            Let’s Build Something Useful
          </h2>
          <p className="text-lg text-gray-600 font-sans leading-relaxed" id="contact-subheadline">
            Need a website, portal, dashboard, or custom software system? Share your requirement and we’ll suggest the right solution for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-grid">
          
          {/* Left Column: Direct Communication Shortcuts */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 leading-tight">
                Connect Directly
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                Prefer immediate contact? Skip the form and call, email, or message us directly on WhatsApp. We typically reply within 2 hours during normal business hours.
              </p>
            </div>

            {/* High-Contrast Action Buttons */}
            <div className="space-y-4" id="direct-contact-shortcuts">
              
              {/* WhatsApp Shortcut */}
              <a
                href="https://wa.me/919999999999" // Mock professional whatsapp node
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="flex items-center gap-4 bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                id="contact-whatsapp"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-emerald-600">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-wider">Quick Response</span>
                  <p className="font-display font-bold text-gray-900 leading-none text-base">Chat on WhatsApp</p>
                  <p className="text-xs font-sans text-gray-500 leading-snug mt-1">+91 99999 99999</p>
                </div>
              </a>

              {/* Direct Call Shortcut */}
              <a
                href="tel:+919999999999"
                className="flex items-center gap-4 bg-white hover:bg-[#0F2D54]/5 border border-gray-200 hover:border-[#0F2D54]/20 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                id="contact-phone"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-[#0F2D54]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-[#0F2D54] font-bold uppercase tracking-wider">Call Our Studio</span>
                  <p className="font-display font-bold text-gray-900 leading-none text-base">Direct Phone Line</p>
                  <p className="text-xs font-sans text-gray-500 leading-snug mt-1">+91 99999 99999</p>
                </div>
              </a>

              {/* Email Shortcut */}
              <a
                href="mailto:ayushrawat42@gmail.com"
                className="flex items-center gap-4 bg-white hover:bg-[#10A5B5]/5 border border-gray-200 hover:border-[#10A5B5]/20 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                id="contact-email"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-[#10A5B5]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-[#10A5B5] font-bold uppercase tracking-wider">Official Email</span>
                  <p className="font-display font-bold text-gray-900 leading-none text-base">ayushrawat42@gmail.com</p>
                  <p className="text-xs font-sans text-gray-500 leading-snug mt-1">Send your project briefs directly</p>
                </div>
              </a>

            </div>

            {/* Hidden DB Lead panel toggle for developer test / audit */}
            <div className="pt-6 border-t border-gray-200 flex items-center justify-between text-gray-400 text-xs font-sans">
              <span>Based in Dehradun, Uttarakhand</span>
              <button 
                onClick={() => setShowManager(true)}
                className="flex items-center gap-1.5 text-gray-400 hover:text-[#10A5B5] font-medium transition-colors border border-dashed border-gray-200 rounded px-2.5 py-1"
                id="leads-dashboard-trigger"
                title="Open local lead dashboard (Password: admin)"
              >
                <Database className="w-3.5 h-3.5" />
                Leads Dashboard ({inquiries.length})
              </button>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-10 text-left" id="contact-form-card">
            
            <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 leading-tight mb-2">
              Share Your Project Details
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-sans leading-relaxed mb-8">
              Fill out this quick briefing sheet and we’ll outline an architecture proposal and project price estimate for you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5" id="project-brief-form">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-gray-700 font-sans uppercase tracking-wider">Your Name <span className="text-red-500">*</span></label>
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

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-gray-700 font-sans uppercase tracking-wider">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. contact@yourclinic.com"
                    className="w-full bg-slate-50 border border-gray-200 rounded-md px-3.5 py-2.5 text-sm font-sans focus:outline-none focus:border-[#10A5B5] focus:bg-white transition-all text-gray-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-bold text-gray-700 font-sans uppercase tracking-wider">Phone Number</label>
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

                {/* Organization */}
                <div className="space-y-1.5">
                  <label htmlFor="organization" className="text-xs font-bold text-gray-700 font-sans uppercase tracking-wider">Business / Academy Name</label>
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
                {/* Project Type */}
                <div className="space-y-1.5">
                  <label htmlFor="projectType" className="text-xs font-bold text-gray-700 font-sans uppercase tracking-wider">System Type</label>
                  <select
                    name="projectType"
                    id="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-gray-200 rounded-md px-3.5 py-2.5 text-sm font-sans focus:outline-none focus:border-[#10A5B5] focus:bg-white transition-all text-gray-800"
                  >
                    <option value="Business Website">Business Website</option>
                    <option value="Admissions and Enquiry System">Admissions & Enquiry System</option>
                    <option value="Admin Dashboard">Admin Dashboard</option>
                    <option value="ERP-Style Portal">ERP-Style Portal</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Other Custom Software">Other Custom Software</option>
                  </select>
                </div>

                {/* Timeline */}
                <div className="space-y-1.5">
                  <label htmlFor="timeline" className="text-xs font-bold text-gray-700 font-sans uppercase tracking-wider">Desired Timeline</label>
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

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-gray-700 font-sans uppercase tracking-wider">Your Project Goals <span className="text-red-500">*</span></label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe what you want to achieve (e.g. We want a clean medical college website where prospective nursing students can read about our courses and download an admission enquiry form)."
                  className="w-full bg-slate-50 border border-gray-200 rounded-md px-3.5 py-2.5 text-sm font-sans focus:outline-none focus:border-[#10A5B5] focus:bg-white transition-all text-gray-800 resize-none"
                />
              </div>

              {/* Submit Buttons and Success Toast notifications */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0F2D54] hover:bg-[#143e74] disabled:bg-gray-400 text-white font-sans font-medium py-3.5 px-6 rounded-md shadow hover:shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer text-base"
                  id="form-submit-button"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing Requirements...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-[#10A5B5]" />
                      Submit Secure Inquiry
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-emerald-50 border border-emerald-200 rounded-md p-4 flex items-start gap-3 mt-4 text-left"
                      id="submit-success-toast"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-display font-bold text-emerald-900 text-sm">Brief Submitted Successfully!</p>
                        <p className="text-xs text-emerald-700 mt-1 font-sans leading-relaxed">
                          Thank you. Your inquiry has been logged in our system. A senior architect from Software Labs Dehradun will review your briefing and contact you via email or phone within 2-4 hours.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </form>
          </div>

        </div>
      </div>

      {/* --- Leads Manager Modal Overlay --- */}
      <AnimatePresence>
        {showManager && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
            id="leads-manager-modal"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-4xl rounded-xl shadow-2xl border border-gray-100 flex flex-col max-h-[90vh] overflow-hidden"
              id="leads-manager-content"
            >
              
              {/* Header */}
              <div className="bg-[#0F2D54] text-white p-5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Database className="w-5 h-5 text-[#10A5B5]" />
                  <div>
                    <h3 className="font-display font-bold text-lg leading-tight">Leads Dashboard</h3>
                    <p className="text-[11px] text-gray-300 font-sans mt-0.5">Manage and track form submissions securely (local storage)</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    setShowManager(false);
                    setIsPasswordVerified(false);
                    setManagerPassword('');
                    setPasswordError('');
                  }}
                  className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  id="leads-manager-close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Password Protection Stage */}
              {!isPasswordVerified ? (
                <div className="p-8 space-y-6 text-center max-w-sm mx-auto">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-[#0F2D54]">
                    <Database className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-display font-bold text-gray-800 text-base">Enter Password</h4>
                    <p className="text-xs text-gray-500 font-sans">Enter studio password to view and manage inquiries.</p>
                  </div>
                  <form onSubmit={handleVerifyPassword} className="space-y-4">
                    <input
                      type="password"
                      required
                      placeholder="Hint: admin"
                      value={managerPassword}
                      onChange={(e) => setManagerPassword(e.target.value)}
                      className="w-full bg-slate-50 border border-gray-200 rounded-md px-3.5 py-2.5 text-center text-sm font-sans focus:outline-none focus:border-[#10A5B5] focus:bg-white transition-all text-gray-800"
                    />
                    {passwordError && (
                      <p className="text-xs text-red-500 font-sans font-medium">{passwordError}</p>
                    )}
                    <button
                      type="submit"
                      className="w-full bg-[#0F2D54] text-white font-sans font-medium text-sm py-2.5 rounded-md shadow cursor-pointer"
                    >
                      Verify Password
                    </button>
                  </form>
                </div>
              ) : (
                /* Verified Dashboard content */
                <div className="flex-1 flex flex-col overflow-hidden">
                  
                  {/* Action Filters Bar */}
                  <div className="bg-slate-50 border-b border-gray-100 p-4 flex flex-col sm:flex-row gap-4 sm:items-center justify-between text-left">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveFilter('all')}
                        className={`text-xs font-sans font-medium px-3 py-1.5 rounded-md transition-colors cursor-pointer ${activeFilter === 'all' ? 'bg-[#0F2D54] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}
                      >
                        All Leads ({inquiries.filter(i => i.status !== 'archived').length})
                      </button>
                      <button
                        onClick={() => setActiveFilter('new')}
                        className={`text-xs font-sans font-medium px-3 py-1.5 rounded-md transition-colors cursor-pointer ${activeFilter === 'new' ? 'bg-amber-500 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}
                      >
                        New Leads ({inquiries.filter(i => i.status === 'new').length})
                      </button>
                      <button
                        onClick={() => setActiveFilter('contacted')}
                        className={`text-xs font-sans font-medium px-3 py-1.5 rounded-md transition-colors cursor-pointer ${activeFilter === 'contacted' ? 'bg-green-600 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}
                      >
                        Contacted ({inquiries.filter(i => i.status === 'contacted').length})
                      </button>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={exportToCSV}
                        disabled={inquiries.length === 0}
                        className="text-xs bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 font-sans font-medium px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
                        id="export-csv-btn"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Export CSV
                      </button>
                    </div>
                  </div>

                  {/* List of submissions */}
                  <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                    {filteredInquiries.length === 0 ? (
                      <div className="text-center py-12 text-gray-400 font-sans text-sm">
                        No submissions logged matching the current view.
                      </div>
                    ) : (
                      filteredInquiries.map((inq) => (
                        <div 
                          key={inq.id}
                          className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm text-left relative hover:border-gray-200 transition-colors"
                          id={`lead-card-${inq.id}`}
                        >
                          {/* Top row */}
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3 border-b border-gray-50 pb-2">
                            <div>
                              <span className="text-[10px] text-gray-400 font-mono font-bold uppercase tracking-wider pr-2">{inq.id}</span>
                              <span className="text-[10px] text-[#10A5B5] font-mono font-bold uppercase bg-[#10A5B5]/10 px-2 py-0.5 rounded-sm">{inq.projectType}</span>
                            </div>
                            <span className="text-[10px] text-gray-400 font-sans">{inq.timestamp}</span>
                          </div>

                          {/* Body details */}
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            <div className="md:col-span-4 space-y-2 text-xs font-sans">
                              <p className="text-gray-800 font-semibold"><span className="text-gray-400 font-normal">Client:</span> {inq.name}</p>
                              <p className="text-gray-800"><span className="text-gray-400">Email:</span> <a href={`mailto:${inq.email}`} className="underline text-blue-600">{inq.email}</a></p>
                              <p className="text-gray-800"><span className="text-gray-400">Phone:</span> {inq.phone}</p>
                              <p className="text-gray-800"><span className="text-gray-400">Org:</span> {inq.organization}</p>
                              <p className="text-gray-800"><span className="text-gray-400">Timeline:</span> <span className="bg-slate-100 text-slate-800 px-1 rounded-sm">{inq.timeline}</span></p>
                            </div>
                            
                            <div className="md:col-span-8 bg-slate-50 p-3.5 rounded border border-slate-100/50 text-xs font-sans text-gray-700 whitespace-pre-wrap leading-relaxed">
                              <p className="text-[9px] font-mono text-gray-400 font-bold uppercase mb-1">Project Goals</p>
                              {inq.message}
                            </div>
                          </div>

                          {/* Status and Action bar */}
                          <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-50">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] text-gray-400 font-bold uppercase">Status:</span>
                              <select
                                value={inq.status}
                                onChange={(e) => handleUpdateStatus(inq.id, e.target.value as any)}
                                className={`text-[10px] font-bold uppercase border-0 rounded px-2.5 py-1 focus:ring-1 focus:ring-offset-1 focus:ring-slate-300 font-sans cursor-pointer ${
                                  inq.status === 'new' 
                                    ? 'bg-amber-100 text-amber-800' 
                                    : 'bg-green-100 text-green-800'
                                }`}
                              >
                                <option value="new">New / Uncontacted</option>
                                <option value="contacted">Contacted / Working</option>
                                <option value="archived">Archive / Hide</option>
                              </select>
                            </div>
                            
                            <button
                              onClick={() => handleDeleteInquiry(inq.id)}
                              className="text-gray-400 hover:text-red-500 p-1 rounded hover:bg-red-50 transition-colors cursor-pointer"
                              title="Delete Submission Record"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                        </div>
                      ))
                    )}
                  </div>

                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
