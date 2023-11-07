import { Toaster } from '@/components/ui/toaster';

export const metadata = {
  title: 'PMG Dashboard Auth',
  description: 'PMG Data Dashboard Auth',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <div className='overflow-hidden'>
          <div className='-z-10 relative h-full w-full'>
            <div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]' />
            <div className='absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]' />
          </div>
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
