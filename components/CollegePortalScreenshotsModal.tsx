'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';

const collegeScreenshots = [
  {
    src: '/images/college-portal/higher-ed-architecture.png',
    title: 'Higher Ed vs. K-12 Needs Architecture',
    subtitle: 'Tailored institutional workflows separating course-focused university portals and NEP credit mobility from K-12 needs.',
  },
  {
    src: '/images/college-portal/college-conversion-ui.png',
    title: 'Interactive Degree & Course Grids',
    subtitle: 'Searchable department course grids with 30-second quick-apply inquiry modals for prospective students.',
  },
  {
    src: '/images/college-portal/college-portal-stack.png',
    title: 'The Stack & Performance (98/100 PageSpeed)',
    subtitle: 'Modern Next.js and Tailwind CSS foundation with GA4/GTM conversion tracking and sub-second load times.',
  },
  {
    src: '/images/college-portal/college-registration-flow.png',
    title: 'Frictionless Mobile Registration',
    subtitle: 'Mobile-first student inquiry forms connected directly to institutional counseling desks and GTM event feeds.',
  },
  {
    src: '/images/college-portal/college-program-pathways.png',
    title: 'Program & Campus Pathways',
    subtitle: 'Clear multi-track curriculum displays, faculty listings, and campus lab/hostel facility showcases.',
  },
];

export default function CollegePortalScreenshotsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index = 0) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const next = () => setCurrentIndex((prev) => (prev + 1) % collegeScreenshots.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + collegeScreenshots.length) % collegeScreenshots.length);

  return (
    <>
      <button
        type="button"
        onClick={() => openModal(0)}
        className="inline-flex items-center gap-1.5 rounded-md border border-[#0F2D54]/30 bg-[#0F2D54]/10 px-2.5 py-1 text-xs font-semibold text-[#0F2D54] transition-colors hover:bg-[#0F2D54]/20 cursor-pointer"
        aria-label="View College Portal screenshots and architecture"
      >
        <Eye className="size-3.5" />
        <span>Portal Tour</span>
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
                  College &amp; University Portal ({currentIndex + 1} of {collegeScreenshots.length})
                </span>
                <h3 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                  {collegeScreenshots[currentIndex].title}
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
                src={collegeScreenshots[currentIndex].src}
                alt={collegeScreenshots[currentIndex].title}
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
                {collegeScreenshots[currentIndex].subtitle}
              </p>
              <div className="flex gap-2">
                {collegeScreenshots.map((item, idx) => (
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
