'use server'

import { ServerActionResponse } from '@/app/api/types'

/**
 * Request an invitation to join the platform.
 * @param fullName: The full name of the user.
 * @param email: The email of the user.
 *
 */
export async function requestInvitation({
  fullName,
  email,
}: {
  fullName: string
  email: string
}): Promise<ServerActionResponse<void>> {
  try {
    const response = await fetch(
      'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email,
        }),
      },
    )

    if (!response.ok) {
      const errorData = await response.json()
      return {
        error: errorData.errorMessage,
      }
    }

    return {}
  } catch (error) {
    console.error('Error sending invitation request:', error)
    return {
      error: 'Something went wrong, please try again later.',
    }
  }
}
