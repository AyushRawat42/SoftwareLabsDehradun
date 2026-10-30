'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';

const screenshots = [
  {
    src: '/images/parent-portal/daily-engagement-mobile.webp',
    width: 798,
    height: 621,
    title: 'Daily Engagement & Operations',
    subtitle: 'Daily attendance tracking, homework attachments, and school circulars replacing noisy WhatsApp groups.',
  },
  {
    src: '/images/parent-portal/fees-report-cards.webp',
    width: 791,
    height: 566,
    title: 'Fees & Report Cards Simplified',
    subtitle: 'Automated term fee ledgers, transport fee tracking, and downloadable PDF academic report cards.',
  },
  {
    src: '/images/parent-portal/school-portal-hero.webp',
    width: 733,
    height: 652,
    title: 'Beyond WhatsApp Groups',
    subtitle: 'A unified mobile-first ecosystem purpose-built for K-12 schools, teachers, and parents.',
  },
  {
    src: '/images/parent-portal/higher-ed-vs-k12.webp',
    width: 796,
    height: 599,
    title: 'Higher Ed vs. K-12 Needs Architecture',
    subtitle: 'Tailored institutional workflows separating parent-first K-12 needs from self-directed higher education.',
  },
];

export default function PortalScreenshotsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index = 0) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const next = () => setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <>
      <button
        type="button"
        onClick={() => openModal(0)}
        className="inline-flex items-center gap-1.5 rounded-md border border-[#10A5B5]/40 bg-[#10A5B5]/10 px-2.5 py-1 text-xs font-semibold text-[#0d8592] transition-colors hover:bg-[#10A5B5]/20 cursor-pointer"
        aria-label="View parent student portal screenshots"
      >
        <Eye className="size-3.5" />
        <span>View Screenshots</span>
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
                  Platform Screenshot ({currentIndex + 1} of {screenshots.length})
                </span>
                <h3 className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                  {screenshots[currentIndex].title}
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
                src={screenshots[currentIndex].src}
                alt={screenshots[currentIndex].title}
                width={screenshots[currentIndex].width}
                height={screenshots[currentIndex].height}
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-full w-full object-contain p-2"
              />

              <button
                type="button"
                onClick={prev}
                className="absolute left-2 rounded-full bg-white/90 p-2 text-slate-700 shadow-md transition-colors hover:bg-white"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-2 rounded-full bg-white/90 p-2 text-slate-700 shadow-md transition-colors hover:bg-white"
                aria-label="Next screenshot"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>

            {/* Description & Thumbnail Selector */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-600 sm:text-sm">
                {screenshots[currentIndex].subtitle}
              </p>
              <div className="flex gap-2">
                {screenshots.map((item, idx) => (
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
