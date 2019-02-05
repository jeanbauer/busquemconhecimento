import { useContext } from 'react'
import {
  withAuthentication,
  AuthUserContext
} from '../components/session/with-authentication'
import { login } from '../components/firebase/firestore'
import Home from './home'

export const HomeData = () => {
  const authUser = useContext(AuthUserContext)

  return <Home signIn={login} user={authUser} />
}

export default withAuthentication(HomeData)
