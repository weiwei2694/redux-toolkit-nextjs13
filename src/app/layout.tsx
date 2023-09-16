import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Redux Toolkit',
}

import ReduxProvider from '@/redux/ReduxProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <main className='max-w-4xl mx-auto py-36'>
            {children}
          </main>
        </body>
      </html>
    </ReduxProvider>
  )
}
