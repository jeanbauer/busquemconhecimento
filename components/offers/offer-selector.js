import React, { useState } from 'react'
import styled from 'styled-components'

import LearnSvg from '../svg/learn'
import TeachSvg from '../svg/teach'

import NewItem from '../form/new-item'
import Button from '../button/button'

const OfferSelector = ({ user }) => {
  const [creatingItem, setCreatingItem] = useState(null)

  if (!user) return null

  return (
    <>
      <BannersOffer>
        <Banner>
          <LearnSvg />
          <Button onClick={() => setCreatingItem('learn')}>
            Quero aprender
          </Button>
        </Banner>

        <Banner>
          <TeachSvg />
          <Button onClick={() => setCreatingItem('teach')}>
            Quero ensinar
          </Button>
        </Banner>
      </BannersOffer>

      <NewItem
        user={user}
        item={creatingItem}
        onCreate={() => setCreatingItem(null)}
      />
    </>
  )
}

const BannersOffer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Banner = styled.div`
  padding-top: 25px;
  display: flex;
  background: #ffefede6;
  width: 45%;
  flex-direction: column;
  align-items: center;
`

export default OfferSelector
