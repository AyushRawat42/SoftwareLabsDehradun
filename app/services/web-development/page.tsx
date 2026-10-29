import MarketingPage from '@/components/MarketingPage';
import { getMarketingPage } from '@/lib/marketing-pages';
import { createMetadata } from '@/lib/seo-config';

export const metadata = createMetadata('/services/web-development');

export default function WebDevelopmentPage() {
  return <MarketingPage {...getMarketingPage('/services/web-development')} />;
}
