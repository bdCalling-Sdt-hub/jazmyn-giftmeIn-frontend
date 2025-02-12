import type { Metadata } from 'next';
import './globals.css';
import Navber from '@/components/common/Navber';
import Footer from '@/components/common/Footer';
import { Poppins } from 'next/font/google';
import CustomProvider from '@/provider/Provider';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: 'GiftmeIn',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <CustomProvider>
          <Navber />
          {children}
          <Footer />
        </CustomProvider>
      </body>
    </html>
  );
}
