import styled from 'styled-components'
import { config } from '../config'

export const Button = styled.button`
  font-family: 'Sweetlife Medium';
  border-radius: 4px;
  background: white;
  color: ${config.colors.green};
  height: 32px;
  line-height: 36px;
  text-transform: uppercase;
  letter-spacing: 2px;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0 10px;
`

export const GreenButton = styled(Button)`
  color: white;
  background: ${config.colors.green};
`
