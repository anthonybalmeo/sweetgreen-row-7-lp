import React from 'react'
import styled from 'styled-components'
import theBowl from './bowl.jpg'
import roastedSquashFries from './roasted-squash-fries.jpg'
import arrives from './nov1.png'
import { config } from '../../config'

import { H1Mobile, P } from '../TypeElements'

const BowlContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const BowlColumns = styled.div`
  padding: 0 20px;
  width: 100%;

  & > h1 {
    font-family: 'Gotham Black';
    color: ${config.colors.green};
    font-size: 24px;
    letter-spacing: 2px;
    line-height: 34px;
    font-weight: normal;
    text-transform: uppercase;

    margin: 60px auto 15px;
    max-width: 375px;
  }

  & > p {
    font-size: 14px;
    line-height: 24px;
    margin: 15px auto;
    max-width: 375px;
  }
`

const ArrivingImg = styled.img`
  display: block;
  margin: 15px auto 0;
  src: url(${props => props.src});
  width: 212px;

  &.spacing-bottom {
    margin-bottom: 60px;
  }
`
const BowlImg = styled.img`
  display: block;
  src: url(${props => props.src});
  max-width: 375px;
  margin: 0 auto;
  width: 100%;
`

export const BowlMobile = () =>
  <BowlContainer>
    <BowlColumns>
      <BowlImg src={theBowl} alt='Koginut Squash Bowl' />
    </BowlColumns>
    <BowlColumns>
      <H1Mobile>Koginut Squash Bowl by Dan&nbsp;Barber sweetgreen x row 7</H1Mobile>
      <P>
        Roasted koginut squash, pears, sliced fennel, basil, local goat cheese,
        raw walnuts, toasted almonds, toasted buckwheat, organic wild rice, organic
        spinach, lemon squeeze, balsamic vinaigrette  (730 cal)
      </P>
      <ArrivingImg src={arrives} alt='Arrives Nov. 1st' className='spacing-bottom' />
    </BowlColumns>
    <BowlColumns>
      <BowlImg src={roastedSquashFries} alt='Roasted Squash Fries' />
    </BowlColumns>
    <BowlColumns>
      <H1Mobile>Roasted Squash Fries by Dan&nbsp;Barber sweetgreen x row 7</H1Mobile>
      <P>
        Roasted koginut squash, smoked goat cheese dip, toasted buckwheat, ground dried lime
      </P>
      <ArrivingImg src={arrives} alt='Arrives Nov. 1st' />
    </BowlColumns>
  </BowlContainer>

