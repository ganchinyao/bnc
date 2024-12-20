import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
  Box,
  Image,
  Text,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { FormFields, invitationSchema } from '@/app/components/invitation/types'
import { FormInput } from './FormInput'

type InvitationModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const InvitationModal = ({ isOpen, onClose }: InvitationModalProps) => {
  const toast = useToast()
  const formMethods = useForm<FormFields>({
    resolver: zodResolver(invitationSchema),
  })
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = formMethods

  const onSubmit = async (data: FormFields) => {
    try {
      console.log('Sending request:', data)
      toast({
        title: 'Success!',
        description: "We'll inform you once we are live!",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      onClose()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was an error sending your request.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      console.error('Error sending request:', error)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderBottomRadius={'4px'}>
        <ModalCloseButton />
        <Box
          borderTopRadius={'4px'}
          h={'120px'}
          bgGradient="linear(to-r, brand.primary.300, brand.primary.400)"
          justifyItems={'center'}
          alignContent={'center'}
        >
          <Image w={'60px'} src={'/assets/mail.png'} alt="Invitation" />
        </Box>
        <ModalHeader textAlign="center" color="brand.primary.500">
          <Text fontSize={'x-large'}>Request an invite</Text>
          <Text fontSize={'medium'} fontWeight={'normal'}>
            {"We'll inform you once we are live!"}
          </Text>
        </ModalHeader>
        <ModalBody pb={'40px'}>
          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormInput label={'Full Name'} name={'fullName'} />
              <FormInput label={'Email'} name={'email'} type={'email'} />
              <FormInput
                label={'Confirm Email'}
                name={'confirmEmail'}
                type={'email'}
              />
              <Button
                w={'full'}
                mt={4}
                colorScheme={'brand.primary'}
                isLoading={isSubmitting}
                type={'submit'}
                size={'lg'}
              >
                Send
              </Button>
            </form>
          </FormProvider>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
