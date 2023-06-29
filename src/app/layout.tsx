// import CookieBanner from '@/lib/googleAnalytics/CookieBanner';
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from '@/lib/googleAnalytics/GoogleAnalytics';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://www.playhousemedia.net'),
  title: 'Playhouse Media Group - Web Design and Development Services',
  description:
    "Transform your online presence with Playhouse Media Group. We specialize in creating user-friendly and visually appealing websites that captivate your audience. Boost your brand's visibility and drive organic traffic with our expert web design, development, and SEO services.",
  alternates: {
    canonical: 'https://www.playhousemedia.net',
  },
  openGraph: {
    url: 'https://www.playhousemedia.net',
    title: 'Playhouse Media Group - Web Design and Development Services',
    siteName: 'Playhouse Media Group',
    description:
      "Transform your online presence with Playhouse Media Group. We specialize in creating user-friendly and visually appealing websites that captivate your audience. Boost your brand's visibility and drive organic traffic with our expert web design, development, and SEO services.",
    images: [
      {
        url: 'https://www.playhousemedia.net/images/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'OG Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    handle: '@JChademwiri',
    site: '@JChademwiri',
    cardType: 'summary_large_image',
    image: 'https://www.playhousemedia.net/images/twitter-image.png',
  } as TwitterMetadata,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <GoogleAnalytics GA_MEASUREMENT_ID='G-51M5BSC068' />
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        {/* <CookieBanner /> */}
      </body>
    </html>
  );
}
