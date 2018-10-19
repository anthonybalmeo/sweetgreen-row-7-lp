import React from 'react'
import styled, { css } from 'styled-components'
import { config } from '../../config'

import { SectionDesktop } from '../Section'
import { SectionHeader } from '../SectionHeader'
import { YouTubeModal } from '../YoutubeModal'

import video1 from './video-1.jpg'
import video2 from './video-2.jpg'
import video3 from './video-3.jpg'

const data = [
  {
    title: 'The Future is Flavor - 6:07',
    image: video1,
    description: 'Where is flavor born? Watch as we join forces with Dan Barber, and his visionary seed company Row 7, to think differently about the origin of flavor in our food.',
  },
  {
    title: 'Flavor Profile: Dan Barber - 6:07',
    image: video2,
    description: `Michelin-starred Chef, star of Netflix's Chef Table, author, and farm-to-table frontrunner Dan Barber on how millennial appetites for authenticity are shaping the future of food.`,
  },
  {
    title: 'The Sweetgreen Supply Chain - 6:07',
    image: video3,
    description: 'A behind the seeds look at the farmers and field operatives connecting people to real food at scale.',
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
  width: 340px;
  margin-right: 20px;
`

const Image = styled.img`
  width: 350px;
`

const Title = styled.h2`
  font-family: Gotham Book;
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
`

export const SectionBehindTheSeeds = () =>
  <SectionDesktop>
    <SectionHeader>
      Behind the Seeds
    </SectionHeader>

    <VideoContainer>
      {
        data.map(v => <VideoWrapper>
          <YouTubeModal id='t5JuuZ6thXk'><Image src={v.image}/></YouTubeModal>
          <Title>{v.title}</Title>
          <Description>{v.description}</Description>
          <YouTubeModal><Watch>Watch</Watch></YouTubeModal>
        </VideoWrapper>)
      }
    </VideoContainer>
  </SectionDesktop>
