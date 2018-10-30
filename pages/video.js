import { withRouter } from 'next/router'
import Link from 'next/link'


import styled from 'styled-components'

const VideoComponent = styled.iframe`
  height:85%;
  width:85%;
  border: none;
  box-shadow: 0 5px 36px black;
`

const Close = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  font-family: 'Gotham Medium';
  z-index: 250;
  color: white;
  font-size: 13px;
  cursor: pointer;
`

export const VideoComponentContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`

const Video = withRouter((props) => (
  <React.Fragment>
    <Link href='/'>
      <VideoComponentContainer>
        <Link href='/'>
          <Close>CLOSE</Close>
        </Link>
        <VideoComponent allowFullScreen="allowFullScreen" type="text/html" src={`https://www.youtube.com/embed/${props.router.query.id}?autoplay=1`} frameBorder="0" />
      </VideoComponentContainer>
    </Link>
  </React.Fragment>
))

export default Video