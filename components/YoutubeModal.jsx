import React from 'react'
import styled from 'styled-components'

export const Closer = styled.div`
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

const Video = styled.iframe`
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

export class YouTubeModal extends React.Component {

  openModal() {
    this.setState({ showModal: true })
  }

  closeModal() {
    this.setState({ showModal: false })
  }

  state = {}

  render() {
    return <>
      <div onClick={() => this.openModal()}>
        {this.props.children}
      </div>

      {
        this.state.showModal && <>
          <Closer onClick={() => this.closeModal()} >
            <Close>
              CLOSE
            </Close>
            <Video allowFullScreen="allowFullScreen" type="text/html" src={`https://www.youtube.com/embed/${this.props.id}?autoplay=1`} frameBorder="0" />
          </Closer>
        </>
      }
    </>
  }

}
