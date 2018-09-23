import React from 'react'

import styled from 'styled-components'
import mainImage from './main-image.jpg'
import sgRow7Logo from './sg-row-7-logo.svg'
import future from './future.svg'
import play from '../../assets/play.svg'

import { desktopWrapperWidth, SectionMobile, SectionDesktop } from '../Section'

import { Mobile, TabletAndDesktop } from '../MediaQueries'
import { WhiteOutlineButton } from '../Button';

const SectionDesktopHero = styled(SectionDesktop)`
  background: url(${mainImage});
  background-size: cover;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SectionMobileHero = styled(SectionMobile)`
  background: url(${mainImage});
  height: 595px;
  background-size: 1070px;
  background-position: 820px;
`

const DesktopInner = styled.div`
  width: ${desktopWrapperWidth};
`

const Description = styled.p`
  font-family: Gotham Book,sans-serif, sans-serif;
  color: white;
  font-size: 16px;
  line-height: 32px;
  margin-top: 16px;
`

const DescriptionMobile = styled(Description)`
  font-size: 14px;
`

const Left = styled.div`
  width: 440px;
`

const Future = styled.img`
  margin-top: 16px;
`

const FutureMobile = styled.img`
  margin-top: 16px;
  width: 100%;
`

const SGRow7 = styled.img`
  width: 100%;
`

export const MobileHero = () =>
  <Mobile>
    <SectionMobileHero bg='none'>
      <SGRow7 src={sgRow7Logo} alt="" />
      <FutureMobile src={future} alt="" />
      <DescriptionMobile>
        This season, with the help of our friend and collaborator, Blue Hill Chef Dan Barber,
        and his visionary seed company Row 7, we challenged ourselves to think about flavor
        differently.
      </DescriptionMobile>
      <WhiteOutlineButton style={{ width: '140px' }}>Watch</WhiteOutlineButton>
    </SectionMobileHero>
  </Mobile>

export const DesktopHero = () =>
  <TabletAndDesktop>
    <SectionDesktopHero bg='none'>
      <Left>
        <img src={sgRow7Logo} alt="" />
        <Future src={future} alt="" />
        <Description>
          100,000 seeds. 6 farms. 1 quest to reimagine flavor. This season, we joined friend and
          food philosopher, Blue Hill Chef Dan Barber, and his visionary seed company Row 7, in
          thinking differently about the origin of flavor in our food. The result: the first ever
          seed-to-sweetgreen experience and a special squash bred for flavor from the seed.
        </Description>
      </Left>

      <img src={play} onClick={() => { window.alert('play video') }} />
    </SectionDesktopHero>
  </TabletAndDesktop>

export const SectionHero = () =>
  <React.Fragment>
    <MobileHero />
    <DesktopHero />
  </React.Fragment>
