import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { GreenButton } from './Button'
import { TabletAndDesktop, Mobile, Desktop } from './MediaQueries'

const Logo = styled.img`
  height: 24px;
  cursor: pointer;
`

const LinkWrapper = styled.div`
  justify-content: space-around;
  display: flex;
  align-items: center;
`

const A = styled.a`
  font-size: 12px;
  color: #1F4F46;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 30px;

  &, &:active, &:hover {
    text-decoration: none;
  }
`

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: white;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 20px;
  z-index: 9999;
`

export const Header = () =>
  <HeaderStyles>
    <Logo src={logo} onClick={() => window.location = 'https://order.sweetgreen.com/'} />

    <TabletAndDesktop>
      <LinkWrapper>
        <Desktop>
          <A href="#farm-partnership">Farmer Partners</A>
          <A href="#seed-to-sweetgreen">Seed to Sweetgreen</A>
          <A href="#bowl-section">The Bowl</A>
          <A href="#dan-barber">Dan Barber Letter</A>
        </Desktop>
        <GreenButton onClick={() => window.location = 'https://order.sweetgreen.com/'}>Order Now</GreenButton>
      </LinkWrapper>

    </TabletAndDesktop>

    <Mobile>
      <GreenButton onClick={() => window.location = 'https://order.sweetgreen.com/'}>Order Now</GreenButton>
    </Mobile>
  </HeaderStyles>
