import styled from 'styled-components'
import OfferSelector from '../components/offers/offer-selector'
import Offers from '../components/offers/offers'

const Home = ({ user, signIn }) => (
  <Content>
    {!user && <button onClick={signIn}>Login with google</button>}

    <OfferSelector user={user} />

    <Offers user={user} />
  </Content>
)

const Content = styled.div`
  font-family: ${({ theme }) => theme.textFont};
`

export default Home
