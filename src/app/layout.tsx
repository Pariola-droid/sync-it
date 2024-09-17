import AbstractApp from '@/components/common/AbstractApp';
import { Inter, VT323 } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import localFont from 'next/font/local';
import type { Metadata, Viewport } from 'next';

const sanesans = localFont({
  variable: '--font-sane-sans',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/sanesans/SaneSans-Slim.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sanesans/SaneSans-Neutral.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sanesans/SaneSans-Median.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sanesans/SaneSans-Bulky.woff2',
      weight: 'bold',
      style: 'normal',
    },
  ],
});

const sanenik = localFont({
  variable: '--font-sane-nik',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/sanenik/Sanenik-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sanenik/Sanenik-Regular.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sanenik/Sanenik-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sanenik/Sanenik-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sanenik/Sanenik-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

const vt323 = VT323({
  weight: '400',
  variable: '--font-vt323',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  // weight: ["300", "400", "500", "600", "700"],
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'xp.pariola',
  description:
    'creative digital explorations and innovative snippets by pariola',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
    { media: '(prefers-color-scheme: dark)', color: '#f5f5f5' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sanesans.className} ${sanenik.variable} ${inter.variable} ${vt323.variable} ${GeistSans.variable}`}
    >
      <body>
        <AbstractApp>{children}</AbstractApp>
      </body>
    </html>
  );
}
