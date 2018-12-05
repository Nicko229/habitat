import React, { Component } from 'react';
import banner from '../assets/banner.jpeg';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <div>About</div>
        <img src={banner} className="banner" />
      </div>
    )
  }
}