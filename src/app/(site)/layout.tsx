import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import NavMenu from '@/components/NavigationMenu/NavMenu';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.playhousemedia.net'),
  title: 'Playhouse Media Group - Web Design and Development Services',
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
    images: '/opengraph-image.png',
  },
  category: 'technology',
  twitter: {
    title: 'Playhouse Media Group - Web Design and Development Services',
    description:
      "Transform your online presence with Playhouse Media Group. We specialize in creating user-friendly and visually appealing websites that captivate your audience. Boost your brand's visibility and drive organic traffic with our expert web design, development, and SEO services.",
    creator: '@jchademwiri',
    creatorId: '1467726470533754880',
    siteId: '1467726470533754880',
    card: 'summary_large_image',
    images: '/twitter-image.png',
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

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        {/* <Navbar /> */}
        <NavMenu />
        {children}
        <SpeedInsights />
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
