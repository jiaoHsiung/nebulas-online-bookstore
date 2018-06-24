import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Input, Button } from 'antd';

class NavBar extends Component {
  state = {
    showSearchModal: false
  };

  toggleSearchModal = () => {
    this.setState({ showSearchModal: !this.state.showSearchModal }, () => {
      document.querySelector('body').style = this.state.showSearchModal ? document.querySelector('body').style = "overflow: hidden" : "overflow: auto";
    });
  }

  render() {
    const currentHash = window.location.hash.replace('#/', '');
    return (
      <section className="navbar-wrapper">
        <div className="wrapper">
          <div className="container">
            <div className="logo-wrap">
              <img src={require('../assets/logo.png')} alt=""/>
              <span>Read Lover</span>
            </div>
            <div className="search-bar">
              <a onClick={this.toggleSearchModal}>
                <Icon type="search" />
              </a>
            </div>
            <div className="navigation-wrap">
              <ul>
                <li className={currentHash === '' ? 'active' : ''}>
                  <Link to="/">
                    <Icon type="shop" />
                    home
                  </Link>
                </li>
                <li className={currentHash === 'person' ? 'active' : ''}>
                  <Link to="/person">
                    <Icon type="home" />
                    info
                  </Link>
                </li>
                <li className={currentHash === 'about' ? 'active' : ''}>
                  <Link to="/about">
                    <Icon type="profile" />
                    about
                  </Link>
                </li>
                <li className={currentHash === 'contact' ? 'active' : ''}>
                  <Link to="/contact">
                    <Icon type="contacts" />
                    contact
                  </Link>
                </li>
                <li className={currentHash === 'faqs' ? 'active' : ''}>
                  <Link to="/faqs">
                    <Icon type="question-circle-o" />
                    faqs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {
          this.state.showSearchModal && (
            <div className="search-cotainer">
              <div className="close-btn" onClick={this.toggleSearchModal}>
                <Icon type="close" />
              </div>
              <div className="search-holder">
                <h1>
                  Have a try. 
                  <br />
                  <p>Search the book you want to read</p>
                </h1>
                <div className="search-bar">
                  <Input addonBefore={<Icon type="search" />} />
                  <Button>Find a Book</Button>
                </div>
              </div>
            </div>
          )
        }
      </section>
    );
  }
}

export default NavBar;
