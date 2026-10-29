import MarketingPage from '@/components/MarketingPage';
import { getMarketingPage } from '@/lib/marketing-pages';
import { createMetadata } from '@/lib/seo-config';

export const metadata = createMetadata('/contact');

export default function ContactPage() {
  return <MarketingPage {...getMarketingPage('/contact')} />;
}
