import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'

type SuccessModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent py={'20px'}>
        <ModalHeader textAlign="center">
          <Box justifyItems={'center'} mt={'8px'}>
            <Image
              src="/assets/checked.png"
              alt="Success"
              width={64}
              height={64}
            />
          </Box>
          <Text mt={'16px'}>All done! Hooray!</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text textAlign="center">
            You will receive an email invitation once our product goes live!
            Thank you for your interest in Broccoli & Co.
          </Text>
        </ModalBody>
        <ModalFooter mt={'20px'}>
          <Button w={'full'} colorScheme={'brand.primary'} onClick={onClose}>
            Ok
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
