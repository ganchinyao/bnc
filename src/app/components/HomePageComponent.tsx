'use client'
import { Text, VStack } from '@chakra-ui/react'
import { InvitationButton } from '@/app/components/invitation/InvitationButton'
import Image from 'next/image'

export const HomePageComponent = () => {
  return (
    <VStack
      bgGradient={
        'linear(to-b, brand.primary.50, brand.primary.100, brand.primary.200)'
      }
      spacing={6}
      justifyContent={'center'}
      textAlign={'center'}
      w={'100%'}
      flex={1}
      py={'20px'}
    >
      <Image
        src={'/assets/homepage-img1.png'}
        alt={'Hero image'}
        width={150}
        height={150}
      />
      <Text
        fontSize={{ base: '3xl', md: '4xl' }}
        fontWeight={'bold'}
        color={'brand.primary.500'}
        lineHeight={'shorter'}
      >
        A better way
        <br />
        to enjoy every day.
      </Text>
      <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
        Experience the Future of Convenience.
      </Text>
      <InvitationButton />
    </VStack>
  )
}
