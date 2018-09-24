import React from 'react'
import styled from 'styled-components'
import america from './america.png'
import { config } from '../../config'

const RowLessTraveledContainer = styled.div`
  padding-bottom: 60px;
  max-width: 375px;
  margin: 0 auto;

  & > img {
    display: block;
    margin: 40px auto;
    max-width: 328px;
    width: 100%;
  }

  & > p {
    font-size: 16px;
    line-height: 32px;
  }
`
const RowLessTraveledList = styled.ul`
`
const RowLessTraveledListItem = styled.li`
  margin-bottom: 40px;
`

const RowLessTraveledTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 10px;
`
const RowLessTraveledParagraph = styled.div`
  font-size: 16px;
  line-height: 32px;
`
const RowLessTraveledIndex = styled.div`
  background-color: ${config.colors.green};
  border-radius: 50%;
  text-align: center;
  line-height: 25px;
  color: white;
  font-size: 11px;
  height: 24px;
  width: 24px;
  margin-bottom: 10px;
`


export const RowLessTraveledMobile = (props) => {
  const {
    rowLessTraveledData,
  } = props

  return (
    <RowLessTraveledContainer>
        <p>
            From the moment we learned about what Dan Barber and his Row 7 partners,
          plant breeder Michael Mazourek, and seedsman Matthew Goldfarb, were up to
          in the kitchen + field, we knew we wanted in. We ordered 100,000 Robin’s
          Koginut Squash seeds before the company even launched, and planted them at
          six of our finest farms across the country. The result: a sweet, storable
          squash with a built-in ripeness indicator harvested and cured for peak ripeness,
          headlining sweetgreen menus across the country. Meet our family of koginut farmers below.
        </p>
        <img src={america} alt='America' />
      <RowLessTraveledList>
      {
        rowLessTraveledData.map((data, i) => (
          <RowLessTraveledListItem key={i}>
            <RowLessTraveledIndex>{i+1}</RowLessTraveledIndex>
            <RowLessTraveledTitle>{data.title}</RowLessTraveledTitle>
            <RowLessTraveledParagraph>{data.paragraph}</RowLessTraveledParagraph>
          </RowLessTraveledListItem>
        ))
      }
      </RowLessTraveledList>
    </RowLessTraveledContainer>
  )
}