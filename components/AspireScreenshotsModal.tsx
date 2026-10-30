'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';

const aspireScreenshots = [
  {
    src: '/images/aspire/aspire-case-study-hero.png',
    title: 'Built for Aspirants: Web App + Admissions',
    subtitle: 'High-converting sports coaching & defence academy portal engineered for Aspire Sports & Defence Academy.',
  },
  {
    src: '/images/aspire/aspire-mobile-registration.png',
    title: 'Frictionless Mobile Registration (97/100 PageSpeed)',
    subtitle: '30-second demo class booking, 97/100 mobile speed, and instant lead routing to the counseling desk via GTM/GA4.',
  },
  {
    src: '/images/aspire/aspire-program-batches.png',
    title: 'Program & Batch Architecture',
    subtitle: 'Clear course pathways for NDA written coaching, SSB interview prep, and physical conditioning facilities.',
  },
  {
    src: '/images/aspire/aspire-challenge-mobile.png',
    title: 'The Challenge: Engaging Action-Oriented Users',
    subtitle: 'Replaced static PDF brochures with interactive schedules, ground facility tours, and high-speed mobile UX.',
  },
];

export default function AspireScreenshotsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index = 0) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const next = () => setCurrentIndex((prev) => (prev + 1) % aspireScreenshots.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + aspireScreenshots.length) % aspireScreenshots.length);

  return (
    <>
      <button
        type="button"
        onClick={() => openModal(0)}
        className="inline-flex items-center gap-1.5 rounded-md border border-[#0F2D54]/30 bg-[#0F2D54]/10 px-2.5 py-1 text-xs font-semibold text-[#0F2D54] transition-colors hover:bg-[#0F2D54]/20 cursor-pointer"
        aria-label="View Aspire Academy case study screenshots"
      >
        <Eye className="size-3.5" />
        <span>Case Tour</span>
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
                  Aspire Academy Case Study ({currentIndex + 1} of {aspireScreenshots.length})
                </span>
                <h3 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                  {aspireScreenshots[currentIndex].title}
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
                src={aspireScreenshots[currentIndex].src}
                alt={aspireScreenshots[currentIndex].title}
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
                {aspireScreenshots[currentIndex].subtitle}
              </p>
              <div className="flex gap-2">
                {aspireScreenshots.map((item, idx) => (
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
