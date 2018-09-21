import React from 'react'

import styled from 'styled-components'
import mainImage from './main-image.jpg'
import sgRow7Logo from './sg-row-7-logo.svg'
import future from './future.svg'

import { desktopWrapperWidth } from '../Section'

import { MobileAndTablet, Desktop } from '../MediaQueries'

const data = {
  body: `100,000 seeds. 6 farms. 1 quest to reimagine flavor. This season, we joined friend and food philosopher, Blue Hill Chef Dan Barber, and his visionary seed company Row 7, in thinking differently about the origin of flavor in our food. The result: the first ever seed-to-sweetgreen experience and a special squash bred for flavor from the seed.`
}

const MobileHeroWrapper = styled.div`
  background: url(${mainImage});
  height: 595px;
  background-size: 1070px;
  background-position: 820px;
`

const DesktopHeroWrapper = styled.div`
  background: url(${mainImage}) no-repeat center center;
  background-size: cover;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const DesktopInner = styled.div`
  width: ${desktopWrapperWidth};
`

const Text = styled.div`
  font-family: Gotham Book,sans-serif, sans-serif;
  color: white;
  font-size: 16px;
  line-height: 32px;
  margin-top: 16px;
`

const Left = styled.div`
  width: 440px;
`

const Future = styled.img`
  margin-top: 16px;
`

export const MobileHero = () =>
  <MobileAndTablet>
    <MobileHeroWrapper>
      <img src={sgRow7Logo} alt="" />
      <Future src={future} alt="" />
      <Text>{data.body}</Text>
    </MobileHeroWrapper>
  </MobileAndTablet>

export const DesktopHero = () =>
  <Desktop>
    <DesktopHeroWrapper>
      <DesktopInner>
        <Left>
          <img src={sgRow7Logo} alt="" />
          <Future src={future} alt="" />
          <Text>{data.body}</Text>
        </Left>
      </DesktopInner>
    </DesktopHeroWrapper>
  </Desktop>

export const Hero = () =>
  <React.Fragment>
    <MobileHero />
    <DesktopHero />
  </React.Fragment>
