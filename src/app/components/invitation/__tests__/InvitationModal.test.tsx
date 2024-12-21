import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest'
import { InvitationModal } from '@/app/components/invitation/InvitationModal'
import { ThemeProvider } from '@/app/theme/ThemeProvider'
import { requestInvitation } from '@/app/api/invite'

vi.mock('@/app/api/invite', () => ({
  requestInvitation: vi.fn().mockResolvedValue({}),
}))

vi.mock('@/app/components/invitation/FormInput', () => ({
  FormInput: ({
    label,
    value,
    onChange,
  }: {
    label: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }) => (
    <input aria-label={label} name={label} value={value} onChange={onChange} />
  ),
}))

describe('InvitationModal', () => {
  const onClose = vi.fn()
  const onSuccess = vi.fn()

  const renderComponent = () => {
    return render(
      <ThemeProvider>
        <InvitationModal
          isOpen={true}
          onClose={onClose}
          onSuccess={onSuccess}
        />
      </ThemeProvider>,
    )
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    renderComponent()
    expect(screen.getByText('Request an invite')).toBeInTheDocument()
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Confirm Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
  })

  it('displays error message on failed submission', async () => {
    ;(requestInvitation as Mock).mockResolvedValueOnce({
      error: 'Request failed',
    })

    renderComponent()

    expect(screen.queryByText('Request failed')).not.toBeInTheDocument()

    await act(async () => {
      fireEvent.change(screen.getByLabelText('Full Name'), {
        target: { value: 'John Doe' },
      })
      fireEvent.change(screen.getByLabelText('Email'), {
        target: { value: 'john@example.com' },
      })
      fireEvent.change(screen.getByLabelText('Confirm Email'), {
        target: { value: 'john@example.com' },
      })

      fireEvent.click(screen.getByRole('button', { name: 'Send' }))
    })

    expect(screen.queryByText('Request failed')).toBeInTheDocument()
  })

  it('calls onSuccess and onClose on successful submission', async () => {
    ;(requestInvitation as Mock).mockResolvedValueOnce({
      error: undefined,
    })

    renderComponent()

    await act(async () => {
      fireEvent.change(screen.getByLabelText('Full Name'), {
        target: { value: 'John Doe' },
      })
      fireEvent.change(screen.getByLabelText('Email'), {
        target: { value: 'john@example.com' },
      })
      fireEvent.change(screen.getByLabelText('Confirm Email'), {
        target: { value: 'john@example.com' },
      })

      fireEvent.click(screen.getByRole('button', { name: 'Send' }))
    })
    expect(onSuccess).toHaveBeenCalled()
    expect(onClose).toHaveBeenCalled()
  })
})
