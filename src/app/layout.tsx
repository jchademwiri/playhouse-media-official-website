// import CookieBanner from '@/lib/googleAnalytics/CookieBanner';
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from '@/lib/googleAnalytics/GoogleAnalytics';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.playhousemedia.net'),
  title: {
    default: 'Playhouse Media Group - Web Design and Development Services',
    template: '%s | Web Design and Development Services',
  },
  description:
    "Transform your online presence with Playhouse Media Group. We specialize in creating user-friendly and visually appealing websites that captivate your audience. Boost your brand's visibility and drive organic traffic with our expert web design, development, and SEO services.",
    alternates: {
      canonical: 'https://www.playhousemedia.net',
    },

  openGraph: {
    title: 'Playhouse Media Group - Web Design and Development Services',
    siteName: 'Playhouse Media Group',
    description:
    "Transform your online presence with Playhouse Media Group. We specialize in creating user-friendly and visually appealing websites that captivate your audience. Boost your brand's visibility and drive organic traffic with our expert web design, development, and SEO services.",
    url: 'https://www.playhousemedia.net',
    locale: 'en_US',
    type: 'website',
  },
  category: 'technology',
  twitter: {
    creator: '@jchademwiri',
    creatorId: '1467726470533754880',
    siteId: '1467726470533754880',
    card: 'summary_large_image',
   
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
