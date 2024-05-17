import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers, SearchProvider, ErrorAndSubmitProvider } from './providers';
import { ClerkProvider } from '@clerk/nextjs';

import Nav from './_components/Nav';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Weather',
  description: 'Your Next Stop for your weather needs!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <SearchProvider>
            <ErrorAndSubmitProvider>
              <Nav />
              <Providers>{children}</Providers>
            </ErrorAndSubmitProvider>
          </SearchProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
