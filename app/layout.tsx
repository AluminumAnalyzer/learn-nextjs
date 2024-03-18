import { Metadata } from 'next';
import MainNavigation from '../components/navigation';
import '../styles/Home.module.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Next.js',
    default: 'Loading...',
  },
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}