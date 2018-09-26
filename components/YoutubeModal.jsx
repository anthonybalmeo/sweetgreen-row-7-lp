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
  z-index: 100;
`

const Video = styled.iframe`
  margin: 5%;
  height:48%;
  width:64%;
  border: none;
  box-shadow: 0 5px 36px black;
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
            <Video allowFullScreen="allowFullScreen" type="text/html" src={`https://www.youtube.com/embed/${this.props.id}?autoplay=1`} frameBorder="0" />
          </Closer>
        </>
      }
    </>
  }

}
