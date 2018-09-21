import React from 'react';
import styled, { injectGlobal } from 'styled-components'

import android from '../assets/mobile-android.svg'
import ios from '../assets/mobile-ios.svg'
import footerLogo from '../assets/footer-logo.svg'

import insta from '../assets/social-insta.svg'
import twitter from '../assets/social-twitter.svg'
import fb from '../assets/social-fb.svg'
import youtube from '../assets/social-youtube.svg'

import { EmailCapture } from './EmailCapture'

injectGlobal`
  #footer-global .footer-logo path,#footer-global .link-android .inline-icon path,#footer-global .link-ios .inline-icon path,#footer-global .social-link path{
    fill:#fff
  }

  #footer-global{
    background:#1f4f46
  }
  #footer-global a:focus{
    outline:#32b593 solid .125rem
  }
  #footer-global .footer-logo{
    width:13.25rem;
    height:1.92813rem
  }
  #footer-global .footer-social li{
    display:inline-block
  }
  #footer-global .footer-social li:not(:last-of-type){
    margin-right:1.5rem
  }
  #footer-global .text-link{
    border-bottom:0
  }
  @media screen and (max-width:45em){
    #footer-global .footer-links,#footer-global .footer-social{
        margin-bottom:2.5rem
    }
    #footer-global .footer-links li:not(:last-of-type){
        margin-bottom:1.25rem
    }
  }
  #footer-global .footer-links li:not(:first-of-type){
    position:relative
  }
  @media screen and (min-width:45.063em){
    #flash-view{
        top:4.5rem
    }
    #footer-global .footer-links li{
        display:inline-block
    }
    #footer-global .footer-links li:not(:last-of-type){
        margin-right:1.5rem
    }
    #footer-global .footer-links li:not(:first-of-type):before{
        content:'\00b7';
        font-size:1.25em;
        color:#fff;
        opacity:.5;
        position:absolute;
        left:-.75rem;
        line-height:1em;
        margin-top:-.0625rem;
        margin-left:-.25rem
    }
  }
  #footer-global .social-link{
    border-color:rgba(255,255,255,.16)
  }
  #footer-global .social-link:focus,#footer-global .social-link:hover{
    border-color:#fff
  }
  #footer-global .link-android,#footer-global .link-ios{
    border-bottom:0;
    margin-left:.1875rem
  }
  #footer-global .link-android .inline-icon,#footer-global .link-ios .inline-icon{
    font-size:1.15em;
    vertical-align:middle;
    margin-right:.1875rem
  }
  #footer-global .link-android span:not(.inline-icon),#footer-global .link-ios span:not(.inline-icon){
    border-bottom:.0625rem solid #e5e5e5
  }

  .social-link,.social-link svg{
    -webkit-transition:all .3s cubic-bezier(.215,.61,.355,1);
    -o-transition:all .3s cubic-bezier(.215,.61,.355,1);
    transition:all .3s cubic-bezier(.215,.61,.355,1)
  }

  .social-link{
    display:block;
    width:3rem;
    height:3rem;
    border-radius:50%;
    border:.0625rem solid #e5e5e5
  }
  .social-link svg{
      position:absolute;
      top:50%;
      left:50%;
      -webkit-transform:translateX(-50%) translateY(-50%);
      -ms-transform:translateX(-50%) translateY(-50%);
      transform:translateX(-50%) translateY(-50%)
  }
  .social-link svg path{
      fill:#1f4f46
  }
  .social-link:hover{
      border-color:#1f4f46;
      -webkit-transition:all 150ms cubic-bezier(.215,.61,.355,1);
      -o-transition:all 150ms cubic-bezier(.215,.61,.355,1);
      transition:all 150ms cubic-bezier(.215,.61,.355,1)
  }
  .social-link.instagram svg{
      width:39%
  }
  .social-link.facebook svg{
      width:18%
  }
  .social-link.twitter svg{
      width:37.5%
  }
  .social-link.tumblr svg{
      width:22.7%
  }
  .social-link.youtube svg{
      width:37.5%
  }
  .social-link.snapchat svg{
      width:41.2%
  }

  .nav-link,.navbar .nav-menu-name_top,[class*=text-link]{
    font-family: 'Sweetlife Medium';
    font-size:.75rem;
    letter-spacing:.1667em;
    text-transform:uppercase;
    text-decoration:none;
    line-height:1.5;
    color:#1f4f46;
    cursor:pointer;
    transition:all .3s cubic-bezier(.57,.06,.05,.95)
  }
  .nav-link:hover,.navbar .nav-menu-name_top:hover,[class*=text-link]:hover{
      color:#000;
      transition:color 150ms cubic-bezier(.57,.06,.05,.95);
      opacity:.85
  }
  .light.nav-link,.light[class*=text-link],.navbar .light.nav-menu-name_top{
      color:#fff;
  }

  .paddings{
    padding-top:5rem;
    padding-bottom:5rem
  }

  ol, ul {
    list-style: none;
  }

  .center {
    text-align: center;
  }

  .p-small{
    font-size:.75rem;
  }

  p.light {
    color: #fff;
  }

  .inline-icon img{
    display:inline-block;
    height:1em;
    width:auto;
  }

  #footer-global .link-android span:not(.inline-icon), #footer-global .link-ios span:not(.inline-icon) {
    border-bottom: .0625rem solid #e5e5e5;
  }

  #footer-global .link-android, #footer-global .link-ios {
    color: white;
    margin: 0 8px;
  }
`

