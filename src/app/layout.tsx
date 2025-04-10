import './globals.css';
import type { Metadata } from 'next';
import fontVariables from '@/libs/fonts';
import ClientThemesProvider from '@/components/providers/ClientThemeProvider';
import LoaderCols from '@/components/features/LoaderCols';
import FlareCursor from '@/components/features/FlareCursor';
import Texture from '@/components/features/Texture';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
        <ClientThemesProvider
          attribute="data-theme"
          defaultTheme="system"
          storageKey="theme"
          enableColorScheme
          enableSystem
        >
          <Texture />
          <LoaderCols />
          <FlareCursor />
          <div id="container">
            <Header />
            <div id="wrapper" className="flex gap-6 px-6 pb-6">
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </ClientThemesProvider>
      </body>
    </html>
  );
}
