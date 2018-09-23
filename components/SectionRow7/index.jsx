import React from 'react'
import styled from 'styled-components'

import { SectionDesktop } from '../Section'
import { SectionHeader } from '../SectionHeader'
import row7 from './row7.svg'

export const SectionRow7 = () =>
  <SectionDesktop bg={'white'}>
    <SectionHeader>
      Row 7 Seed Co
    </SectionHeader>
    <img src={row7} alt="" />
  </SectionDesktop>
