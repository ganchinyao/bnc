'use client'

import { ChakraProvider, Flex } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { theme } from '@/app/theme'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction={'column'} minH={'100vh'}>
        {children}
      </Flex>
    </ChakraProvider>
  )
}
