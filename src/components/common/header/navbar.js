import React, { Component } from 'react';
import { Icon } from 'antd';

class NavBar extends Component {
  render() {
    return (
      <section className="navbar-wrapper">
        <div className="wrapper">
          <div className="container">
            <div className="logo-wrap">
              <img src={require('../assets/logo.png')} alt=""/>
              <span>Read Lover</span>
            </div>
            <div className="search-bar">
              <a>
                <Icon type="search" />
              </a>
            </div>
            <div className="navigation-wrap">
              <ul>
                <li className="active">
                  <a>
                    <Icon type="home" />
                    home
                  </a>
                </li>
                <li>
                  <a>
                    <Icon type="shop" />
                    shop
                  </a>
                </li>
                <li>
                  <a>
                    <Icon type="profile" />
                    about
                  </a>
                </li>
                <li>
                  <a>
                    <Icon type="contacts" />
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NavBar;
