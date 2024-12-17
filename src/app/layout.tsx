import type { Metadata } from 'next'
import { ThemeProvider } from '@/app/ThemeProvider'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { Flex } from '@chakra-ui/react'

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
          <Flex direction={'column'} minH={'100vh'}>
            <Header />
            {children}
            <Footer />
          </Flex>
        </ThemeProvider>
      </body>
    </html>
  )
}
