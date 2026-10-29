import MarketingPage from '@/components/MarketingPage';
import { getMarketingPage } from '@/lib/marketing-pages';
import { createMetadata } from '@/lib/seo-config';

export const metadata = createMetadata('/services/seo-digital-marketing');

export default function SeoDigitalMarketingPage() {
  return <MarketingPage {...getMarketingPage('/services/seo-digital-marketing')} />;
}
