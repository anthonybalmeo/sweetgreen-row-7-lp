import React from 'react'
import { config } from '../config'
import styled from 'styled-components'
import { MobileAndTablet, Desktop } from './MediaQueries'

const SectionHeaderTextDesktop = styled.div`
  font-family: 'Sweetlife Medium';
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${config.colors.green};
  margin-bottom: 40px;
`

const SectionHeaderTextMobile = styled.div`
  font-family: 'Sweetlife Medium';
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${config.colors.green};
  margin: 0 auto 40px;
  max-width: 375px;
  width: 100%;
`

const Line = styled.div`
  background: ${config.colors.green};
  height: 2px;
  width: 40px;
  margin-left: 1px;
  margin-top: 24px;
`

export const SectionHeader = ({ children }) =>
  <>
    <Desktop>
      <SectionHeaderTextDesktop>
        {children}
        <Line />
      </SectionHeaderTextDesktop>
    </Desktop>
    <MobileAndTablet>
    <SectionHeaderTextMobile>
      {children}
      <Line />
    </SectionHeaderTextMobile>
  </MobileAndTablet>
  </>