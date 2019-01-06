import React from 'react'
import { cleanup, render, fireEvent } from 'react-testing-library'

import Home from '../home'

jest.mock('../../components/offers/offer-selector', () => 'offer-selector')
jest.mock('../../components/offers/offers', () => 'offers')

describe('Home', () => {
  const googleButtonText = /login with google/i

  describe('When user is logged in', () => {
    const authUser = {
      name: 'jean',
      email: 'jean@jean'
    }

    it('do not render gmail login button', () => {
      const { queryByText } = render(<Home user={authUser} />)

      expect(queryByText(googleButtonText)).toBeNull()
    })
  })

  describe('When user is not logged in', () => {
    afterEach(cleanup)

    it('renders gmail login button', () => {
      const { getByText } = render(<Home user={null} />)

      expect(getByText(googleButtonText)).not.toBeNull()
    })

    it('calls google sign in when button is clicked', () => {
      const doGoogleSignIn = jest.fn()
      const { getByText } = render(<Home signIn={doGoogleSignIn} user={null} />)
      const loginButton = getByText(googleButtonText)

      fireEvent.click(loginButton)

      expect(doGoogleSignIn).toHaveBeenCalledTimes(1)
    })
  })
})
