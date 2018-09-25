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
  &.width-55 {
    width: 55%;
  }

  &.width-45 {
    width: 45%;
  }

  &.spacing-left {
    padding-left: 30px;
  }

  & > h1 {
    font-family: 'Sweetlife Medium';
    font-weight: normal;
    letter-spacing: 1.6px;
    color: ${config.colors.green};
    font-size: 32px;
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
      <BowlColumns className='width-55'>
        <h1>Koginut Squash Bowl by Dan&nbsp;Barber sweetgreen x row 7</h1>
        <p>
          Roasted koginut squash, pears, sliced fennel, basil, local goat cheese,
          raw walnuts, toasted almonds, toasted buckwheat, organic wild rice, organic
          spinach, lemon squeeze, balsamic vinaigrette  (730 cal)
        </p>
        <ArrivingImg src={arrives} alt='Arrives Nov. 1st' />
      </BowlColumns>
      <BowlColumns className='width-45'>
        <BowlImg src={theBowl} alt='Koginut Squash Bowl' />
      </BowlColumns>
    </BowlContainer>
    <BowlContainer>
      <BowlColumns className='width-45'>
        <BowlImg src={roastedSquashFries} alt='Roasted Squash Fries' />
      </BowlColumns>
      <BowlColumns className='width-55 spacing-left'>
        <h1>Roasted Squash Fries by Dan&nbsp;Barber sweetgreen x row 7</h1>
        <p>
          Roasted koginut squash, smoked goat cheese dip, toasted buckwheat, ground dried lime 
        </p>
        <ArrivingImg src={arrives} alt='Arrives Nov. 1st' />
      </BowlColumns>
    </BowlContainer>
  </>

