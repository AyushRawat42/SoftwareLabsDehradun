import { SITE_NAME, SITE_URL } from '@/lib/seo-config';

export type JsonLdValue = Record<string, unknown> | Array<Record<string, unknown>>;

export function JsonLd({ data }: { data: JsonLdValue }) {
  const serialized = JSON.stringify(data).replace(/</g, '\\u003c');

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialized }} />;
}

export const localBusinessStructuredData: JsonLdValue = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      email: 'softwarelabdehradun@gmail.com',
      telephone: '+919870871386',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dehradun',
        addressRegion: 'Uttarakhand',
        addressCountry: 'IN',
      },
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/og-image.png`,
      email: 'softwarelabdehradun@gmail.com',
      telephone: '+919870871386',
      priceRange: 'Custom project pricing',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dehradun',
        addressRegion: 'Uttarakhand',
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'City', name: 'Dehradun' },
        { '@type': 'AdministrativeArea', name: 'Uttarakhand' },
        { '@type': 'Country', name: 'India' },
      ],
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export function createServiceStructuredData({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): JsonLdValue {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      '@type': 'ProfessionalService',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: { '@type': 'Country', name: 'India' },
  };
}

export function createFAQStructuredData(
  questions: Array<{ question: string; answer: string }>,
): JsonLdValue {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; path: string }>;
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map(({ name, path }, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name,
          item: `${SITE_URL}${path}`,
        })),
      }}
    />
  );
}
