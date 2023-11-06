import { Toaster } from '@/components/ui/toaster';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
