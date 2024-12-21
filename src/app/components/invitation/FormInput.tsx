import { useFormContext } from 'react-hook-form'
import { FormFields } from '@/app/components/invitation/types'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/react'
import { useState } from 'react'

type FormInputProps = {
  label: string
  name: keyof FormFields
} & InputProps

export const FormInput = ({ label, name, ...inputProps }: FormInputProps) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<FormFields>()

  const [isFocused, setIsFocused] = useState(false)
  const value = watch(name)
  // Show the form label at the top of the form input when it is focused or has a value
  // as the placeholder will be hidden in this case
  const showFormLabel = isFocused || !!value

  return (
    <FormControl isInvalid={!!errors[name]} mb={4} position={'relative'}>
      {showFormLabel && (
        <FormLabel
          position={'absolute'}
          left={'12px'}
          fontSize={'xs'}
          color={'brand.primary.500'}
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
        _hover={{
          borderColor: 'brand.primary.500',
          borderWidth: 2,
        }}
        {...inputProps}
      />
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  )
}
