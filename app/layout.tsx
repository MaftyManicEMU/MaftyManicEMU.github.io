import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://thebrokenyear.com'),
  title: 'The Broken Year | M. Laurence Scott',
  description:
    'Enter The Broken Year, an epic-fantasy saga shaped by ancient roads, broken seasons, and difficult promises.',
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/site-icon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon-32.png',
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    title: 'The Broken Year',
    description:
      'Roads. Seasons. Promises. Enter the epic-fantasy world of The Broken Year.',
    type: 'website',
    images: [
      {
        url: '/social-preview.png',
        width: 1200,
        height: 630,
        alt: 'The Broken Year logo over a dark mountain city beneath a golden moon.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Broken Year',
    description:
      'Roads. Seasons. Promises. Enter the epic-fantasy world of The Broken Year.',
    images: ['/social-preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
