import React from 'react'
import { render } from 'react-testing-library'

jest.mock('../../firebase/events', () => jest.fn())
jest.mock('../../session/with-authentication', () => jest.fn())

import NewItem from '../new-item'

describe('NewItem', () => {
  describe('When item is to learn', () => {
    it('Eu quero aprender', () => {
      const onCreate = jest.fn()
      const { getByText } = render(<NewItem item='learn' onCreate={onCreate} />)

      expect(getByText(/eu quero aprender/i)).not.toBeNull()
    })
  })

  describe('When item is to teach', () => {
    it('Eu quero ensinar', () => {
      const onCreate = jest.fn()
      const { getByText } = render(<NewItem item='teach' onCreate={onCreate} />)

      expect(getByText(/eu quero ensinar/i)).not.toBeNull()
    })
  })
})
