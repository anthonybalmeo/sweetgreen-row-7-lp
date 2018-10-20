import React from 'react'
import styled from 'styled-components'
import america from './america.png'
import { config } from '../../config'

import { H1Mobile } from '../TypeElements'


const RowLessTraveledContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 100px;

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
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`

const RowLessTraveledSwiper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`

const RowLessTraveledListItem = styled.li`
  margin-bottom: 1px;
  margin-right: 10px;;
  float: left;
  display: inline-block;
  width: 250px;
  flex: 0 0 auto;
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


export const RowLessTraveledMobile = ({ rowLessTraveledData }) =>
  <RowLessTraveledContainer>
    <H1Mobile>
      Meet the six farmers taking the koginut squash from seed-to-sweetgreen
    </H1Mobile>
    <img src={america} alt='America' />
    <RowLessTraveledList>
      {
          rowLessTraveledData.map((data, i) => (
              <RowLessTraveledListItem key={i}>
                <RowLessTraveledIndex>{i + 1}</RowLessTraveledIndex>
                <RowLessTraveledParagraph>{data.title}</RowLessTraveledParagraph>
                <RowLessTraveledParagraph>{data.paragraph}</RowLessTraveledParagraph>
              </RowLessTraveledListItem>
            ))
          }
    </RowLessTraveledList>
  </RowLessTraveledContainer>
