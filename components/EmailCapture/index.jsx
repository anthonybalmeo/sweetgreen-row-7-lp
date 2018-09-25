import React from 'react'
import styled from 'styled-components'

import envelope from './envelope.svg'
import asterisk from './asterisk.svg'

import MailchimpSubscribe from "react-mailchimp-subscribe"
import { config } from '../../config';

const url = "//sweetgreen.us5.list-manage.com/subscribe/post?u=935cde8faa405d2d908226449&amp;id=e1d0c747e3";

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: white;
`

const Input = styled.input`
  font-family: 'Gotham Book';
  font-size: 16px;
  border: none;
  border-radius: 0;
  outline: none;
  border-bottom: 3px solid white;
  color: white;
  padding-bottom: 5px;
  padding-top: 15px;
  align-self: flex-end;
  transition: border-bottom 0.25s ease;
  background: transparent;
  -webkit-appearance: none;

  width: 70%;
  margin-right: 8px;

  &::placeholder {
    color: #f6f6f6;
  }
`

const Button = styled.button`
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

const InputWrapper = styled.div`
  position: relative;
  margin: 60px auto;
  width: 90%;
  max-width: 470px;

  @media (min-width: 1100px) {
    margin-top: 64px;
  }
`

const Envelope = styled.img`
  position: absolute;
  left: 2px;
  bottom: 10px;
  display: none;

  @media (min-width: 1100px) {
    bottom: 48px;
    display: block;
  }
`

const Asterisk = styled.img`
  display: inline-block;
  margin-right: 16px;
  vertical-align: middle;

  @media (min-width: 1100px) {
    margin-bottom: 40px;
    display: block;
  }
`

const FreshWrap = styled.div`
  margin-top: 32px;;

  &.pinned-to-bottom {
    @media (min-width: 1100px) {
      position: absolute;
      bottom: 0;
    }
  }
`

const Fresh = ({ className }) =>
  <FreshWrap className={className}>
    <Paragraph>
      <Asterisk src={asterisk} alt="" />
      Fresh! We’ll reach out to you asap.
    </Paragraph>
  </FreshWrap>

export const EmailCapture = ({ inputStyle = {}, freshClass }) =>
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => {
      let email;
      return (
        <form onSubmit={async e => {
          e.preventDefault();
          subscribe({ EMAIL: email });
        }}>
          {
            status === "success" || status === 'error' ?
              <Fresh className={freshClass} /> :
              (
                <InputWrapper style={{ ...inputStyle, ...{ opacity: status === "sending" ? 0.2 : 1 } }}>
                  <Envelope src={envelope} alt="" />
                  <Input type="email" name='email' placeholder="Enter email for exclusives" onChange={e => email = e.target.value} />
                  <Button type="submit">sign up</Button>
                </InputWrapper>
              )
          }
        </form>)
    }}
  />
