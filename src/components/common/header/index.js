import React, { Component } from 'react';
import TopBar from './topbar';
import NavBar from './navbar';
import './style.less';
class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <TopBar />
        <NavBar />
      </div>
    );
  }
}

export default Header;
