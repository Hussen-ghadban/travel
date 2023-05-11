import React from 'react'
import './Footer.css';
import {SiYourtraveldottv} from 'react-icons/si'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo flex">
             <h1 className="flex"> <SiYourtraveldottv className="iconj "/>Dot</h1>
            </a>
          </div>
          <div className="socials flex">
          <ImFacebook className="iconFooter"/>
          <BsTwitter className="iconFooter"/>
          <AiFillInstagram className="iconFooter"/>
        </div>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">
           information
          </span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & condition</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">
            Contact Us
          </span>
         <span className="phone">+444 565 6655</span>
         <span className="email">houssen@outlook.com</span>
        </div>
      
      </div>
     </div>
  )
}

export default Footer
