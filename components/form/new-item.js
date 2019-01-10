import styled from 'styled-components'

import { saveOnFirestore } from '../firebase/events'
import { useFormField } from '../hooks/hooks'
import Button from '../button/button'

const NewItem = ({ item, onCreate, user }) => {
  if (!item) return null

  const field = useFormField('')
  const knowledge = useFormField('1')
  const observations = useFormField('')

  const content = {
    learn: {
      title: 'Eu quero aprender',
      firstQuestion: 'O que você quer aprender?',
      button: 'Quero aprender'
    },
    teach: {
      title: 'Eu quero ensinar',
      firstQuestion: 'O que você quer ensinar?',
      button: 'Quero ensinar'
    }
  }

  const saveDisabled = !field.value

  return (
    <ItemForm>
      <ItemTitle>{content[item].title}</ItemTitle>

      <ItemGroup>
        <label>{content[item].firstQuestion}</label>
        <ItemInput {...field} />
      </ItemGroup>

      <ItemGroup>
        <label>Qual é o grau de conhecimento que você possui nisto?</label>
        <ItemSelect {...knowledge}>
          <option value='1'>Quero aprender</option>
          <option value='2'>Já pratiquei</option>
          <option value='3'>Posso fazer</option>
          <option value='4'>Buscando liderança</option>
          <option value='5'>Líder</option>
        </ItemSelect>
      </ItemGroup>

      <ItemGroup>
        <label>Observações</label>
        <ItemInput {...observations} />
      </ItemGroup>

      <Button
        disabled={saveDisabled}
        onClick={() => {
          saveOnFirestore(item, {
            text: field.value,
            knowledge: knowledge.value,
            observation: observations.value,
            user
          })

          onCreate()
        }}
      >
        {content[item].button}
      </Button>
    </ItemForm>
  )
}

export default NewItem

const ItemSelect = styled.select`
  height: 40px;
  border: 1px solid #ecbcbf;
  background: white;
  border-radius: 4px;
  font-size: 16px;
`

const ItemGroup = styled.div`
  width: 60vw;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const ItemInput = styled.input`
  padding: 10px;
  border: 1px solid #ecbcbf;
  border-radius: 4px;
  font-size: 16px;
`

const ItemForm = styled.div`
  margin-top: 50px;
  display: flex;
  background: #fff1ed;
  text-align: center;
  flex-direction: column;
  align-items: center;
`

const ItemTitle = styled.p`
  color: #ff4143;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 40px;
  font-family: 'Staatliches', cursive;
`
