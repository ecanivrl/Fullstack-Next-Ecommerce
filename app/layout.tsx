import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.scss';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "'Go Froş'",
    template: '%s | Go Froş',
  },
  description: 'My site description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
