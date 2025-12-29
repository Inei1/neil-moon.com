import './globals.css';
import { Inter, Roboto_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ToastProvider, Toast } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Neil Moon | Personal Website',
  description: 'Personal website of Neil Moon',
  keywords: ['Neil Moon', 'Portfolio', 'Personal Website'],
  authors: [{ name: 'Neil Moon' }],
  creator: 'Neil Moon',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased min-h-screen bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ToastProvider>
            <Toast />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
