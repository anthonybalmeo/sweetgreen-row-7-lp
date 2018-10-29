import React from 'react'
import { RowLessTraveledDesktop } from './RowLessTraveledDesktop'
import { RowLessTraveledMobile } from './RowLessTraveledMobile'
import { Desktop, MobileAndTablet } from '../../components/MediaQueries'
import styled from 'styled-components'

import { SectionDesktop } from '../Section'
import { SectionHeader } from '../SectionHeader'
import { config } from '../../config'

const rowLessTraveledData = [
  {
    title: 'Pedersen Farms (NY)',
    paragraph: 'A Cornell Ag school graduate, Rick Pedersen is a true soil farmer who believes growing healthy soil is the key to productive yields and great flavor.',
  },
  {
    title: 'Ward’s Berry Farm (MA)',
    paragraph: 'Brothers Jim and Bob Ward love to grow winter squash (of which koginut is) and often use a “no till” system where the soil is left undisturbed, keeping organic matter healthy.',
  },
  {
    title: 'Cedar Meadow Farm (PA)',
    paragraph: 'Steve Groff has tended to his farm for over 25 years. An advocate of no-till farming—some of his fields have not been tilled in over 30 years.',
  },
  {
    title: 'Nichols Farm (IL)',
    paragraph: '30 years after planting a backyard family garden, Lloyd and Doreen Nichols, alongside their kids and grandchildren, now grow over 1,000 different fruits and vegetables.',
  },
  {
    title: 'Riverdog Farm (CA)',
    paragraph: 'Located on the outskirts of San Francisco, Tim Mueller’s organic crops thrive on 450 acres and provide seasonal food to his local community for over 25 years.',
  },
  {
    title: 'Weiser Family Farms (CA)',
    paragraph: 'Formerly an East L.A. chemistry teacher, Sid Weiser packed up his family in 1978 and moved to Tehachapi, California, where he’s dedicated to harvesting at peak ripeness.',
  },
]

const StyledSectionDesktop = styled(SectionDesktop)`
  .inner {
    padding-right: 0;
  }
`

export const SectionRowLessTraveled = () =>
  <StyledSectionDesktop bg='white' id="farm-partnership">
    <SectionHeader>
      The Row Less Traveled
    </SectionHeader>
    <MobileAndTablet>
      <RowLessTraveledMobile rowLessTraveledData={rowLessTraveledData} />
    </MobileAndTablet>
    <Desktop>
      <RowLessTraveledDesktop rowLessTraveledData={rowLessTraveledData} />
    </Desktop>
  </StyledSectionDesktop>
