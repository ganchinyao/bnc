import type { Metadata } from 'next'
import { ThemeProvider } from '@/app/theme/ThemeProvider'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Broccoli & Co.',
  description: 'Online service company',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
