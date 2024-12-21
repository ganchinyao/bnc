import { vi } from 'vitest'
import '@testing-library/jest-dom'

// Mock react-hook-form globally
vi.mock('react-hook-form', async () => {
  const originalModule = await vi.importActual('react-hook-form')
  return {
    ...originalModule,
    useFormContext: vi.fn(),
    useForm: vi.fn(() => ({
      register: vi.fn(),
      handleSubmit: vi.fn((fn) => fn),
      formState: { isSubmitting: false },
      reset: vi.fn(),
    })),
    FormProvider: ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    ),
  }
})

global.console.error = (...args) => {
  /**
   * Avoid jsdom error message after submitting a form
   * https://github.com/jsdom/jsdom/issues/1937
   */
  const errorMessage = 'Not implemented: HTMLFormElement.prototype.submit'
  if (args && args[0].includes(errorMessage)) {
    return false
  }

  return true
}
