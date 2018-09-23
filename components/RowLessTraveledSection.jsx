import React from 'react'
import styled from 'styled-components'

import { SectionDesktop } from './Section'
import { SectionHeader } from './SectionHeader'
import { config } from '../config'

export const RowLessTraveledSection = () =>
  <SectionDesktop bg={config.colors.pageGray}>
    <SectionHeader>
      The Row Less Traveled
    </SectionHeader>
  </SectionDesktop>
