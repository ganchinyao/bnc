import type { Metadata } from 'next'
import { ThemeProvider } from '@/app/ThemeProvider'

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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
