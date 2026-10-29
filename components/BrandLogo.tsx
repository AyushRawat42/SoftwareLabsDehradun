type BrandLogoProps = {
  tone?: 'light' | 'dark';
  subtitle?: string;
};

export default function BrandLogo({
  tone = 'light',
  subtitle = 'Dehradun · India',
}: BrandLogoProps) {
  const textColor = tone === 'dark' ? 'text-white' : 'text-[#0F2D54]';
  const subtitleColor = tone === 'dark' ? 'text-slate-400' : 'text-[#10A5B5]';

  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        aria-hidden="true"
        className="size-10 shrink-0"
        fill="none"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="12" fill="#0F2D54" />
        <path
          d="M32 13H21.5a7.5 7.5 0 0 0 0 15h5a7.5 7.5 0 0 1 0 15H16"
          stroke="#E2E8F0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          transform="translate(0 -4)"
        />
        <path d="M16 39h8" stroke="#10A5B5" strokeLinecap="round" strokeWidth="4" />
      </svg>
      <span className="leading-tight">
        <span className={`block font-display text-base font-bold tracking-tight sm:text-lg ${textColor}`}>
          The Software Lab
        </span>
        {subtitle ? (
          <span className={`mt-0.5 block text-[10px] font-bold uppercase tracking-[0.16em] ${subtitleColor}`}>
            {subtitle}
          </span>
        ) : null}
      </span>
    </span>
  );
}
