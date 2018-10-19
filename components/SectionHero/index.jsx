import React from 'react'

import styled from 'styled-components'
import sgRow7Logo from './sg-row-7-logo.svg'
import future from './100.svg'
import play from '../../assets/play.svg'

import { SectionMobileInner, SectionDesktopInner } from '../Section'

import { Mobile, TabletAndDesktop, Desktop } from '../MediaQueries'
import { WhiteOutlineButton } from '../Button';
import { YouTubeModal } from '../YoutubeModal';
import { H1Large, H1, P } from '../TypeElements';

const SectionDesktopHero = styled.div`
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  `

const SectionMobileHero = styled.div`
  position: relative;
  overflow: hidden;
`

const Description = styled(P)`
  color: white;
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
  left: 50%;
  cursor:pointer;
`

const Spacer = styled.div`
  height: 70px;
`

const Video = styled.video`
  position: absolute;
  top: 0;
  height: 100%;
  left: -20%;
  z-index: 1;

  @media only screen and (min-width: 600px) {
    & {
      left: -10%;
      right: -10%;
      height: auto;
    }
  }

  @media only screen and (min-width: 1100px) {
    & {
      width: 110%;
    }
  }
`

const H1LargeWhite = styled(H1Large)`
  color: white;
`

const H1White = styled(H1)`
  color: white;
`

const copy = `
This season, we joined friend and food philosopher, Blue Hill chef Dan Barber, and his visionary seed
company Row 7, in thinking differently about the origin of flavor in our food. The result: the first-ever
seed-to-sweetgreen experience and a special Row 7 squash bred for flavor. In stores 11/1.`

export const MobileHero = () =>
  <SectionMobileHero>
    <Video autoPlay muted loop playsInline>
      <source src='/static/farm.mp4' type="video/mp4" />
    </Video>
    <SectionMobileInner style={{ position: 'relative', zIndex: 2 }}>
      <SGRow7 src={sgRow7Logo} alt="" />
      <H1White>
        100,000 seeds. 6 farms. 1 quest to reimagine flavor.
      </H1White>
      <DescriptionMobile>
        {copy}
      </DescriptionMobile>
      <YouTubeModal id='t5JuuZ6thXk'>
        <WhiteOutlineButton style={{ width: '140px' }}>Watch The Film</WhiteOutlineButton>
      </YouTubeModal>
    </SectionMobileInner>
  </SectionMobileHero>

export const DesktopHero = () =>
  <SectionDesktopHero>
    <Video autoPlay muted loop>
      <source src='/static/farm.mp4' type="video/mp4" />
    </Video>

    <SectionDesktopInner style={{ position: 'relative', zIndex: 2 }}>
      <Left>
        <img src={sgRow7Logo} alt="" />
        <H1LargeWhite>
          100,000 seeds. 6 farms. 1 quest to reimagine flavor.
        </H1LargeWhite>
        <Description>
          {copy}
        </Description>
        <YouTubeModal id='t5JuuZ6thXk'>
          <WhiteOutlineButton style={{ width: '140px' }}>Watch The Film</WhiteOutlineButton>
        </YouTubeModal>
      </Left>

      <Desktop>
        <YouTubeModal id='t5JuuZ6thXk'>
          <Play src={play} className='play' />
        </YouTubeModal>
      </Desktop>

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
