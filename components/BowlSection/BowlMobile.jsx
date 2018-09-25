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
`
const BowlColumns = styled.div`
  padding: 0 20px;
  width: 100%;

  & > h1 {
    color: ${config.colors.green};
    font-size: 30px;
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
  margin: 15px auto 60px;
  src: url(${props => props.src});
  width: 212px;
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
      <h1>Koginut Squash Bowl by Dan&nbsp;Barber sweetgreen x row 7</h1>
      <p>
        Roasted koginut squash, pears, sliced fennel, basil, local goat cheese,
        raw walnuts, toasted almonds, toasted buckwheat, organic wild rice, organic
        spinach, lemon squeeze, balsamic vinaigrette  (730 cal)
      </p>
      <ArrivingImg src={arrives} alt='Arrives Nov. 1st' />
    </BowlColumns>
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

