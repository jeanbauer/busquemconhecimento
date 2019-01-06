import styled from 'styled-components'
import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale('pt-br')

const OfferCard = ({ text, name, observation, email, date }) => (
  <Card id={email}>
    <Title>{text}</Title>
    <p>{observation}</p>
    <Time>
      Por: {name} {moment(date).fromNow()}
    </Time>
  </Card>
)

export default OfferCard

const Title = styled.p`
  font-family: 'Staatliches', cursive;
  border-bottom: 1px solid;
  padding-bottom: 7px;
`

const Time = styled.p`
  font-weight: 300;
  font-size: 12px;
`

const Card = styled.div`
  background: #ffffff;
  padding: 20px;
  margin: 20px 20px 0 0;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);

  @media (max-width: 768px) {
    margin: 10px 0;
    padding: 10px;
  }
`
