import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Button from '../button'

describe('Button', () => {
  it('has props', () => {
    const { queryByText } = render(<Button>Clique aqui</Button>)

    expect(queryByText('Clique aqui')).not.toBeNull()
  })

  it('calls callback when clicked', () => {
    const callback = jest.fn()
    const { container } = render(
      <Button onClick={callback}>Clique aqui</Button>
    )

    fireEvent.click(container.firstChild)

    expect(callback).toHaveBeenCalledTimes(1)
  })
})
