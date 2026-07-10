/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  link: string;
  description: string;
  tag: string;
  clientType: string;
  accentColor: string;
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  projectType: string;
  timeline: string;
  message: string;
  timestamp: string;
  status: 'new' | 'contacted' | 'archived';
}
