import MarketingPage from '@/components/MarketingPage';
import { getMarketingPage } from '@/lib/marketing-pages';
import { createMetadata } from '@/lib/seo-config';

export const metadata = createMetadata('/about');

export default function AboutPage() {
  return <MarketingPage {...getMarketingPage('/about')} />;
}
