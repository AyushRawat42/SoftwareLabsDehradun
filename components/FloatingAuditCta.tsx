import Link from 'next/link';

const whatsappMessage = encodeURIComponent(
  'Hello The Software Lab, I would like to book a free website and ads audit.',
);

export default function FloatingAuditCta() {
  return (
    <aside
      aria-label="Contact The Software Lab"
      className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6"
    >
      <Link
        href="/contact"
        className="rounded-full bg-[#0F2D54] px-4 py-2.5 text-xs font-semibold text-white shadow-lg transition-colors hover:bg-[#143e74] sm:text-sm"
      >
        Book a Free Audit
      </Link>
      <a
        href={`https://wa.me/919870871386?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-[#082c19] shadow-lg transition-colors hover:bg-[#1ebe5a] sm:text-sm"
      >
        WhatsApp Us
      </a>
    </aside>
  );
}
