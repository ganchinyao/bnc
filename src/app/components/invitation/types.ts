import { z } from 'zod'

export type FormFields = {
  fullName: string
  email: string
  confirmEmail: string
}

export const invitationSchema = z
  .object({
    fullName: z.string().min(3, 'Please enter at least 3 characters'),
    email: z
      .string()
      .email('The email address is invalid')
      .nonempty('Email is required'),
    confirmEmail: z.string().nonempty('Please confirm your email address'),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: 'Emails do not match',
    path: ['confirmEmail'],
  })
