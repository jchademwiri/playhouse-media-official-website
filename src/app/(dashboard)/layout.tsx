import Footer from '@/components/Footer';
import Header from '@/components/Navigation/header';
import HeaderMobile from '@/components/Navigation/header-mobile';
import MarginWidthWrapper from '@/components/Navigation/margin-width-wrapper';
import PageWrapper from '@/components/Navigation/page-wrapper';
import SideNav from '@/components/Navigation/side-nav';
import { ThemeProvider } from '@/components/ThemeProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          // disableTransitionOnChange
        >
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
        </ThemeProvider>
      </body>
    </html>
  );
}
