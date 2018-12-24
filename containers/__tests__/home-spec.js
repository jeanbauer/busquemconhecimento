import React from 'react'
import { render } from 'react-testing-library'

import Home from '../home'

describe('Home', () => {
  it('renders gmail login button', () => {
    const { getByText } = render(<Home />)

    expect(getByText('Login with google')).not.toBeNull()
  })
})
