import MarketingPage from '@/components/MarketingPage';
import { getMarketingPage } from '@/lib/marketing-pages';
import { createMetadata } from '@/lib/seo-config';

export const metadata = createMetadata('/services/web-analytics-tracking');

export default function WebAnalyticsTrackingPage() {
  return <MarketingPage {...getMarketingPage('/services/web-analytics-tracking')} />;
}
