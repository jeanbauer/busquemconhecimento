import React from 'react'
import { render } from 'react-testing-library'

jest.mock('../../firebase/events', () => jest.fn())
import Offers from '../offers'

describe('Offers', () => {
  describe('when user is not logged in', () => {
    const authUser = null

    it('doesnt show offers', () => {
      const { queryByText } = render(<Offers user={authUser} />)

      expect(queryByText(/Oportunidades para aprender/i)).toBeNull()
      expect(queryByText(/Oportunidades para ensinar/i)).toBeNull()
    })
  })

  describe('when user is logged in', () => {
    const authUser = {
      name: 'jean',
      email: 'jean@jean'
    }

    it('shows offers', () => {
      const { getByText } = render(<Offers user={authUser} />)

      expect(getByText(/Pessoas querendo aprender/i)).not.toBeNull()
    })
  })
})
