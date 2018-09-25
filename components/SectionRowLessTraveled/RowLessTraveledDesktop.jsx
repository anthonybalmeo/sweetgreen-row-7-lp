import React from 'react'
import styled from 'styled-components'
import america from './america.png'
import { config } from '../../config'

const RowLessTraveledWrapper = styled.div`
  padding-bottom: 100px;
`

const RowLessTraveledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const RowLessTraveledListContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const RowLessTraveledDoubleColumn = styled.div`
  width: 50%;
  & > img {
    max-width: 566px;
    width: 100%;
  }

  & > p {
    font-size: 16px;
    line-height: 32px;
    padding-right: 60px;
  }
`
const RowLessTraveledTripleColumn = styled.div`
  width: 33.333%;
  margin-bottom: 60px;
  padding-right: 30px;
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


export const RowLessTraveledDesktop = (props) => {
  const {
    rowLessTraveledData,
  } = props

  return (
    <RowLessTraveledWrapper>
      <RowLessTraveledContainer>
      <RowLessTraveledDoubleColumn>
          <p>
            From the moment we learned about what Dan Barber and his Row 7 partners,
            plant breeder Michael Mazourek and seedsman Matthew Goldfarb, were up to
            in the kitchen and field, we knew we wanted in. We ordered 100,000 Robin’s
            Koginut Squash seeds before the company even launched, and planted them
            at six of our finest farms across the country. The result: an exceptionally
            sweet, long-storing squash harvested and cured for peak flavor, headlining
            sweetgreen menus across the country. Meet our family of Koginut farmers below.
          </p>
        </RowLessTraveledDoubleColumn>
      <RowLessTraveledDoubleColumn>
          <img src={america} alt='America' />
        </RowLessTraveledDoubleColumn>
      </RowLessTraveledContainer>
      <RowLessTraveledListContainer>
      {
        rowLessTraveledData.map((data, i) => (
          <RowLessTraveledTripleColumn key={i}>
            <RowLessTraveledIndex>{i+1}</RowLessTraveledIndex>
            <RowLessTraveledTitle>{data.title}</RowLessTraveledTitle>
            <RowLessTraveledParagraph>{data.paragraph}</RowLessTraveledParagraph>
          </RowLessTraveledTripleColumn>
        ))
      }
      </RowLessTraveledListContainer>
    </RowLessTraveledWrapper>
  )
}