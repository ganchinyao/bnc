import { describe, it, expect } from 'vitest'
import { invitationSchema } from '@/app/components/invitation/types'

describe('invitationSchema', () => {
  it('should pass validation for valid data', () => {
    const validData = {
      fullName: 'John Doe',
      email: 'john@example.com',
      confirmEmail: 'john@example.com',
    }

    expect(() => invitationSchema.parse(validData)).not.toThrow()
  })

  it('should fail if fullName is less than 3 characters', () => {
    const invalidData = {
      fullName: 'Jo',
      email: 'john@example.com',
      confirmEmail: 'john@example.com',
    }

    expect(() => invitationSchema.parse(invalidData)).toThrowError(
      'Please enter at least 3 characters',
    )
  })

  it('should fail if email is invalid', () => {
    const invalidData = {
      fullName: 'John Doe',
      email: 'johnexample.com',
      confirmEmail: 'johnexample.com',
    }

    expect(() => invitationSchema.parse(invalidData)).toThrowError(
      'The email address is invalid',
    )
  })

  it('should fail if email is empty', () => {
    const invalidData = {
      fullName: 'John Doe',
      email: '',
      confirmEmail: '',
    }

    expect(() => invitationSchema.parse(invalidData)).toThrowError(
      'Email is required',
    )
  })

  it('should fail if confirmEmail is empty', () => {
    const invalidData = {
      fullName: 'John Doe',
      email: 'john@example.com',
      confirmEmail: '',
    }

    expect(() => invitationSchema.parse(invalidData)).toThrowError(
      'Please confirm your email address',
    )
  })

  it('should fail if emails do not match', () => {
    const invalidData = {
      fullName: 'John Doe',
      email: 'john@example.com',
      confirmEmail: 'jane@example.com',
    }

    expect(() => invitationSchema.parse(invalidData)).toThrowError(
      'Emails do not match',
    )
  })
})
