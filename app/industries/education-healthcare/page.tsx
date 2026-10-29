import MarketingPage from '@/components/MarketingPage';
import { getMarketingPage } from '@/lib/marketing-pages';
import { createMetadata } from '@/lib/seo-config';

export const metadata = createMetadata('/industries/education-healthcare');

export default function EducationHealthcarePage() {
  return <MarketingPage {...getMarketingPage('/industries/education-healthcare')} />;
}
