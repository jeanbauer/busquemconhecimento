import { useContext } from 'react'
import {
  withAuthentication,
  AuthUserContext
} from '../components/session/with-authentication'
import { doGoogleSignIn } from '../components/firebase/firestore'

const loginWithGoogle = () => {
  doGoogleSignIn().catch(error => {
    console.log('Auth error: ', error)
  })
}

export const HomeData = () => {
  const authUser = useContext(AuthUserContext)

  return <Home signIn={loginWithGoogle} user={authUser} />
}

export const Home = ({ user, signIn }) => (
  <>{!user && <button onClick={signIn}>Login with google</button>}</>
)

export default withAuthentication(HomeData)
