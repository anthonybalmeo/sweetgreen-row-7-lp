import React from 'react'
import styled from 'styled-components'

import videoPreview from '../assets/video-preview.jpg'

const VideoLockupWrapper = styled.div`
  width: 370px;
`

const VideoContainer = styled.div`
  height: 208px;
  margin-bottom: 16px;

  img {
    width: 100%;
  }
`

const Title = styled.p`
  margin-bottom: 16px;
`

const Body = styled.p`

`

const Watch = styled.p`
  margin-bottom: 16px;
`

export const VideoLockup = () =>
  <VideoLockupWrapper>
    <VideoContainer>
      <img src={videoPreview} alt="" />
    </VideoContainer>

    <Title>
      Koginut Squash Bowl by Row 7  - 6:07
    </Title>

    <Body>
      These cases are perfectly simple and easy to distinguish.
      In a free hour, when our power of choice is untrammelled
      and when nothing prevents our…
    </Body>

    <Watch>
      Watch
    </Watch>
  </VideoLockupWrapper>
