import type { Metadata } from 'next';
import { fontVariables } from '@/lib/fonts';
import './globals.css';

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
    <html lang="en" className={`${fontVariables} antialiased`}>
      <body className="bg-background-default text-foreground-default">{children}</body>
    </html>
  );
}
