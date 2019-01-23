import React from 'react'
import { render, cleanup } from 'react-testing-library'

jest.mock('../../firebase/events', () => jest.fn())
jest.mock('../../session/with-authentication', () => jest.fn())

import OfferCard from '../card'

describe('OfferCard', () => {
  const props = {
    text: 'I wanna learn how to improve my testing skills',
    name: 'Jean',
    observation: 'I took Kent C Dodds course on javascriptesting',
    knowledge: '1',
    email: 'jean@jean',
    date: new Date()
  }

  afterEach(cleanup)

  describe('when it renders', () => {
    it('shows props', () => {
      const { getByText } = render(<OfferCard {...props} />)

      expect(
        getByText(/I wanna learn how to improve my testing skills/i)
      ).not.toBeNull()
      expect(getByText(/Jean/i)).not.toBeNull()
      expect(
        getByText(/I took Kent C Dodds course on javascriptesting/i)
      ).not.toBeNull()
      expect(getByText(/Quero aprender/i))
    })
  })

  describe('when user is the card owner', () => {
    it('shows delete button', () => {
      const { getByLabelText } = render(<OfferCard {...props} canDelete />)

      expect(getByLabelText(/excluir/i)).not.toBeNull()
    })
  })

  describe('when user is not the card owner', () => {
    it('dont show delete button', () => {
      const { queryByLabelText } = render(
        <OfferCard {...props} canDelete={false} />
      )

      expect(queryByLabelText(/excluir/i)).toBeNull()
    })
  })
})
