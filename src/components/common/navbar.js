import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <a className="logo-wrap">
            <img src={require('./assets/logo.png')} className="logo" alt="" titl=""/>
            <span className="logo-title">Read Lover</span>
          </a>
          <nav>
            <ul>
              <li><Link to="/book-list">BookStore</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <a className="login_btn">Login</a>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;
