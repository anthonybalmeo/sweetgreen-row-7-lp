import React from 'react'
import styled, { css } from 'styled-components'
import { config } from '../config'

export const desktopWrapperWidth = '1155px'
export const mobileWrapperWidth = '320px'

const SectionDesktopWrapper = styled.section`
  width: 100%;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  ${ props => props.bg && css`
    background: ${props.bg};
  `}
`

const SectionMobileWrapper = styled(SectionDesktopWrapper)`
  padding: 80px 0;
`

const SectionDesktopInner = styled.div`
  max-width: ${desktopWrapperWidth};
  width: 90%;
  padding: 25px;
`

const SectionMobileInner = styled.div`
  padding: 25px;
  width: 85%;
  min-width: ${mobileWrapperWidth};
`

export const SectionDesktop = ({ bg, children, className }) =>
  <SectionDesktopWrapper bg={bg} className={className}>
    <SectionDesktopInner>
      {children}
    </SectionDesktopInner>
  </SectionDesktopWrapper>

export const SectionMobile = ({ bg, children, className }) =>
  <SectionMobileWrapper bg={bg} className={className}>
    <SectionMobileInner>
      {children}
    </SectionMobileInner>
  </SectionMobileWrapper>
