import React, { Component } from 'react';
import facebookIcon from '../assets/facebook-icon.png';
import instagramIcon from '../assets/instagram-icon.jpeg';
import emailIcon from '../assets/email-icon.png';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="foot">
        <a href="http://www.facebook.com" target="_blank">
          <img src={facebookIcon} ></img>
        </a>
        <a href="http://www.instagram.com">
          <img src={instagramIcon}></img>
        </a>
        <a href="http://www.outlook.com" target="_blank">
          <img src={emailIcon} ></img>
        </a>
      </div>
    )
  }
}