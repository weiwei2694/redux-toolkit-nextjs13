import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import ReduxProvider from '@/components/provider/ReduxProvider'
import Navbar from '@/components/sharing/Navbar';

const font = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Redux Toolkit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={`${font.className}`}>
          <main className="max-w-4xl mx-auto my-6 sm:my-24 px-6">
            <Navbar />
            <section className="py-5 sm:py-10">
              {children}
            </section>
          </main>
        </body>
      </html>
    </ReduxProvider>
  )
}
