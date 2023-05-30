// import CookieBanner from '@/lib/googleAnalytics/CookieBanner';
import GoogleAnalytics from '@/lib/googleAnalytics/GoogleAnalytics';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Playhouse Media Group',
  description:
    "Transform your online presence with our web design and development services. We create user-friendly and visually appealing websites that captivate your audience. Boost your brand's visibility and drive organic traffic with our SEO expertise.",
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
        {/* <CookieBanner /> */}
      </body>
    </html>
  );
}
