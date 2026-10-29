import Link from 'next/link';

type MarketingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: Array<{
    title: string;
    description: string;
    points?: string[];
  }>;
};

export default function MarketingPage({
  eyebrow,
  title,
  description,
  sections,
}: MarketingPageProps) {
  return (
    <main>
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#10A5B5]">
            {eyebrow}
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-bold tracking-tight text-[#0F2D54] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-[#0F2D54] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#143e74]"
          >
            Discuss your project
          </Link>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
        {sections.map((section) => (
          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8" key={section.title}>
            <h2 className="font-display text-xl font-bold text-[#0F2D54]">{section.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{section.description}</p>
            {section.points ? (
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                {section.points.map((point) => (
                  <li className="flex gap-2" key={point}>
                    <span aria-hidden="true" className="font-bold text-[#10A5B5]">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </main>
  );
}
