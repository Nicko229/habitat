import React, { Component } from 'react';
import logo from "../assets/download.jpeg"
import './NavComponent.css';

export default class NavComponent extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="nav-left">
            <a href="">Home</a>
            <a href="">What We Do</a>
          </div>
          <div>
            <img src={logo}></img>
          </div>
          <div className="nav-right">
            <a href="">FAQ</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
        </nav>
      </div >
    )
  }
}