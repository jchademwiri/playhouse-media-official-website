// import CookieBanner from '@/lib/googleAnalytics/CookieBanner';
import GoogleAnalytics from '@/lib/googleAnalytics/GoogleAnalytics';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Playhouse Media Group - Web Design and Development Services',
  description:
    "Transform your online presence with Playhouse Media Group. We specialize in creating user-friendly and visually appealing websites that captivate your audience. Boost your brand's visibility and drive organic traffic with our expert web design, development, and SEO services.",
  openGraph: {
    title: 'Playhouse Media Group - Web Design and Development Services',
    description:
      "Transform your online presence with Playhouse Media Group. We specialize in creating user-friendly and visually appealing websites that captivate your audience. Boost your brand's visibility and drive organic traffic with our expert web design, development, and SEO services.",
    url: 'https://playhousemedia.net',
    siteName: 'Playhouse Media Group',
    locale: 'en_US',
    type: 'website',
    authors: ['Jacob Chademwiri'],
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Playhouse Media Group - Web Design and Development Services',
      },
    ],
  },
  twitter: {
    handle: '@JChademwiri',
    site: '@JChademwiri',
    cardType: 'summary_large_image',
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
      <body className={`${inter.className} bg-dark text-white`}>
        <Navbar />
        {children}
        <Footer />
        {/* <CookieBanner /> */}
      </body>
    </html>
  );
}
