import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { GreenButton } from './Button'
import { TabletAndDesktop, Mobile, Desktop } from './MediaQueries'

const Logo = styled.img`
  height: 24px;
`

const LinkWrapper = styled.div`
  width: 800px;
  justify-content: space-around;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    justify-content: flex-end;
  }
`

const A = styled.a`
  font-size: 12px;
  color: #1F4F46;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;

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
    <Logo src={logo} />

    <TabletAndDesktop>

      <LinkWrapper>
        <Desktop>
          <A href="#row7Section">Row 7 Seed Co</A>
          <A href="#farmPartnerShip">Farm Partnership</A>
          <A href="#seedToSweetgreen">Seed to Sweetgreen</A>
        </Desktop>
        <GreenButton onClick={() => window.location = 'https://order.sweetgreen.com/'}>Order Now</GreenButton>
      </LinkWrapper>

    </TabletAndDesktop>

    <Mobile>
      <GreenButton onClick={() => window.location = 'https://order.sweetgreen.com/'}>Order Now</GreenButton>
    </Mobile>
  </HeaderStyles>
