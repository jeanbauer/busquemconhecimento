import React from 'react'
import { render } from 'react-testing-library'

import IndexComponent from '../index'

describe('IndexComponent', () => {
  it('renders a string paragraph showing "Fácil Assim?"', () => {
    const { getByText } = render(<IndexComponent />)

    expect(getByText('Fácil assim?')).not.toBeNull()
  })
})
