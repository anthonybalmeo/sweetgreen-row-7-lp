import React from 'react'
import styled from 'styled-components'

import { SectionDesktop } from './Section'
import { SectionHeader } from './SectionHeader'
import { VideoLockup } from './VideoLockup'

const VideoLockupWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

export const WatchAndLearnSection = () =>
  <SectionDesktop>
    <SectionHeader>
      Watch and Learn
    </SectionHeader>

    <VideoLockupWrapper>
      <VideoLockup />
      <VideoLockup />
      <VideoLockup />
    </VideoLockupWrapper>
  </SectionDesktop>
