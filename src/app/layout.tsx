import type { Metadata } from 'next';
import { fontVariables } from '@/lib/fonts';
import './globals.css';
import { ThemeProvider } from '@/components/clientThemeProvider';

export const metadata: Metadata = {
  title: 'Veysel Demirel • Veysel in the Digital World',
  description:
    'Hi there, I am Veysel. I create innovative solutions in software development and user experience. Welcome to my digital world!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} antialiased`} suppressHydrationWarning>
      <body className="bg-background-default text-foreground-default">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableColorScheme enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
