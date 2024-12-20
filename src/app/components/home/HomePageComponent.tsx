import { Text, VStack } from '@chakra-ui/react'
import { InvitationButton } from '@/app/components/invitation/InvitationButton'

export const HomePageComponent = () => {
  return (
    <VStack gap={4} justifyContent="center" textAlign="center" h={'100%'}>
      <Text textStyle={'5xl'}>
        A better way
        <br />
        to enjoy every day.
      </Text>
      <Text>Experience the Future of Convenience.</Text>
      <InvitationButton />
    </VStack>
  )
}
