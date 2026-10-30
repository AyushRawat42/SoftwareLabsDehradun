import Link from 'next/link';
import { ArrowRight, BookOpen, MessageSquare, Phone } from 'lucide-react';
import PageContainer from '@/components/PageContainer';
import { BreadcrumbJsonLd, JsonLd } from '@/components/JsonLd';
import { createMetadata, SITE_NAME, SITE_URL } from '@/lib/seo-config';
import { BLOG_POSTS } from '@/lib/blog-posts';

export const metadata = createMetadata('/blog');

export default function BlogPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog & Insights', path: '/blog' },
  ];

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Insights on Web Development, ERP, SEO & Lead Generation',
    description:
      'Practical guides for institutional and business leaders on Next.js websites, education and healthcare marketing, analytics and custom software.',
    url: `${SITE_URL}/blog`,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <>
      <JsonLd data={blogSchema} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <PageContainer>
        {/* Header Section */}
        <section className="text-left">
          <nav aria-label="Breadcrumbs" className="mb-2 flex items-center gap-1.5 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#10A5B5]">Home</Link>
            <span>/</span>
            <span className="font-semibold text-[#0F2D54]">Blog</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#10A5B5]/30 bg-[#10A5B5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0d8592]">
            Engineering &amp; Growth Insights
          </div>
          <h1 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#0F2D54] sm:text-4xl lg:text-5xl">
            Insights on Web, ERP &amp; Digital Growth
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Practical guides for institutional and business leaders on Next.js websites, education marketing, GA4 analytics, and custom software.
          </p>
        </section>

        {/* 3-Card Grid */}
        <section
          aria-label="Recent Articles"
          className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#10A5B5]/60 hover:shadow-md sm:p-5"
            >
              <div>
                <time className="text-xs text-slate-500" dateTime={post.publishedAt}>
                  {new Date(`${post.publishedAt}T12:00:00Z`).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    timeZone: 'UTC',
                  })}
                </time>
                <h2 className="mt-2 font-display text-base font-bold text-[#0F2D54] group-hover:text-[#10A5B5] sm:text-lg">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm line-clamp-3">
                  {post.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F2D54] group-hover:text-[#10A5B5]"
                >
                  Read article <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* Action Banner */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-base font-bold text-[#0F2D54] sm:text-lg">
                Have questions or need technical guidance?
              </p>
              <p className="text-xs text-slate-600 sm:text-sm">
                Discuss implementation details or request an audit for your platform.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#0F2D54] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#143e74] sm:text-sm"
              >
                Contact Engineers <ArrowRight className="ml-1.5 size-3.5" />
              </Link>
              <a
                href="https://wa.me/919870871386?text=Hello%20The%20Software%20Lab,%20I%20have%20a%20question%20about%20your%20insights."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-[#0F2D54] transition-colors hover:bg-slate-100 sm:text-sm"
              >
                <MessageSquare className="size-3.5 text-[#25D366]" />
                WhatsApp
              </a>
              <a
                href="tel:+919870871386"
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-[#0F2D54] sm:text-sm ml-1"
              >
                <Phone className="size-3.5 text-[#10A5B5]" />
                +91 98708 71386
              </a>
            </div>
          </div>
        </section>
      </PageContainer>
    </>
  );
}
