// import CookieBanner from '@/lib/googleAnalytics/CookieBanner';
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from '@/lib/googleAnalytics/GoogleAnalytics';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Jacob chademwiri Web Developer in Centurion',
    template: '%s | Web Developer in Centurion',
  },
  description:
    'I am a Frontend Developer in Centurion, SA. I love to build websites  with JavaScript, Next.js, React, Express, Tailwind and MongoDB.',

  openGraph: {
    title: 'Frontend Developer in Centurion, SA',
    description: `I'm a frontend developer in Centurion, SA. I love to build websites  with JavaScript, Next.js, React, Express, Tailwind and MongoDB.`,
    url: `https://jacobc.co.za`,
    siteName: 'Jacob Chademwiri',
    images: [
      {
        url: `https://jacobc.co.za/social.jpg`,
        width: 1200,
        height: 600,
        alt: 'Jacob Chademwiri Frontend Developer in Centurion, SA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  category: 'technology',
  twitter: {
    card: 'summary_large_image',
    title: 'Jacob Chademwiri',
    description: `I'm a frontend developer in Centurion, SA. I love to build websites  with JavaScript, Next.js, React, Express, Tailwind and MongoDB.`,
    siteId: '1467726470533754880',
    creator: '@jchademwiri',
    creatorId: '1467726470533754880',
    images: ['https://jacobc.co.za/social.jpg'],
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
