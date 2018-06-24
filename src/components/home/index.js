import React, { Component } from 'react';
import { Icon } from 'antd';
import Navbar from '../common/navbar';

import './style.less';

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <section className="hero">
          <Navbar />
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