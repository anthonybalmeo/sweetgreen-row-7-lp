import React from 'react'

import styled from 'styled-components'
import sgRow7Logo from './sg-row-7-logo.svg'
import future from './100.svg'
import play from '../../assets/play.svg'
import Link from 'next/link'

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
  width: 450px;
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

const SpacerMed = styled.div`
  height: 32px;
`

const Video = styled.video`
  position: absolute;
  top: 0;
  height: 100%;
  left: -340px;
  z-index: 1;

  @media only screen and (min-width: 500px) {
    & {
      left: -20%;
    }
  }

  @media only screen and (min-width: 600px) {
    & {
      left: auto;
    }
  }

  @media only screen and (min-width: 1500px) {
    & {
      height: auto;
      width: 100%;
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
This season, we joined Blue Hill chef Dan Barber and seed company Row 7 in thinking differently about the origin of flavor in our food. The result: the first-ever seed-to-sweetgreen experience and an exceptional Row 7 squash bred for flavor. In stores 11/1.`


const zStyle = { position: 'relative', zIndex: 2 }

export const MobileHero = () =>
  <SectionMobileHero>
    <Video autoPlay muted loop playsInline>
      <source src='/static/farm.mp4' type="video/mp4" />
    </Video>
    <SectionMobileInner>
      <SGRow7 src={sgRow7Logo} alt="" style={zStyle}/>
      <H1White style={zStyle}>
        100,000 seeds. <br/> 6 farms. 1 quest to reimagine flavor.
      </H1White>
      <Link href='/video?id=VHsOTo6BEJM'>
        <WhiteOutlineButton style={{ width: '140px', ...zStyle }}>Watch The Film</WhiteOutlineButton>
      </Link>
      <DescriptionMobile style={zStyle}>
        {copy}
      </DescriptionMobile >
    </SectionMobileInner>
  </SectionMobileHero>

export const DesktopHero = () =>
  <SectionDesktopHero>
    <Video autoPlay muted loop>
      <source src='/static/farm.mp4' type="video/mp4" />
    </Video>

    <SectionDesktopInner>
      <Left>
        <img src={sgRow7Logo} alt="" style={zStyle}/>
        <H1LargeWhite style={zStyle}>
          100,000 seeds. <br/> 6 farms. 1 quest to reimagine flavor.
        </H1LargeWhite>
        <Description style={zStyle}>
          {copy}
        </Description>
          <Link href='/video?id=VHsOTo6BEJM'>
          <WhiteOutlineButton style={{ width: '140px', ...zStyle }}>Watch The Film</WhiteOutlineButton>
          </Link>
      </Left>

      <Desktop>
        <Link href='/video?id=VHsOTo6BEJM'>
          <Play src={play} className='play' style={{ zIndex: 2 }}/>
        </Link>
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