export class Footer extends React.Component {

  state = {
    show: false
  }

  componentDidMount() {
    setTimeout(() => this.setState({ show: true }), 250)
  }

  render() {
    return !this.state.show ? <React.Fragment /> : <footer id="footer-global" role="contentinfo" className="">
      <div className="footer-inner paddings center">
        <img src={footerLogo} alt="sweetgreen logo" />
        <ul className="footer-links top-margin quarter">
          <li>
            <a
              className="text-link light"
              href="http://order.sweetgreen.com"
              target="new"
            >
              Order
          </a>
          </li>
          <li>
            <a
              className="text-link light"
              href="http://www.sweetgreen.com/faqs"
              target="new"
            >
              FAQs
          </a>
          </li>
          <li>
            <a
              className="text-link light"
              href="http://www.sweetgreen.com/terms/"
              target="new"
            >
              Terms
          </a>
          </li>
          <li>
            <a
              className="text-link light"
              href="http://www.sweetgreen.com/privacy-policy/"
              target="new"
            >
              Privacy
          </a>
          </li>
          <li>
            <a
              className="text-link light"
              href="http://www.sweetgreen.com/contact/"
              target="new"
            >
              Contact
          </a>
          </li>
          <li>
            <a href="/locations" className="text-link light">
              Locations
          </a>{" "}
          </li>
        </ul>

        <EmailCapture />

        <ul className="footer-social top-margin quarter">
          <li>
            <a
              href="https://www.instagram.com/sweetgreen/"
              className="social-link instagram"
              target="new"
              name="Instagram"
              aria-label="Follow us on Instagram"
            >
              <img src={insta} alt="instagram logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/sweetgreen/"
              className="social-link facebook"
              target="new"
              name="Facebook"
              aria-label="Follow us on Facebook"
            >
              <img src={fb} alt="facebook logo" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/sweetgreen/"
              className="social-link twitter"
              target="new"
              name="Twitter"
              aria-label="Follow us on Twitter"
            >
              <img src={twitter} alt="twitter logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/user/sweetgreen"
              className="social-link youtube"
              target="new"
              name="YouTube"
              aria-label="Follow us on YouTube"
            >
              <img src={youtube} alt="twitter logo" />
            </a>
          </li>
        </ul>

        <p className="p-small light top-margin quarter">
          Meet our new app for
        <a
            className="link-ios"
            href="https://itunes.apple.com/us/app/sweetgreen/id594329490?mt=8"
            target="new"
          >
            <span className="inline-icon">
              <img src={ios} alt="" />
            </span>
            <span>iOS</span>
          </a>
          &amp;
        <a
            className="link-android"
            href="https://play.google.com/store/apps/details?id=com.sweetgreen.android.app&amp;hl=en"
            target="_blank"
          >
            <span className="inline-icon">
              <img src={android} alt="" />
            </span>
            <span>Android</span>
          </a>
        </p>
      </div>
    </footer>
  }
}
