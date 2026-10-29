import type { MetadataRoute } from 'next';
import { BLOG_SLUGS, ROUTE_PATHS, SITE_URL } from '@/lib/seo-config';

const routePriorities: Record<string, number> = {
  '/': 1,
  '/services/web-development': 0.9,
  '/services/custom-software-erp': 0.9,
  '/services/seo-digital-marketing': 0.9,
  '/services/web-analytics-tracking': 0.85,
  '/industries/education-healthcare': 0.9,
  '/work': 0.8,
  '/about': 0.7,
  '/contact': 0.9,
  '/blog': 0.7,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ROUTE_PATHS.map((path) => ({
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    changeFrequency: path === '/blog' || path === '/work' ? 'weekly' as const : 'monthly' as const,
    priority: routePriorities[path] ?? 0.7,
  }));
  const articles = BLOG_SLUGS.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));

  return [...staticRoutes, ...articles];
}
