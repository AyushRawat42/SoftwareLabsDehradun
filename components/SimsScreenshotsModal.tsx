'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';

const simsScreenshots = [
  {
    src: '/images/sims/sims-case-study-hero.png',
    title: 'Modernizing Admissions for Higher Education',
    subtitle: 'Next.js web application and growth engine deployed for Sushila Institute of Medical Sciences (SIMS).',
  },
  {
    src: '/images/sims/sims-stack-performance.png',
    title: 'The Stack & Performance (98/100 PageSpeed)',
    subtitle: 'Engineered with Next.js, Tailwind CSS, GA4/GTM conversion tracking, and high-performance technical SEO.',
  },
  {
    src: '/images/sims/sims-conversion-ui.png',
    title: 'Conversion-Focused UI/UX Pathways',
    subtitle: 'Interactive nursing & paramedical course grids with instant 30-second quick-apply inquiry modals.',
  },
  {
    src: '/images/sims/sims-mobile-dropoff-challenge.png',
    title: 'The Challenge: Overcoming Mobile Drop-Off',
    subtitle: 'Eliminated bloated layout clutter and friction-heavy PDF forms to retain 50%+ more mobile student traffic.',
  },
  {
    src: '/images/sims/sims-admissions-engine-cta.png',
    title: '24/7 Digital Admissions Engine',
    subtitle: 'Transforming institutional websites into continuous, high-converting prospective student pipelines.',
  },
];

export default function SimsScreenshotsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index = 0) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const next = () => setCurrentIndex((prev) => (prev + 1) % simsScreenshots.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + simsScreenshots.length) % simsScreenshots.length);

  return (
    <>
      <button
        type="button"
        onClick={() => openModal(0)}
        className="inline-flex items-center gap-1.5 rounded-md border border-[#0F2D54]/30 bg-[#0F2D54]/10 px-2.5 py-1 text-xs font-semibold text-[#0F2D54] transition-colors hover:bg-[#0F2D54]/20 cursor-pointer"
        aria-label="View SIMS College case study screenshots"
      >
        <Eye className="size-3.5" />
        <span>Case Study Tour</span>
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-xs"
          onClick={closeModal}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col rounded-xl bg-white p-4 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#10A5B5]">
                  SIMS College Case Study ({currentIndex + 1} of {simsScreenshots.length})
                </span>
                <h3 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                  {simsScreenshots[currentIndex].title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Image Stage */}
            <div className="relative my-3 flex h-[320px] w-full items-center justify-center overflow-hidden rounded-lg bg-slate-50 sm:h-[400px]">
              <Image
                src={simsScreenshots[currentIndex].src}
                alt={simsScreenshots[currentIndex].title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain p-2"
              />

              <button
                type="button"
                onClick={prev}
                className="absolute left-2 rounded-full bg-white/90 p-2 text-slate-700 shadow-md transition-colors hover:bg-white"
                aria-label="Previous slide"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-2 rounded-full bg-white/90 p-2 text-slate-700 shadow-md transition-colors hover:bg-white"
                aria-label="Next slide"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>

            {/* Description & Thumbnail Selector */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-600 sm:text-sm">
                {simsScreenshots[currentIndex].subtitle}
              </p>
              <div className="flex gap-2">
                {simsScreenshots.map((item, idx) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`size-2.5 rounded-full transition-all ${idx === currentIndex ? 'w-6 bg-[#0F2D54]' : 'bg-slate-300 hover:bg-slate-400'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
