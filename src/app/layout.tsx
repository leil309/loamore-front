import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import React from 'react';
import { Providers } from '@/components/common/providers';

const noto = Noto_Sans_KR({ weight: ['400', '500'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="light">
      <body className={noto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
