'use client'
import { Button, useDisclosure } from '@chakra-ui/react'
import { InvitationModal } from '@/app/components/invitation/InvitationModal'

export const InvitationButton = () => {
  const { isOpen, onClose, onToggle } = useDisclosure()

  return (
    <>
      <Button colorScheme={'brand.primary'} onClick={onToggle} size={'lg'}>
        Request an invitation
      </Button>
      <InvitationModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
