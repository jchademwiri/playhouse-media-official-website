import Header from '@/components/Navigation/header';
import HeaderMobile from '@/components/Navigation/header-mobile';
import MarginWidthWrapper from '@/components/Navigation/margin-width-wrapper';
import PageWrapper from '@/components/Navigation/page-wrapper';
import SideNav from '@/components/Navigation/side-nav';
import AuthProvider from '@/context/AuthProvider';
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
        <AuthProvider>
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
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
