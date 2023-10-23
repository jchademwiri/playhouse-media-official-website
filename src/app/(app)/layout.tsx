import Footer from '@/components/Footer';
import Header from '@/components/Navigation/header';
import HeaderMobile from '@/components/Navigation/header-mobile';
import MarginWidthWrapper from '@/components/Navigation/margin-width-wrapper';
import PageWrapper from '@/components/Navigation/page-wrapper';
import SideNav from '@/components/Navigation/side-nav';
import '../globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={``}>
        <div className='flex'>
          <SideNav />
          <main className='flex-1'>
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
