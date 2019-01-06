import { render, fireEvent } from 'react-testing-library'
import { useFormField } from '../hooks'

describe('Hooks', () => {
  describe('useFormField with input', () => {
    it('should set value and listen to type event', () => {
      const { container } = render(<input {...useFormField} />)
      const input = container.firstChild

      fireEvent.change(input, { target: { value: 'abc' } })

      expect(input.value).toBe('abc')
    })
  })
})
