import styled from 'styled-components'
import logo from '../assets/logo.svg'

import { GreenButton } from './Button'

const Logo = styled.img`
  height: 24px;
`

const HeaderStyles = styled.header`
  background: white;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 20px;
`

export const Header = () =>
  <HeaderStyles>
    <Logo src={logo} />
    <GreenButton>Order Now</GreenButton>
  </HeaderStyles>
