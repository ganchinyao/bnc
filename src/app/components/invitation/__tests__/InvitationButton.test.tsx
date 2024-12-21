import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { InvitationButton } from '@/app/components/invitation/InvitationButton'

vi.mock('@/app/components/invitation/InvitationModal', () => ({
  InvitationModal: ({ isOpen }: { isOpen: boolean }) =>
    isOpen ? <div data-testid="invitation-modal">Invitation Modal</div> : null,
}))

vi.mock('@/app/components/invitation/SuccessModal', () => ({
  SuccessModal: ({ isOpen }: { isOpen: boolean }) =>
    isOpen ? <div data-testid="success-modal">Success Modal</div> : null,
}))

describe('InvitationButton', () => {
  it('should render the button', () => {
    render(<InvitationButton />)
    const button = screen.getByRole('button', {
      name: /request an invitation/i,
    })
    expect(button).toBeInTheDocument()
  })

  it('should open the invitation modal when the button is clicked', () => {
    render(<InvitationButton />)
    const button = screen.getByRole('button', {
      name: /request an invitation/i,
    })

    expect(screen.queryByTestId('invitation-modal')).not.toBeInTheDocument()
    fireEvent.click(button)
    expect(screen.queryByTestId('invitation-modal')).toBeInTheDocument()
  })
})
