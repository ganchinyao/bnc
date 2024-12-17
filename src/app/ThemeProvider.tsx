'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
}
