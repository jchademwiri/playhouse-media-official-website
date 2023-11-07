import Header from '@/components/Navigation/header';
import HeaderMobile from '@/components/Navigation/header-mobile';
import MarginWidthWrapper from '@/components/Navigation/margin-width-wrapper';
import PageWrapper from '@/components/Navigation/page-wrapper';
import SideNav from '@/components/Navigation/side-nav';
import SProvider from '@/components/SessionProvider';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';

export const metadata = {
  title: 'PMG Dashboard',
  description: 'PMG Data Dashboard',
};

export default function DashboardLayout({
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
          disableTransitionOnChange
        >
          <SProvider>
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
          </SProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
