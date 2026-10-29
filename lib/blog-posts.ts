export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'nextjs-vs-wordpress-institutional-corporate-websites',
    title: 'Next.js vs WordPress for institutional and corporate websites',
    description:
      'A practical comparison of Next.js and WordPress focused on content needs, integrations, performance and ongoing ownership.',
    publishedAt: '2025-01-15',
    sections: [
      {
        heading: 'Start with the people who will manage the site',
        paragraphs: [
          'The right platform depends on who publishes content, how often it changes and what controls the team needs. A familiar publishing workflow can matter as much as the technology behind the page.',
          'WordPress offers a mature editorial interface and a broad plugin ecosystem. Next.js offers a flexible application framework that can be paired with a content system chosen for the organization.',
        ],
      },
      {
        heading: 'Compare the full operating cost',
        paragraphs: [
          'Consider hosting, security updates, integrations, accessibility, performance and the time required to make routine changes. A platform should be evaluated over its full lifecycle, not only its launch.',
        ],
      },
      {
        heading: 'Choose for your requirements',
        paragraphs: [
          'For editorial teams that value a familiar CMS, WordPress may be a strong fit. For highly customized digital experiences and application-like features, Next.js may be a better foundation. Define the publishing and technical requirements before choosing.',
        ],
      },
    ],
  },
  {
    slug: 'double-inquiries-education-healthcare-google-ads-seo',
    title: 'Improving education and healthcare enquiries with SEO and Google Ads',
    description:
      'A guide to aligning search visibility, useful landing pages and enquiry measurement for education and healthcare organizations.',
    publishedAt: '2025-02-12',
    sections: [
      {
        heading: 'Make the next step easy to understand',
        paragraphs: [
          'Prospective students and patients need clear, trustworthy information before they enquire. Keep program, service, eligibility and contact information easy to find on mobile and desktop.',
        ],
      },
      {
        heading: 'Connect search intent to relevant pages',
        paragraphs: [
          'Organic content and paid campaigns work best when a visitor lands on a page that directly addresses their question. Avoid sending every searcher to a generic homepage.',
        ],
      },
      {
        heading: 'Measure completed enquiries',
        paragraphs: [
          'Track meaningful form submissions and calls, test that events fire correctly and review lead quality alongside campaign cost. This gives teams a more useful basis for improving campaigns.',
        ],
      },
    ],
  },
  {
    slug: 'ga4-gtm-conversion-tracking-for-b2b-lead-generation',
    title: 'GA4 and GTM conversion tracking for B2B lead generation',
    description:
      'Learn how to plan, implement and validate conversion events in Google Analytics 4 and Google Tag Manager.',
    publishedAt: '2025-03-10',
    sections: [
      {
        heading: 'Write down what counts as a conversion',
        paragraphs: [
          'Agree on the actions that represent genuine intent, such as a completed enquiry form or a tracked call. A short measurement plan prevents teams from counting incidental clicks as leads.',
        ],
      },
      {
        heading: 'Configure and validate events',
        paragraphs: [
          'Use Google Tag Manager to manage tags and GA4 to analyze the resulting events. Test each action in preview and debug tools before relying on it in reports.',
        ],
      },
      {
        heading: 'Keep reporting useful',
        paragraphs: [
          'Document event names and parameters, check for duplicates and review conversions against actual lead outcomes. Consistent definitions make reporting easier to interpret.',
        ],
      },
    ],
  },
];
