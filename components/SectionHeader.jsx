import React from 'react'
import { config } from '../config'
import styled from 'styled-components'

const SectionHeaderText = styled.div`
  font-family: 'Sweetlife Medium';
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${config.colors.green};
  margin-bottom: 40px;
`

const Line = styled.div`
  background: ${config.colors.green};
  height: 2px;
  width: 40px;
  margin-left: 1px;
  margin-top: 24px;
`

export const SectionHeader = ({ children }) =>
  <SectionHeaderText>
    {children}
    <Line />
  </SectionHeaderText>
