import React from 'react'
import { BowlDesktop } from './BowlDesktop'
import { BowlMobile } from './BowlMobile'

import { config } from '../../config'

import { MobileAndTablet, Desktop } from '../MediaQueries'

import { SectionDesktop } from '../Section'
import { SectionHeader } from '../SectionHeader'

export const BowlSection = () =>
  <SectionDesktop bg='white' id="bowl-section">
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
