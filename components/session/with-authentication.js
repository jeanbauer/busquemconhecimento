import { auth } from '../firebase/firestore'

export const AuthUserContext = React.createContext(null)

export const userEmailIsFromOurCompany = (
  email,
  companyEmailDomain = process.env.COMPANY_EMAIL_ADDRESS
) => email.indexOf(companyEmailDomain) > 0

export const withAuthentication = Component =>
  class WithAuthentication extends React.Component {
    state = { authUser: null }

    componentDidMount() {
      auth.onAuthStateChanged(authUser => {
        if (authUser && userEmailIsFromOurCompany(authUser.email)) {
          this.setState({
            authUser: {
              name: authUser.displayName,
              email: authUser.email
            }
          })
        } else {
          this.setState(() => ({ authUser: null }))
        }
      })
    }

    render() {
      const { authUser } = this.state

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      )
    }
  }
