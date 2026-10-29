import MarketingPage from '@/components/MarketingPage';
import { getMarketingPage } from '@/lib/marketing-pages';
import { createMetadata } from '@/lib/seo-config';

export const metadata = createMetadata('/work');

export default function WorkPage() {
  return <MarketingPage {...getMarketingPage('/work')} />;
}
