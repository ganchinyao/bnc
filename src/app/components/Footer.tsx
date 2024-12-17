import { Flex, Text, VStack } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Flex
      bgColor={'blackAlpha.900'}
      color={'whiteAlpha.900'}
      p={{ base: '24px', md: '32px' }}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <VStack gap={4} align={'center'} w={'100%'}>
        <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight={'semibold'}>
          Be the first to know - Request your invitation today!
        </Text>
        <Text fontSize={{ base: 'xs', md: 'sm' }}>
          © 2024 Broccoli & Co. All rights reserved.
        </Text>
      </VStack>
    </Flex>
  )
}
