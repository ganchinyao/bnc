import { Flex, Text } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex
      as="header"
      bgColor={'white'}
      h={'80px'}
      px={{ base: '24px', md: '80px' }}
      alignItems={'center'}
      justifyContent={'space-between'}
      boxShadow={'sm'}
      w={'full'}
      zIndex={'banner'}
    >
      <Text fontSize={'2xl'} fontWeight={'bold'} color={'brand.primary.500'}>
        Broccoli & Co.
      </Text>
    </Flex>
  )
}
