import React from 'react'
import { BowlDesktop } from './BowlDesktop'
import { BowlMobile } from './BowlMobile'

import { MobileAndTablet, Desktop } from '../MediaQueries'

import { SectionDesktop } from '../Section'
import { SectionHeader } from '../SectionHeader'

export const BowlSection = () =>
  <SectionDesktop white={false}>
    <SectionHeader>
      The Bowl
    </SectionHeader>
    <MobileAndTablet>
      <BowlMobile />
    </MobileAndTablet>
    <Desktop>
      <BowlDesktop />
    </Desktop>
  </SectionDesktop>
