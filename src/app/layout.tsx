import CookieBanner from '@/lib/googleAnalytics/CookieBanner';
import GoogleAnalytics from '@/lib/googleAnalytics/GoogleAnalytics';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Playhouse Media Group',
  description:
    'We takes pride in having worked with and advised many Business Start-Ups, Entrepreneurs, & Established Businesses Globally on their Strategic Marketing Initiatives. We welcome the opportunity to offer your Business the chance to build a successful Marketing Strategy to better dominate your market segment quickly and effectively.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <GoogleAnalytics GA_MEASUREMENT_ID='G-51M5BSC068' />
      <body className={`${inter.className} bg-dark`}>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
