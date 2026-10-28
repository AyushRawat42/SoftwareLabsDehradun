/**
 * Shared studio details used across the brochure.
 */

export const site = {
  name: 'Software Lab',
  shortName: 'Software Lab',
  legalName: 'Software Lab',
  region: 'Uttarakhand, India',
  locationLine: 'Uttarakhand, India',
  email: 'softwarelabdehradun@gmail.com',
  phoneDisplay: '+91 98708 71386',
  phoneTel: '+919870871386',
  whatsappDigits: '919870871386',
  hours: 'Monday–Saturday, 10:00 AM – 6:00 PM IST',
  replyWindow: 'We typically reply within one business day.',
  productName: 'Software Lab Higher Education ERP',
  url: 'https://softwarelabs.dehradun',
} as const;

export const hasPhone = Boolean(site.phoneDisplay && site.phoneTel);
export const hasWhatsApp = Boolean(site.whatsappDigits);

export const ENQUIRY_ERP_DEMO = 'Higher Education ERP — Campus Demo';

export const enquiryTypes = [
  ENQUIRY_ERP_DEMO,
  'Business Website',
  'Admissions and Enquiry System',
  'Admin Dashboard',
  'Custom Operational Portal',
  'Website Redesign',
  'Ongoing Support',
  'Other Custom Software',
] as const;
