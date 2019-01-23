import styled from 'styled-components'
import moment from 'moment'
import 'moment/locale/pt-br'
moment.locale('pt-br')

import { deleteOffer } from '../firebase/events'

const categoryBadge = category => {
  switch (category) {
    case '1':
      return 'Técnico'
    case '2':
      return 'Justiça Social'
    case '3':
      return 'Consultoria'
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
  date,
  canDelete,
  id,
  type
}) => (
  <Card id={email}>
    <div>
      <Badge>{knowledgeBadge(knowledge)}</Badge>
      <CategoryBadge>{categoryBadge(category)}</CategoryBadge>
      {canDelete && (
        <DeleteIcon
          onClick={() => deleteOffer(id, type)}
          title='Excluir'
          aria-label='Excluir'
        >
          ❌
        </DeleteIcon>
      )}
    </div>
    <Title>{text} </Title>
    <Obs>{observation}</Obs>
    <Time>
      Por: {name} {moment(date).fromNow()}
    </Time>
  </Card>
)

export default OfferCard

const DeleteIcon = styled.span`
  position: absolute;
  right: 0;
  cursor: pointer;
`

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
  min-width: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  div:first-child {
    position: relative;
    width: 100%;

    span:not(:first-child) {
      margin-left: 5px;
    }
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    padding: 10px;
  }
`
