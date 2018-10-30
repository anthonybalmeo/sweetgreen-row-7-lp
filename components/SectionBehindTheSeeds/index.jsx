import React from 'react'
import styled, { css } from 'styled-components'
import { config } from '../../config'
import Link from 'next/link'

import { SectionDesktop } from '../Section'
import { SectionHeader } from '../SectionHeader'
import { YouTubeModal } from '../YoutubeModal'

import video1 from './video-1.jpg'
import video2 from './video-2.jpg'
import video3 from './video-3.jpg'

const data = [
  {
    title: 'The Future is Flavor',
    video: {
      id: 'dJVJzleHNq4',
      length: '4:17',
      image: video1
    },
    description: 'Where is flavor born? Watch as we join forces with Dan Barber, and his visionary seed company Row 7, to think differently about the origin of flavor in our food.',
    link: '/video?id=dJVJzleHNq4',
  },
  {
    title: 'Flavor Profile: Dan Barber',
    video: {
      id: 'ctnuWBhq0XY',
      length: '1:29',
      image: video2
    },
    description: `Michelin-starred Chef, star of Netflix's Chef Table, author, and farm-to-table frontrunner Dan Barber on how millennial appetites for authenticity are shaping the future of food.`,
    link: '/video?id=ctnuWBhq0XY',
  },
  {
    title: 'The Sweetgreen Supply Chain',
    video: {
      id: 'giWg4pBAG2Q',
      length: '1:19',
      image: video3
    },
    description: 'A behind the seeds look at the farmers and field operatives connecting people to real food at scale.',
    link: '/video?id=giWg4pBAG2Q',
  }
]

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: space-between;
  -webkit-overflow-scrolling: touch;
`

const VideoWrapper = styled.div`
  margin-right: 20px;

  &:last-child {
    padding-right: 25px;
  }
`

const Image = styled.img`
  cursor: pointer;
  width: 250px;

  @media only screen and (min-width: 600px) {
    width: 350px;
  }
`

const Title = styled.p`
  font-family: Gotham Medium;
  color: #707070;
  font-size: 16px;
`

const Description = styled.p`
  font-size: 14px;
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 44px;
`

const Watch = styled.a`
  font-family: 'Sweetlife Medium';
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${config.colors.green};
  cursor: pointer;
`

const StyledSectionDesktop = styled(SectionDesktop)`
  .inner {
    padding-right: 0;
  }
`

export const SectionBehindTheSeeds = () =>
  <StyledSectionDesktop>
    <SectionHeader>
      Behind the Seeds
    </SectionHeader>

    <VideoContainer>
      {
        data.map(v => <VideoWrapper>
          <Link href={v.link}><Image src={v.video.image}/></Link>
          <Title>{v.title} - {v.video.length}</Title>
          <Description>{v.description}</Description>
          <Link href={v.link}><Watch>Watch</Watch></Link>
        </VideoWrapper>)
      }
    </VideoContainer>
  </StyledSectionDesktop>
