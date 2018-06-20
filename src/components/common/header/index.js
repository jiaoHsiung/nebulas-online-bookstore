import React, { Component } from 'react';

import TopBar from '../topbar';
// import Navigation from '../navigation';

export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <TopBar />
        {/* <Navigation {...this.props} /> */}
      </header>
    );
  }
}
