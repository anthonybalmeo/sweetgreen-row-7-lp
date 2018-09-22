import React from 'react'
import { CommunityDesktop } from './CommunityDesktop'
import { CommunityMobile } from './CommunityMobile'

import { MobileAndTablet, Desktop } from '../MediaQueries'

import { SectionDesktop } from '../Section'
import { SectionHeader } from '../SectionHeader'

export const CommunitySection = () =>
  <SectionDesktop white={true}>
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
