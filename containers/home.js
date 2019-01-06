import styled from 'styled-components'
import OfferSelector from '../components/offer-selector/offer-selector'

const Home = ({ user, signIn }) => (
  <Content>
    {!user && <button onClick={signIn}>Login with google</button>}

    <OfferSelector user={user} />
  </Content>
)

const Content = styled.div`
  font-family: ${({ theme }) => theme.textFont};
`

export default Home
