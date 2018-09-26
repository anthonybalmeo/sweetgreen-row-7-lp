import React from 'react'

import styled from 'styled-components'
import mainImage from './main-image.jpg'
import sgRow7Logo from './sg-row-7-logo.svg'
import future from './100.svg'
import play from '../../assets/play.svg'

import { SectionMobileInner, SectionDesktopInner } from '../Section'

import { Mobile, TabletAndDesktop } from '../MediaQueries'
import { WhiteOutlineButton } from '../Button';
import { YouTubeModal } from '../YoutubeModal';

const SectionDesktopHero = styled.div`
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${mainImage}) no-repeat center center;
  background-size: cover;

  width: 100%;
  padding: 80px 0;
  position: relative;
  `

const SectionMobileHero = styled.div`
  background: url(${mainImage});
  background-size: 1070px;
  background-position: 900px;
  background-size: cover;
  padding: 56px 0;
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

const Play = styled.img`
  position: absolute;
  top: 45%;
  left: 70%;
  cursor:pointer;
`

const Spacer = styled.div`
  height: 70px;
`

const copy = `
This season, we joined friend and food philosopher, Blue Hill chef Dan Barber, and his
visionary seed company Row 7, in thinking differently about the origin of flavor in our food.
The result: the first-ever seed-to-sweetgreen experience and a special Row 7 squash bred for
flavor, headlining sg menus across the country. In stores 11/1.`

export const MobileHero = () =>
  <SectionMobileHero>
    <SectionMobileInner>
      <SGRow7 src={sgRow7Logo} alt="" />
      <FutureMobile src={future} alt="" />
      <DescriptionMobile>
        {copy}
      </DescriptionMobile>
      <YouTubeModal id='t5JuuZ6thXk'>
        <WhiteOutlineButton style={{ width: '140px' }}>Watch Now</WhiteOutlineButton>
      </YouTubeModal>
    </SectionMobileInner>
  </SectionMobileHero>

export const DesktopHero = () =>
  <SectionDesktopHero>
    <SectionDesktopInner>
      <Left>
        <img src={sgRow7Logo} alt="" />
        <Future src={future} alt="" />
        <Description>
          {copy}
        </Description>
        <YouTubeModal id='t5JuuZ6thXk'>
          <WhiteOutlineButton style={{ width: '140px' }}>Watch Now</WhiteOutlineButton>
        </YouTubeModal>
      </Left>

      <YouTubeModal id='t5JuuZ6thXk'>
        <Play src={play} />
      </YouTubeModal>
    </SectionDesktopInner>
  </SectionDesktopHero>

export const SectionHero = () =>
  <React.Fragment>
    <Spacer />
    <Mobile>
      <MobileHero />
    </Mobile>

    <TabletAndDesktop>
      <DesktopHero />
    </TabletAndDesktop>

  </React.Fragment>
