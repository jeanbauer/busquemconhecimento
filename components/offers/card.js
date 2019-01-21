import styled from 'styled-components'
import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale('pt-br')

const categoryBadge = category => {
  switch (category) {
    case '1':
      return 'Técnico'
    case '2':
      return 'Justiça Social'
    default:
      return ''
  }
}

const knowledgeBadge = knowledge => {
  switch (knowledge) {
    case '1':
      return 'Quero aprender'
    case '2':
      return 'Já pratiquei'
    case '3':
      return 'Posso fazer'
    case '4':
      return 'Buscando liderança'
    case '5':
      return 'Líder'
    default:
      return ''
  }
}

const OfferCard = ({
  text,
  name,
  knowledge,
  category,
  observation,
  email,
  date
}) => (
  <Card id={email}>
    <Badge>{knowledgeBadge(knowledge)}</Badge>
    <CategoryBadge>{categoryBadge(category)}</CategoryBadge>
    <Title>{text} </Title>
    <Obs>{observation}</Obs>
    <Time>
      Por: {name} {moment(date).fromNow()}
    </Time>
  </Card>
)

export default OfferCard

const Obs = styled.p`
  max-width: 300px;
`

const Badge = styled.span`
  background: #ff78cb;
  color: #fff;
  padding: 0 8px;
  border-radius: 4px;
  font-size: 11px;
`

const CategoryBadge = styled(Badge)`
  background: #2196f3;
`

const Title = styled.p`
  font-family: 'Staatliches', cursive;
  padding-bottom: 7px;
  letter-spacing: 2px;
`

const Time = styled.p`
  font-weight: 300;
  font-size: 10px;
`

const Card = styled.div`
  background: #ffffff;
  padding: 10px;
  margin: 20px 20px 0 0;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    margin: 10px 0;
    padding: 10px;
  }
`
