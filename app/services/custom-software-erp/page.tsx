import MarketingPage from '@/components/MarketingPage';
import { getMarketingPage } from '@/lib/marketing-pages';
import { createMetadata } from '@/lib/seo-config';

export const metadata = createMetadata('/services/custom-software-erp');

export default function CustomSoftwareErpPage() {
  return <MarketingPage {...getMarketingPage('/services/custom-software-erp')} />;
}
