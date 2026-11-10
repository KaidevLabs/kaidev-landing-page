import type React from 'react';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

// Load Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Kaidev | Eficiencia en IA para empresas',
  description:
    'Consultora de ingeniería especializada en eficiencia en IA. Ayudamos a las empresas a obtener más trabajo útil de las herramientas que ya pagan, con medición, control de costes y seguridad.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon_Kaidev.svg" sizes="any" />
      </head>
      <body className="bg-canvas font-sans text-ink">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <script
          async
          src="https://umami.kaidev.io/script.js"
          data-website-id="e02e6171-142b-4c3b-96fb-b30c26fd00a0"
          data-domains="kaidev.io"
        ></script>
      </body>
    </html>
  );
}
