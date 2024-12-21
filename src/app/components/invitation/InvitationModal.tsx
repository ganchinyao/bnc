import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Box,
  Image,
  Text,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { FormFields, invitationSchema } from '@/app/components/invitation/types'
import { FormInput } from '@/app/components/invitation/FormInput'
import { requestInvitation } from '@/app/api/invite'
import { useState } from 'react'

type InvitationModalProps = {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export const InvitationModal = ({
  isOpen,
  onClose,
  onSuccess,
}: InvitationModalProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const formMethods = useForm<FormFields>({
    resolver: zodResolver(invitationSchema),
  })
  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = formMethods

  const onSubmit = async ({ fullName, email }: FormFields) => {
    // Clear the previous error message
    setErrorMessage(null)

    const { error } = await requestInvitation({
      fullName,
      email,
    })
    if (error) {
      return setErrorMessage(error)
    }

    reset()
    onClose()
    onSuccess()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderBottomRadius={'4px'}>
        <ModalCloseButton />
        <Box
          borderTopRadius={'4px'}
          h={'120px'}
          bgGradient={'linear(to-r, brand.primary.300, brand.primary.400)'}
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
                loadingText={'Sending...'}
                type={'submit'}
                size={'lg'}
              >
                Send
              </Button>
              {errorMessage && (
                <Text color="red.500" mt={4} textAlign="center">
                  {errorMessage}
                </Text>
              )}
            </form>
          </FormProvider>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
