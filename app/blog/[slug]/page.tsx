import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createArticleMetadata, SITE_URL } from '@/lib/seo-config';
import { BLOG_POSTS } from '@/lib/blog-posts';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    return { title: 'Article not found' };
  }

  return createArticleMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const publishedDate = new Date(`${post.publishedAt}T12:00:00Z`).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <article>
        <Link className="text-sm font-semibold text-[#0F2D54] hover:text-[#10A5B5]" href="/blog">
          ← All articles
        </Link>
        <header className="mt-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#10A5B5]">Insights &amp; guides</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[#0F2D54] sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{post.description}</p>
          <time className="mt-4 block text-sm text-slate-500" dateTime={post.publishedAt}>
            {publishedDate}
          </time>
        </header>
        <div className="mt-10 space-y-8">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl font-bold text-[#0F2D54]">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p className="mt-3 leading-8 text-slate-600" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
      <aside className="mt-12 rounded-xl bg-slate-50 p-6">
        <h2 className="font-display text-xl font-bold text-[#0F2D54]">Have a project in mind?</h2>
        <p className="mt-2 leading-7 text-slate-600">
          Talk to The Software Lab about your website, software or digital growth goals.
        </p>
        <Link className="mt-4 inline-flex font-semibold text-[#0F2D54] hover:text-[#10A5B5]" href="/contact">
          Contact our team <span aria-hidden="true" className="ml-1">→</span>
        </Link>
      </aside>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            datePublished: post.publishedAt,
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
            publisher: { '@type': 'Organization', name: 'The Software Lab', url: SITE_URL },
          }).replace(/</g, '\\u003c'),
        }}
      />
    </main>
  );
}
