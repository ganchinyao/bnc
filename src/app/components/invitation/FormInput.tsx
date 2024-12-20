import { useFormContext } from 'react-hook-form'
import { FormFields } from '@/app/components/invitation/types'
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/react'
import { useState } from 'react'

type FloatingLabelInputProps = {
  label: string
  name: keyof FormFields
} & InputProps

export const FormInput = ({
  label,
  name,
  ...inputProps
}: FloatingLabelInputProps) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<FormFields>()

  const [isFocused, setIsFocused] = useState(false)
  const value = watch(name)
  const showFormLabel = isFocused || !!value

  return (
    <FormControl isInvalid={!!errors[name]} mb={4} position="relative">
      {showFormLabel && (
        <FormLabel
          position={'absolute'}
          left={'12px'}
          fontSize={'xs'}
          color={'brand.primary.500'}
          transition={'all 0.3s ease'}
          bgColor={'white'}
          px={1}
          zIndex={2}
          transform={'translateY(-50%)'}
        >
          {label}
        </FormLabel>
      )}
      <Input
        {...register(name)}
        placeholder={label}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        borderColor={'brand.primary.500'}
        focusBorderColor={'brand.primary.600'}
        zIndex={1}
        size={'lg'}
        fontSize={'md'}
        {...inputProps}
      />
      <Box>
        <FormErrorMessage>
          {errors[name] && errors[name].message}
        </FormErrorMessage>
      </Box>
    </FormControl>
  )
}
