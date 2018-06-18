import React, { Component } from 'react';
import { Icon } from 'antd';
import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-wrapper">
        <section className="hero">
          <header>
            <div className="wrapper">
              <a href="#"><img src={require('./assets/logo.png')} className="logo" alt="" titl=""/></a>
              <nav>
                <ul>
                  <li><a href="#">BookStore</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
                <a href="#" className="login_btn">Login</a>
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