import Link from 'next/link';
import { createMetadata } from '@/lib/seo-config';
import { BLOG_POSTS } from '@/lib/blog-posts';

export const metadata = createMetadata('/blog');

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#10A5B5]">Insights &amp; guides</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-[#0F2D54] sm:text-5xl">
          Practical ideas for better digital experiences
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Guides on websites, software, search visibility and marketing measurement.
        </p>
      </header>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <article className="flex flex-col rounded-xl border border-slate-200 p-6" key={post.slug}>
            <time className="text-sm text-slate-500" dateTime={post.publishedAt}>
              {new Date(`${post.publishedAt}T12:00:00Z`).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'UTC',
              })}
            </time>
            <h2 className="mt-3 font-display text-xl font-bold leading-snug text-[#0F2D54]">
              <Link className="hover:text-[#10A5B5]" href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 flex-1 leading-7 text-slate-600">{post.description}</p>
            <Link
              className="mt-5 text-sm font-semibold text-[#0F2D54] hover:text-[#10A5B5]"
              href={`/blog/${post.slug}`}
            >
              Read article <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
