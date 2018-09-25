import React from 'react'
import { CommunityDesktop } from './CommunityDesktop'
import { CommunityMobile } from './CommunityMobile'

import { config } from '../../config'

import { MobileAndTablet, Desktop } from '../MediaQueries'

import { SectionDesktop } from '../Section'
import { SectionHeader } from '../SectionHeader'

export const CommunitySection = () =>
  <SectionDesktop bg={config.colors.pageGray} id="communitySection">
    <SectionHeader>
      Commmunity
    </SectionHeader>
    <MobileAndTablet>
      <CommunityMobile />
    </MobileAndTablet>
    <Desktop>
      <CommunityDesktop />
    </Desktop>
  </SectionDesktop>
