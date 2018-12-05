import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"
import './NavComponent.css';

export default class NavComponent extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="nav-left">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/whatwedo">What We Do</NavLink>
          </div>
          <div>
            <img src={logo}></img>
          </div>
          <div className="nav-right">
            <NavLink to="/FAQ">FAQ</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
      </div >
    )
  }
}