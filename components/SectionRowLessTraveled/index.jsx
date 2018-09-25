import React from 'react'
import { RowLessTraveledDesktop } from './RowLessTraveledDesktop'
import { RowLessTraveledMobile } from './RowLessTraveledMobile'
import { Desktop, MobileAndTablet } from '../../components/MediaQueries'

import { SectionDesktop } from '../Section'
import { SectionHeader } from '../SectionHeader'
import { config } from '../../config'

const rowLessTraveledData = [
  {
    title: 'Pedersen Farms (NY)',
    paragraph: 'Family-owned and operated in the Central Finger Lakes region of upstate New York since 1983, owners Rick and Laura Pederson farm 600 acres of certified organic land. A Cornell Ag school graduate, Rick is a true soil farmer who believes growing healthy soil is the key to productive yields and great flavor.',
  },
  {
    title: 'Ward’s Berry Farm (MA)',
    paragraph: 'Longtime sweetgreen partners, brothers Jim and Bob Ward, have run this farm together since 1985. Jim loves to grow winter squash (of which koginut is) and often uses a “no till” system where the soil is left undisturbed before planting, a system which keeps precious organic matter intact and healthy.	',
  },
  {
    title: 'Cedar Meadow Farm (PA)',
    paragraph: 'Following childhood dreams of joining the family business, Steve Groff has tended to his farm for over 25 years. What started as a hay and grain operation in 1935 has transformed into a mecca for tomatoes, sweet corn, pumpkins, and now the koginut squash. An advocate of no-till farming—some of his fields have not been tilled in over 30 years!',
  },
  {
    title: 'Nichols Farm (IL)',
    paragraph: 'Lloyd and Doreen Nichols had a passion for gardening, so in 1978 they planted a backyard family garden. Soon, Lloyd’s vision of becoming self-sustained moved the family to their first 10 acre parcel where they bought animals, made butter and cheese, and planted a small orchard. 30 years later, Lloyd’s sons and grandchildren work and live on 300 acre farm, growing over 1,000 different fruits and vegetables.',
  },
  {
    title: 'Riverdog Farm (CA)',
    paragraph: 'In 1991, Tim Mueller forayed into farming with a rented two acres in Napa Valley. 5 years later, he relocated to Capay Valley in Yolo County, where the hot summer months and frosty winters enhance crop flavor. Just outside of San Francisco, his crops now grow on 450 acres of certified organic land and provide seasonal food to his local community for over 25 years.',
  },
  {
    title: 'Weiser Family Farm (CA)',
    paragraph: 'Formerly an East L.A. chemistry teacher, Sid Weiser packed up his family in 1978 and moved to Northern California to work the land. Now operated by his children, the farm is dedicated to using sustainable and biodiverse farming techniques and harvesting exclusively at peak ripeness.',
  },
]

export const SectionRowLessTraveled = () =>
  <SectionDesktop bg={config.colors.pageGray} id="farmPartnerShip">
    <SectionHeader>
      The Row Less Traveled
    </SectionHeader>
    <MobileAndTablet>
      <RowLessTraveledMobile rowLessTraveledData={rowLessTraveledData} />
    </MobileAndTablet>
    <Desktop>
      <RowLessTraveledDesktop rowLessTraveledData={rowLessTraveledData} />
    </Desktop>
  </SectionDesktop>
