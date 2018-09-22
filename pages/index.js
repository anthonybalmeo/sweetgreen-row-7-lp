import React from 'react'

import styled, { injectGlobal } from 'styled-components'
import { config } from '../config'

import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Timeline } from '../components/Timeline'
import { CommunitySection } from '../components/CommunitySection'
import { Footer } from '../components/Footer'
import { WatchAndLearnSection } from '../components/WatchAndLearnSection'
import { Row7Section } from '../components/Row7Section'
import { RowLessTraveledSection } from '../components/RowLessTraveledSection'
import { BowlSection } from '../components/BowlSection'

import SweetlifeMedium from '../assets/fonts/Sweetlife-Medium.woff2'
import GothamBook from '../assets/fonts/Gotham-Book.woff2'
import FlamaCondensed from '../assets/fonts/FlamaCondensed-Medium.woff2'

export default () =>
  <React.Fragment>
    <Header />
    <Hero />
    <WatchAndLearnSection />
    <Row7Section />
    <RowLessTraveledSection />
    <Timeline />
    <BowlSection />
    <CommunitySection />
    <Footer />
  </React.Fragment>

injectGlobal`
  body, html {
    margin: 0;
    padding: 0;
    font-size: 16px;
    width: 100%;
    overflow-x: hidden;
    font-family: 'Gotham Book';

    color: ${config.colors.grayText};
    background: ${config.colors.pageGray};
  }

  ul {
    padding-left: 0;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
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
