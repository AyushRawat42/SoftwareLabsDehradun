import type { ComponentProps } from 'react';
import MarketingPage from '@/components/MarketingPage';

export type MarketingPagePath =
  | '/services/web-development'
  | '/services/custom-software-erp'
  | '/services/seo-digital-marketing'
  | '/services/web-analytics-tracking'
  | '/industries/education-healthcare'
  | '/work'
  | '/about'
  | '/contact';

export const MARKETING_PAGES: Record<MarketingPagePath, ComponentProps<typeof MarketingPage>> = {
  '/services/web-development': {
    eyebrow: 'Web development',
    title: 'Websites and web apps built for growth',
    description:
      'We design and build fast, accessible websites and web applications that help organizations explain their value, reach the right people and turn visits into enquiries.',
    sections: [
      {
        title: 'A clear experience on every screen',
        description:
          'Responsive layouts, thoughtful content structure and accessible interactions make it easier for visitors to find what they need.',
        points: ['Corporate and institutional websites', 'Landing pages and campaign sites', 'Accessible, mobile-first interfaces'],
      },
      {
        title: 'Built to perform and evolve',
        description:
          'Modern web tooling supports quick page loads, search visibility and maintainable delivery as your needs change.',
        points: ['Next.js and React implementations', 'Technical SEO foundations', 'Analytics-ready calls to action'],
      },
    ],
  },
  '/services/custom-software-erp': {
    eyebrow: 'Custom software & ERP',
    title: 'Software shaped around your operations',
    description:
      'Replace disconnected processes with purpose-built software, portals and ERP workflows tailored to the way your team works.',
    sections: [
      {
        title: 'Understand the workflow first',
        description:
          'We map users, data and processes before designing a system, helping ensure the software solves the underlying operational problem.',
        points: ['Internal dashboards and operational portals', 'Workflow automation', 'Role-based access and reporting'],
      },
      {
        title: 'Designed for reliable delivery',
        description:
          'Projects are planned in clear stages, with practical feedback loops and room to extend the product over time.',
        points: ['Requirements and technical planning', 'Incremental implementation', 'Ongoing support and improvements'],
      },
    ],
  },
  '/services/seo-digital-marketing': {
    eyebrow: 'SEO & digital marketing',
    title: 'Get discovered by the people who need you',
    description:
      'Build sustainable visibility and qualified enquiries with a practical mix of technical SEO, local search and paid campaign optimization.',
    sections: [
      {
        title: 'Improve organic visibility',
        description:
          'Resolve technical barriers and create a useful search experience around the questions your audience is already asking.',
        points: ['Technical SEO reviews', 'Local search and on-page improvements', 'Content and landing-page recommendations'],
      },
      {
        title: 'Make paid campaigns accountable',
        description:
          'Connect campaign goals to meaningful actions on your website so budgets and performance can be evaluated clearly.',
        points: ['Google Ads campaign planning', 'Landing-page alignment', 'Conversion measurement'],
      },
    ],
  },
  '/services/web-analytics-tracking': {
    eyebrow: 'Web analytics & tracking',
    title: 'Know which digital activity drives results',
    description:
      'Set up dependable measurement with Google Analytics 4 and Google Tag Manager, then use clear reporting to improve your website and campaigns.',
    sections: [
      {
        title: 'Measure meaningful actions',
        description:
          'A well-defined measurement plan distinguishes useful leads and engagement from activity that only looks impressive.',
        points: ['GA4 property and event configuration', 'Google Tag Manager implementation', 'Form and call conversion tracking'],
      },
      {
        title: 'Build confidence in your data',
        description:
          'Validate events and document how tracking works so teams can make decisions with a shared understanding.',
        points: ['Consent-aware configuration', 'Testing and quality checks', 'Reporting recommendations'],
      },
    ],
  },
  '/industries/education-healthcare': {
    eyebrow: 'Education & healthcare',
    title: 'Digital experiences for education and healthcare',
    description:
      'Help prospective students, patients and families find the right information, take the next step and stay connected with your institution.',
    sections: [
      {
        title: 'For colleges and education providers',
        description:
          'Make programs, admissions information and enquiry paths easier to discover across devices.',
        points: ['Institutional and department websites', 'Admissions and enquiry journeys', 'Campus information and portals'],
      },
      {
        title: 'For healthcare organizations',
        description:
          'Present services clearly and make it simple for people to find locations, specialties and contact options.',
        points: ['Hospital and clinic websites', 'Service and specialty pages', 'Appointment and enquiry pathways'],
      },
    ],
  },
  '/work': {
    eyebrow: 'Selected work',
    title: 'A practical approach to digital projects',
    description:
      'Our work brings together websites, custom software and measurable digital growth. We shape each engagement around its goals, audience and operating context.',
    sections: [
      {
        title: 'Websites and digital platforms',
        description:
          'From a clearer institutional website to a focused campaign landing page, we design around audience needs and useful outcomes.',
      },
      {
        title: 'Software and growth systems',
        description:
          'We help organizations plan operational software and improve how their digital marketing activity is measured.',
      },
    ],
  },
  '/about': {
    eyebrow: 'About The Software Lab',
    title: 'A software and digital growth team in Dehradun',
    description:
      'The Software Lab partners with institutions and businesses to build useful web experiences, operational software and measurable marketing systems.',
    sections: [
      {
        title: 'Solve the right problem',
        description:
          'We begin by understanding the people, processes and goals behind a project, then recommend a solution that fits the real need.',
      },
      {
        title: 'Work with clarity',
        description:
          'Direct communication, practical planning and incremental delivery help keep decisions visible throughout an engagement.',
      },
    ],
  },
  '/contact': {
    eyebrow: 'Contact',
    title: 'Tell us what you are working on',
    description:
      'Share your goals for a website, software project, analytics setup or digital campaign. The team is based in Dehradun and works with organizations across India.',
    sections: [
      {
        title: 'Email',
        description: 'Send your project details to softwarelabdehradun@gmail.com and we will follow up about next steps.',
        points: ['Typical reply within one business day'],
      },
      {
        title: 'Call',
        description: 'Speak with The Software Lab at +91 98708 71386.',
        points: ['Dehradun, Uttarakhand, India', 'Monday–Saturday, 10:00 AM–6:00 PM IST'],
      },
    ],
  },
};

export function getMarketingPage(path: MarketingPagePath) {
  return MARKETING_PAGES[path];
}
