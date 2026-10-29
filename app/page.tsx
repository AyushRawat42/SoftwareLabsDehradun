import { createMetadata } from '@/lib/seo-config';

export const metadata = createMetadata('/');

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-[65vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
      <section className="max-w-3xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#10A5B5]">
          Dehradun · Serving India
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-[#0F2D54] sm:text-6xl">
          Web Development &amp; Custom Software in Dehradun, India
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          The Software Lab builds websites, business software and marketing systems for organizations across India.
        </p>
      </section>
    </main>
  );
}
