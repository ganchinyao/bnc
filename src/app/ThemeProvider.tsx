'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { theme } from '@/app/theme'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
