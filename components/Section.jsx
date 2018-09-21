import React from 'react'
import styled from 'styled-components'
import { config } from '../config'

// width: 1155px

const SectionDesktopWrapper = styled.section`
  width: 100%;
  padding: 80px 0;
  display: flex;
  justify-content: center;

  background: ${props => props.white ? 'white' : config.colors.pageGray};
`

const SectionDesktopInner = styled.div`
  width: 1155px;
`

export const SectionDesktop = ({ white, children }) =>
  <SectionDesktopWrapper white={white}>
    <SectionDesktopInner>
      {children}
    </SectionDesktopInner>
  </SectionDesktopWrapper>


// // width: 85%
// // min-width: 320px;
// export const Mobile = () =>
