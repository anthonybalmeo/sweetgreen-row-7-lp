import React from 'react'
import styled from 'styled-components'

import theBowl from './bowl.jpg'
import roastedSquashFries from './roasted-squash-fries.jpg'
import arrives from './nov1.png'
import { config } from '../../config'

const BowlContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  &.spacing-bottom {
    margin-bottom: 80px;
  }
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
    font-size: 30px;
    margin-top: 0;
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
  <>
    <BowlContainer className='spacing-bottom'>
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
        <BowlImg src={theBowl} alt='Koginut Squash Bowl' />
      </BowlColumns>
    </BowlContainer>
    <BowlContainer>
      <BowlColumns>
        <BowlImg src={roastedSquashFries} alt='Roasted Squash Fries' />
      </BowlColumns>
      <BowlColumns>
        <h1>Roasted Squash Fries by Dan&nbsp;Barber sweetgreen x row 7</h1>
        <p>
          Roasted koginut squash, smoked goat cheese dip, toasted buckwheat, ground dried lime 
        </p>
        <ArrivingImg src={arrives} alt='Arrives Nov. 1st' />
      </BowlColumns>
    </BowlContainer>
  </>

