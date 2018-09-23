import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { GreenButton } from './Button'
import { TabletAndDesktop, Mobile } from './MediaQueries'

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

    <TabletAndDesktop>
      <GreenButton>Order Now</GreenButton>
    </TabletAndDesktop>

    <Mobile>
      <GreenButton>Order Now</GreenButton>
    </Mobile>
  </HeaderStyles>
