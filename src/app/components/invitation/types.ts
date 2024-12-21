import { z } from 'zod'

export type FormFields = {
  fullName: string
  email: string
  confirmEmail: string
}

/**
 * Schema for the invitation form
 *
 * - fullName: Must be at least 3 characters
 * - email: Must be a valid email address
 * - confirmEmail: Must match the email field
 */
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
