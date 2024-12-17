import { Box, Flex, FlexProps } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export const ResponsiveLayout = ({
  children,
  ...flexProps
}: PropsWithChildren & FlexProps) => {
  return (
    <Flex w={'100%'} justifyContent={'center'} {...flexProps}>
      <Box w={{ base: '100%', md: '700px' }}>{children}</Box>
    </Flex>
  )
}
