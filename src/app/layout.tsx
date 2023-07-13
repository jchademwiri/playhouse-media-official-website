// import CookieBanner from '@/lib/googleAnalytics/CookieBanner';
import './globals.css';
import GoogleAnalytics from '@/lib/googleAnalytics/GoogleAnalytics';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
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
    description:
    "Transform your online presence with Playhouse Media Group. We specialize in creating user-friendly and visually appealing websites that captivate your audience. Boost your brand's visibility and drive organic traffic with our expert web design, development, and SEO services.",
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
      <body className={`${inter.className}`}>
      {/* <GoogleAnalytics GA_MEASUREMENT_ID='G-51M5BSC068' /> */}
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        {/* <CookieBanner /> */}
      </body>
    </html>
  );
}
