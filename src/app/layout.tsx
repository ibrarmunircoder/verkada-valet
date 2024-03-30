import type { Metadata } from 'next';
import ConfigureAmplifyClientSide from '@/app/ConfigureAmplifyClientSide';
import { AuthenticatorProvider } from '@/app/context/AuthenticatorProvider';
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
        <ConfigureAmplifyClientSide />
        <AuthenticatorProvider>{children}</AuthenticatorProvider>
      </body>
    </html>
  );
}
