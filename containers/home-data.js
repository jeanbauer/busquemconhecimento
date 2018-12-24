import { useContext } from 'react'
import {
  withAuthentication,
  AuthUserContext
} from '../components/session/with-authentication'
import { doGoogleSignIn } from '../components/firebase/firestore'
import Home from './home'

const loginWithGoogle = () => {
  doGoogleSignIn().catch(error => {
    console.log('Auth error: ', error)
  })
}

export const HomeData = () => {
  const authUser = useContext(AuthUserContext)

  return <Home signIn={loginWithGoogle} user={authUser} />
}

export default withAuthentication(HomeData)
