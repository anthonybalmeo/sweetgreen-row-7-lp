import styled from 'styled-components'
import { config } from '../config'

export const H1 = styled.h1`
  font-family: 'Gotham Black';
  color: ${config.colors.green};
  font-size: 32px;
  letter-spacing: 4px;
  line-height: 42px;
  text-transform: uppercase;
  font-weight: normal;
`

export const H1Large = styled.h1`
  font-family: 'Gotham Black';
  color: ${config.colors.green};
  font-size: 40px;
  letter-spacing: 4px;
  line-height: 42px;
  text-transform: uppercase;
  font-weight: normal;
`

export const H1Mobile = styled(H1)`
  font-family: 'Gotham Black';
  color: ${config.colors.green};
  font-size: 32px;
  letter-spacing: 4px;
  line-height: 42px;

`

export const P = styled.p`
  font-size: 16px;
  line-height: 24px;
`
