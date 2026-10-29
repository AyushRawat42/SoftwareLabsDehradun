import type { Metadata } from 'next';

export const SITE_URL = 'https://thesoftwarelab.in';
export const SITE_NAME = 'The Software Lab';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image`;

type PageSEO = {
  title: string;
  description: string;
  keywords: string[];
};

export const PAGE_SEO = {
  '/': {
    title: 'Web Development, ERP & Digital Growth in Dehradun',
    description:
      'The Software Lab builds high-performance websites, custom ERPs, analytics and SEO strategies for institutions and businesses in Dehradun and across India.',
    keywords: [
      'web development company Dehradun',
      'custom software development India',
      'education ERP India',
      'technical SEO services',
      'The Software Lab',
    ],
  },
  '/services/web-development': {
    title: 'Custom Website & Web App Development in India',
    description:
      'Build fast, accessible corporate websites, institutional portals and web apps with Next.js, React and Tailwind CSS. Based in Dehradun, serving India.',
    keywords: [
      'web development company India',
      'website development Dehradun',
      'Next.js development services',
      'institutional website development',
      'custom web application development',
    ],
  },
  '/services/custom-software-erp': {
    title: 'Custom Software, SaaS & ERP Development in India',
    description:
      'Custom cloud software, higher education ERPs, hotel property systems and multi-tenant SaaS platforms engineered in Dehradun for organizations across India.',
    keywords: [
      'custom software development India',
      'ERP software development',
      'higher education ERP India',
      'SaaS development company',
      'custom ERP Dehradun',
    ],
  },
  '/services/seo-digital-marketing': {
    title: 'Technical SEO & Google Ads Management in Dehradun',
    description:
      'Generate qualified leads with technical SEO, local SEO, Google Ads and Performance Max management from a Dehradun-based growth team serving India.',
    keywords: [
      'SEO services Dehradun',
      'technical SEO India',
      'Google Ads management',
      'local SEO Uttarakhand',
      'lead generation agency India',
    ],
  },
  '/services/web-analytics-tracking': {
    title: 'GA4, GTM & Conversion Tracking Services in India',
    description:
      'Set up reliable GA4, Google Tag Manager, server-side tracking and Meta Conversions API to measure marketing performance and leads.',
    keywords: [
      'Google Analytics 4 setup India',
      'Google Tag Manager services',
      'server-side tracking',
      'Meta Conversions API setup',
      'conversion tracking Dehradun',
    ],
  },
  '/industries/education-healthcare': {
    title: 'Web Portals, Admissions & ERP for Education and Healthcare',
    description:
      'Modern websites, admissions lead generation and campus ERP automation for colleges, universities, medical institutes and hospitals in India.',
    keywords: [
      'college website development India',
      'education ERP software',
      'hospital website development',
      'medical college admissions marketing',
      'education technology Dehradun',
    ],
  },
  '/work': {
    title: 'Web Development, ERP & SEO Case Studies',
    description:
      'Explore selected website, custom software, ERP, SEO and digital advertising projects by The Software Lab in Dehradun and across India.',
    keywords: [
      'web development portfolio India',
      'ERP case studies',
      'SEO case studies India',
      'software development projects',
    ],
  },
  '/about': {
    title: 'About The Software Lab | Dehradun-Based Engineering Team',
    description:
      'Meet The Software Lab, a Dehradun-based software and digital growth team serving institutions and businesses across India and globally.',
    keywords: [
      'software company Dehradun',
      'web development agency Uttarakhand',
      'The Software Lab India',
      'software engineering company India',
    ],
  },
  '/contact': {
    title: 'Request a Proposal or Free Website & Ads Audit',
    description:
      'Talk to The Software Lab about your website, ERP, SEO or ads. Request a proposal or a free website and advertising audit in Dehradun or anywhere in India.',
    keywords: [
      'contact web development company India',
      'free website audit Dehradun',
      'free Google Ads audit',
      'software development proposal',
      'The Software Lab contact',
    ],
  },
  '/blog': {
    title: 'Insights on Web Development, ERP, SEO & Lead Generation',
    description:
      'Practical guides for institutional and business leaders on Next.js websites, education and healthcare marketing, analytics and custom software.',
    keywords: [
      'web development blog India',
      'education marketing insights',
      'technical SEO guides',
      'ERP software insights',
    ],
  },
} as const satisfies Record<string, PageSEO>;

export const BLOG_SLUGS = [
  'nextjs-vs-wordpress-institutional-corporate-websites',
  'double-inquiries-education-healthcare-google-ads-seo',
  'ga4-gtm-conversion-tracking-for-b2b-lead-generation',
] as const;

export const ROUTE_PATHS = [
  '/',
  '/services/web-development',
  '/services/custom-software-erp',
  '/services/seo-digital-marketing',
  '/services/web-analytics-tracking',
  '/industries/education-healthcare',
  '/work',
  '/about',
  '/contact',
  '/blog',
] as const;

export function createMetadata(path: keyof typeof PAGE_SEO): Metadata {
  const page = PAGE_SEO[path];
  const canonical = path === '/' ? SITE_URL : `${SITE_URL}${path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: page.title,
    description: page.description,
    keywords: [...page.keywords],
    alternates: { canonical },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: canonical,
      siteName: SITE_NAME,
      title: page.title,
      description: page.description,
      images: [{ url: DEFAULT_OG_IMAGE, alt: `${SITE_NAME} — software and digital growth` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function createArticleMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const canonical = `${SITE_URL}${path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: DEFAULT_OG_IMAGE, alt: `${SITE_NAME} insights` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
