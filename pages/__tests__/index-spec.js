import React from 'react'
import { render } from 'react-testing-library'

jest.mock('../../containers/home', () => () => <div>Home</div>)

import IndexComponent from '../index'

describe('IndexComponent', () => {
  it('renders page title "Bilu"', () => {
    const { getByText } = render(<IndexComponent />)

    expect(getByText(/bilu/i)).not.toBeNull()
  })
})
