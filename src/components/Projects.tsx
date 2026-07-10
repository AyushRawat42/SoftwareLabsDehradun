/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ExternalLink, Check, Sparkles, BookOpen, Trophy, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../types';

export default function Projects() {
  const projects: Project[] = [
    {
      id: 'aspire-academy',
      title: 'Aspire Academy',
      link: 'https://www.theaspireacademy.in/',
      tag: 'Academy & Admissions Portal',
      clientType: 'Educational Institute',
      accentColor: '#10A5B5', // teal
      description: 'A live site for Aspire Academy focused on sports coaching, defence preparation, and admissions support. The site presents programs clearly and includes admissions-focused flows and lead capture for prospective students.',
      features: [
        'Admissions-focused landing pages',
        'Structured sport & defence curriculum layout',
        'Instant WhatsApp lead generation routing',
        'High-speed photo gallery for student achievements'
      ]
    },
    {
      id: 'sims-college',
      title: 'SIMS College',
      link: 'https://sims.college/',
      tag: 'Institutional Website',
      clientType: 'Medical & Paramedical College',
      accentColor: '#0F2D54', // deep navy
      description: 'A live website for Sushila Institute of Medical Sciences (SIMS) in Dehradun, presenting the institute as a nursing and paramedical college. The site is positioned around institutional credibility, healthcare education, and student-facing information.',
      features: [
        'Comprehensive course catalogs & fee grids',
        'Institutional accreditation banners',
        'Enquiry tracking portal for admin staff',
        'Responsive calendar for academic announcements'
      ]
    },
    {
      id: 'sticky-cards',
      title: 'Sticky Cards',
      link: 'https://stickycards.co/',
      tag: 'SaaS Platform & Digital Wallet',
      clientType: 'International Loyalty Platform',
      accentColor: '#4F46E5', // indigo
      description: 'A client project for a Canada-based platform focused on digital wallet loyalty programs. The site positions Sticky Cards around loyalty, repeat customers, and Apple Wallet and Google Wallet-based engagement.',
      features: [
        'Dynamic Apple/Google Wallet pass generator mockups',
        'Conversion-optimized pricing & feature structure',
        'Automated merchant signup forms',
        'Highly interactive, sleek modern visual layout'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#10A5B5] uppercase block" id="projects-section-tag">
            Recent Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 tracking-tight" id="projects-headline">
            Recent Projects
          </h2>
          <p className="text-lg text-gray-600 font-sans leading-relaxed" id="projects-subheadline">
            A few recent projects that show the kind of websites and software systems we build for businesses and institutions.
          </p>
        </div>

        {/* Projects Display Column */}
        <div className="space-y-20" id="projects-list">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center`}
                id={`project-item-${project.id}`}
              >
                {/* Visual Mockup Card Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="relative group bg-white rounded-xl border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                    id={`project-mockup-${project.id}`}
                  >
                    
                    {/* Fake Browser Title Bar */}
                    <div className="bg-slate-100/80 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-400" />
                        <span className="w-3 h-3 rounded-full bg-yellow-400" />
                        <span className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="bg-white border border-gray-200 text-[11px] font-mono text-gray-400 rounded px-6 py-0.5 truncate max-w-[200px] sm:max-w-xs select-none">
                        {project.link.replace('https://', '')}
                      </div>
                      <div className="w-12" /> {/* alignment spacer */}
                    </div>

                    {/* Interactive Custom Styled CSS Mockup representation */}
                    <div className="p-6 sm:p-8 bg-slate-50 min-h-[280px] sm:min-h-[340px] flex items-center justify-center relative select-none">
                      
                      {/* Interactive hover scale backdrop overlay */}
                      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,rgba(16,165,181,0.02),transparent_70%)" />

                      {/* Project 1 SPECIFIC MOCKUP */}
                      {project.id === 'aspire-academy' && (
                        <div className="w-full max-w-[400px] bg-[#0E1E38] text-white rounded-lg shadow-lg border border-slate-800 overflow-hidden text-left" id="mockup-aspire">
                          <div className="bg-amber-500 text-slate-950 font-display font-bold text-[10px] tracking-widest uppercase px-3 py-1 flex items-center gap-1.5">
                            <Trophy className="w-3 h-3" />
                            Aspire Defence Academy
                          </div>
                          <div className="p-4 space-y-3">
                            <h4 className="font-display font-bold text-sm leading-tight">NDA & Army Prep Courses 2026</h4>
                            <p className="text-[10px] text-slate-400 font-sans leading-relaxed">Integrated Physical Training & Written Guidance under Retd. Officers.</p>
                            
                            <div className="grid grid-cols-2 gap-2 pt-1">
                              <div className="bg-slate-900 border border-slate-800 p-2 rounded">
                                <p className="text-[8px] text-amber-500 font-bold uppercase">Defence batches</p>
                                <p className="text-xs font-bold font-sans mt-0.5">NDA & CDS</p>
                              </div>
                              <div className="bg-slate-900 border border-slate-800 p-2 rounded">
                                <p className="text-[8px] text-amber-500 font-bold uppercase">Sports facility</p>
                                <p className="text-xs font-bold font-sans mt-0.5">Top Turf Coaching</p>
                              </div>
                            </div>

                            <div className="pt-2">
                              <div className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-center py-1.5 rounded font-sans text-xs font-bold">
                                Download Academy Prospectus
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Project 2 SPECIFIC MOCKUP */}
                      {project.id === 'sims-college' && (
                        <div className="w-full max-w-[400px] bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden text-left" id="mockup-sims">
                          <div className="bg-[#0F2D54] text-white font-sans font-medium text-xs px-4 py-2 flex justify-between items-center">
                            <span>Sushila Medical Institute</span>
                            <span className="text-[9px] bg-teal-500 text-white px-1.5 py-0.5 rounded font-semibold">INC Approved</span>
                          </div>
                          <div className="p-4 space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="p-2 bg-slate-100 rounded text-[#0F2D54]">
                                <BookOpen className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="font-display font-bold text-gray-800 text-sm">B.Sc. Nursing Admissions</h4>
                                <p className="text-[10px] text-gray-500 mt-0.5">Prepare for professional medical careers with top-tier labs.</p>
                              </div>
                            </div>
                            
                            <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs">
                              <span className="font-sans text-gray-400 text-[10px]">Academic Year 2026-27</span>
                              <span className="font-semibold text-[#0F2D54] underline">Verify Accreditation</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Project 3 SPECIFIC MOCKUP */}
                      {project.id === 'sticky-cards' && (
                        <div className="w-full max-w-[340px] bg-slate-900 text-white rounded-xl shadow-lg border border-slate-800 p-5 text-left relative overflow-hidden" id="mockup-sticky">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl" />
                          <div className="flex items-center gap-2.5 mb-4">
                            <CreditCard className="w-5 h-5 text-indigo-400" />
                            <span className="font-display font-bold text-xs tracking-tight text-slate-200">Sticky Cards Mobile Loyalty</span>
                          </div>

                          {/* Simulated Apple Wallet Pass visual */}
                          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg p-3.5 border border-indigo-500 shadow relative">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="text-[7px] text-indigo-200 font-bold uppercase tracking-wider">COFFEE LABS</p>
                                <p className="text-xs font-bold leading-none mt-0.5">Gold Member Club</p>
                              </div>
                              <span className="text-[8px] bg-white/20 text-white px-1 rounded-sm">Wallet Pass</span>
                            </div>

                            <div className="mt-4 flex justify-between items-end">
                              <div>
                                <p className="text-[6px] text-indigo-200 uppercase">Balance</p>
                                <p className="text-sm font-mono font-bold leading-none">8 Free Coffees</p>
                              </div>
                              <div className="w-12 h-6 bg-white/10 rounded flex items-center justify-center border border-white/20">
                                <span className="font-mono text-[7px] text-indigo-100">|||||||||</span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-[9px] text-slate-400 mt-3 text-center leading-relaxed">Canada-based digital loyalty backend engine for SMBs.</p>
                        </div>
                      )}

                    </div>

                    {/* Bottom overlay launcher */}
                    <div className="bg-white border-t border-gray-100 p-4 text-center">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#10A5B5] hover:text-[#0d8592] font-semibold transition-colors group/link"
                      >
                        Launch Live Application
                        <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>

                  </motion.div>
                </div>

                {/* Information Column */}
                <div className={`lg:col-span-6 space-y-6 text-left ${isEven ? 'lg:order-2' : 'lg:order-1'}`} id={`project-info-${project.id}`}>
                  
                  {/* Badges */}
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">
                      {project.clientType}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                    <span className="text-xs font-sans font-semibold text-[#10A5B5] bg-[#10A5B5]/10 px-2.5 py-0.5 rounded-full">
                      {project.tag}
                    </span>
                  </div>

                  {/* Title & Link */}
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 tracking-tight leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-sans leading-relaxed text-base">
                    {project.description}
                  </p>

                  {/* Feature Checkmarks List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug font-sans">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      referrerPolicy="no-referrer"
                      className="bg-white hover:bg-slate-50 text-gray-800 border border-gray-200 font-sans font-medium text-sm px-5 py-3 rounded-md shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
                      id={`project-btn-${project.id}`}
                    >
                      Visit Live Website
                      <ExternalLink className="w-4 h-4 text-gray-500" />
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
