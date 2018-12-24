import React from 'react'
import { render } from 'react-testing-library'

import IndexComponent from '../index'

describe('IndexComponent', () => {
  it('renders page title "Bilu"', () => {
    const { getByText } = render(<IndexComponent />)

    expect(getByText('Bilu')).not.toBeNull()
  })
})
