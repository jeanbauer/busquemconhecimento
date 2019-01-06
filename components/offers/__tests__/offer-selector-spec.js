import React from 'react'
import { render } from 'react-testing-library'

jest.mock('../../form/new-item', () => 'new-item')

import OffersSelector from '../offer-selector'

describe('OffersSelector', () => {
  describe('when user is not logged in', () => {
    const authUser = null

    it('doesnt show options', () => {
      const { queryByText } = render(<OffersSelector user={authUser} />)

      expect(queryByText(/quero aprender/i)).toBeNull()
      expect(queryByText(/quero ensinar/i)).toBeNull()
    })
  })

  describe('when user is logged in', () => {
    const authUser = {
      name: 'jean',
      email: 'jean@jean'
    }

    it('shows the two available options', () => {
      const { getByText } = render(<OffersSelector user={authUser} />)

      expect(getByText(/quero aprender/i)).not.toBeNull()
      expect(getByText(/quero ensinar/i)).not.toBeNull()
    })
  })
})
