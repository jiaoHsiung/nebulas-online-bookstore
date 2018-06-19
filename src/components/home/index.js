import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import './style.less';

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <section className="hero">
          <header>
            <div className="wrapper">
              <a className="logo-wrap">
                <img src={require('./assets/logo.png')} className="logo" alt="" titl=""/>
                <span className="logo-title">Read Lover</span>
              </a>
              <nav>
                <ul>
                  <li><Link to="/book-list">BookStore</Link></li>
                  <li><a>About</a></li>
                  <li><a>Contact</a></li>
                </ul>
                <a className="login_btn">Login</a>
              </nav>
            </div>
          </header>

          <section className="caption">
            <h2 className="caption">Find Your Dream Book</h2>
            <a>Go Hunting&nbsp;&nbsp;<Icon type="arrow-right" /></a>
          </section>
        </section>

      </div>
    );
  }
}

export default Home;