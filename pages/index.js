import React from 'react'

import styled, { injectGlobal } from 'styled-components'

import { TimelineMobile } from '../components/TimelineMobile'

import SweetlifeMedium from '../assets/fonts/Sweetlife-Medium.woff2'
import GothamBook from '../assets/fonts/Gotham-Book.woff2'
import FlamaCondensed from '../assets/fonts/FlamaCondensed-Medium.woff2'
import { Mobile } from '../components/MediaQueries'

import salad from '../assets/salads.jpg'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`
const HeaderImg = styled.img`
  src: url(${props => props.src});
  margin-bottom: 10rem;
`
export default () =>
  <React.Fragment>
    <Title>sweetgreen</Title>
    <HeaderImg src={salad} />
    <Mobile>
      <TimelineMobile />
    </Mobile>
  </React.Fragment>

injectGlobal`
  body, html {
    margin: 0;
    padding: 0;
    font-size: 16px;
    width: 100%;
    overflow-x: hidden;
    font-family: 'Gotham Book';
    background: #F8F8F6;
  }

  @font-face {
    font-family: 'Sweetlife Medium';
    src: url('${SweetlifeMedium}') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham Book';
    src: url('${GothamBook}') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Flama Condensed';
    src: url('${FlamaCondensed}') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
`;
