'use client'
import { Button, useDisclosure } from '@chakra-ui/react'
import { InvitationModal } from '@/app/components/invitation/InvitationModal'
import { SuccessModal } from '@/app/components/invitation/SuccessModal'

export const InvitationButton = () => {
  const {
    isOpen: isInvitationModalOpen,
    onClose: onCloseInvitationModal,
    onToggle: onToggleInvitationModal,
  } = useDisclosure()
  const {
    isOpen: isSuccessModalOpen,
    onClose: onCloseSuccessModal,
    onOpen: onOpenSuccessModal,
  } = useDisclosure()

  return (
    <>
      <Button
        colorScheme={'brand.primary'}
        onClick={onToggleInvitationModal}
        size={'lg'}
      >
        Request an invitation
      </Button>
      <InvitationModal
        isOpen={isInvitationModalOpen}
        onClose={onCloseInvitationModal}
        onSuccess={onOpenSuccessModal}
      />
      <SuccessModal isOpen={isSuccessModalOpen} onClose={onCloseSuccessModal} />
    </>
  )
}
