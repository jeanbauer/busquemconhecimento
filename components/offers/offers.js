/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-wrap-multilines */

import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { subscribe } from '../firebase/events'
import Card from './card'

const Offers = ({ user }) => {
  const [learn, setLearn] = useState([])
  const [teach, setTeach] = useState([])
  const [activeTab, setActiveTab] = useState('learn')

  if (!user) return null

  function fetchData() {
    subscribe('learn', setLearn)
    subscribe('teach', setTeach)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Panel>
        <Tab
          active={activeTab === 'learn'}
          onClick={() => setActiveTab('learn')}
        >
          <p>Pessoas querendo aprender</p>
        </Tab>
        <Tab
          active={activeTab === 'teach'}
          onClick={() => setActiveTab('teach')}
        >
          <p>Pessoas querendo ensinar</p>
        </Tab>
      </Panel>

      {activeTab === 'learn' && (
        <CardsList>
          {learn.map(e => (
            <Card key={e.date} {...e} />
          ))}
        </CardsList>
      )}

      {activeTab === 'teach' && (
        <CardsList>
          {teach.map(e => (
            <Card key={e.date} {...e} />
          ))}
        </CardsList>
      )}
    </>
  )
}

export default Offers

const CardsList = styled.div`
  display: flex;
  padding: 50px;
  margin: 0 50px;
  background: #fff1ed;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    padding: 10px;
  }
`

const Tab = styled.div`
  background-color: ${props => (props.active ? '#ff4143' : 'white')};
  transition: background-color 1s;

  &:hover {
    background: #ff4143;

    p {
      color: white;
    }
  }

  p {
    letter-spacing: 4px;
    color: ${props => (props.active ? 'white' : '#ff4143')};
    font-family: 'Staatliches', cursive;
  }
`

const Panel = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;

  > div {
    cursor: pointer;
    text-align: center;
    width: 45%;
    border-bottom: 2px solid #ff4143;

    @media (max-width: 768px) {
      width: 50%;
    }
  }
`
