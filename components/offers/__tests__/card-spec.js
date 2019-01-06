import React from 'react'
import { render } from 'react-testing-library'

jest.mock('../../firebase/events', () => jest.fn())
jest.mock('../../session/with-authentication', () => jest.fn())

import OfferCard from '../card'

describe('OfferCard', () => {
  describe('when it renders', () => {
    const props = {
      text: 'I wanna learn how to improve my testing skills',
      name: 'Jean',
      observation: 'I took Kent C Dodds course on javascriptesting',
      email: 'jean@jean',
      date: new Date()
    }

    it('shows props', () => {
      const { getByText } = render(<OfferCard {...props} />)

      expect(
        getByText(/I wanna learn how to improve my testing skills/i)
      ).not.toBeNull()
      expect(getByText(/Jean/i)).not.toBeNull()
      expect(
        getByText(/I took Kent C Dodds course on javascriptesting/i)
      ).not.toBeNull()
    })
  })
})
