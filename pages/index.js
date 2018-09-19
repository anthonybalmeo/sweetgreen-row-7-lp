import React from 'react'

import styled, { injectGlobal } from 'styled-components'

import { Timeline } from '../components/Timeline'

import SweetlifeMedium from '../assets/fonts/Sweetlife-Medium.woff2'
import GothamBook from '../assets/fonts/Gotham-Book.woff2'

import salad from '../assets/salads.jpg'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default () =>
  <React.Fragment>
    <Title>sweetgreen</Title>
    <img src={salad} alt="a salad" />
    <Timeline />
  </React.Fragment>

injectGlobal`
  body, html {
    margin: 0;
    padding: 0;
    font-size: 16px;
    width: 100%;
    overflow-x: hidden;
    font-family: 'Gotham Book';
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

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
`;
