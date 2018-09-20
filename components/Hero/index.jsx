import React from 'react'

import styled from 'styled-components'
import mainImage from './main-image.jpg'

import { MobileAndTablet, Desktop } from '../MediaQueries'

const MobileHeroWrapper = styled.div`
  background: url(${mainImage});
  height: 595px;
  background-size: 1070px;
  background-position: 820px;
`

const DesktopHeroWrapper = styled.div`
  background: url(${mainImage}) no-repeat center center;
  height: 800px;
  background-size: 100%;
`

export const MobileHero = () =>
  <MobileAndTablet>
    <MobileHeroWrapper>
      {/*  */}
    </MobileHeroWrapper>
  </MobileAndTablet>

export const DesktopHero = () =>
  <Desktop>
    <DesktopHeroWrapper>
      {/*  */}
    </DesktopHeroWrapper>
  </Desktop>

export const Hero = () =>
  <React.Fragment>
    <MobileHero />
    <DesktopHero />
  </React.Fragment>
