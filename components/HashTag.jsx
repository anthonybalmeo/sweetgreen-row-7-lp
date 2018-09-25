import styled from 'styled-components'
import { config } from '../config'

export const HashTagStyles = styled.div`
  font-family: 'Gotham Book';
  padding: 40px 0;
  width: 100%;
  font-size: 32px;
  font-weight: 900;
  text-align: center;
  background: #213D36;

  a, a:visited, a:hover, a:active {
    text-decoration: none;
    color: white;
  }
`

export const HashTag = () => <HashTagStyles>
  <a href='https://twitter.com/search?f=tweets&q=%23SGXROW7&src=typd' target='_blank'>#SGXROW7</a>
</HashTagStyles>
