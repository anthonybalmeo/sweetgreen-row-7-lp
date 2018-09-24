import React from 'react'
import styled from 'styled-components'

import theBowl from './bowl.jpg'
import arrives from './nov11.png'
import { config } from '../../config'

const BowlContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const BowlColumns = styled.div`
  &:first-child {
    width: 55%;
  }

  &:last-child {
    width: 45%;
  }

  & > h1 {
    color: ${config.colors.green};
    font-size: 32px;
    max-width: 400px;
  }

  & > p {
    font-size: 14px;
    line-height: 24px;
    width: 450px;
  }
`

const ArrivingImg = styled.img`
  src: url(${props => props.src});
  width: 212px;
`
const BowlImg = styled.img`
  src: url(${props => props.src});
  max-width: 566px;
  width: 100%;
`

export const BowlDesktop = () =>
  <BowlContainer>
    <BowlColumns>
      <h1>Koginut Squash Bowl by Dan&nbsp;Barber sweetgreen x row 7</h1>
      <p>
        Roasted koginut squash, pears, sliced fennel, basil, local goat cheese,
        raw walnuts, toasted almonds, toasted buckwheat, organic wild rice, organic
        spinach, lemon squeeze, balsamic vinaigrette  (730 cal)
      </p>
      <ArrivingImg src={arrives} alt='Arrives Nov. 1st' />
    </BowlColumns>
    <BowlColumns>
      <BowlImg src={theBowl} alt='Arrives Nov. 1st' />
    </BowlColumns>
  </BowlContainer>

