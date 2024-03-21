import type { Metadata } from 'next';
import { AuthenticatorProvider } from '@/app/contexts/AuthenticatorProvicder';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Verkada Valet',
  description: 'Verkada Valet',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthenticatorProvider>{children}</AuthenticatorProvider>
      </body>
    </html>
  );
}
