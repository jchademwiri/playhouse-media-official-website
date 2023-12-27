import { ThemeProvider } from '@/context/ThemeProvider';
import './globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): any {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}

          {/* <Toaster /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
