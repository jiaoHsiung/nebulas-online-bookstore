import React, { Component } from 'react';
import Header from '../../common/header';
import Footer from '../../common/footer';
import InnerBanner from '../../common/inner-banner';
import CurrentPath from '../../common/current-path';
import AboutShop from './about-shop';

import './style.less';

class About extends Component {
  render() {
    return (
      <div className="about-wrapper">
        <InnerBanner imgName="ib02" />
        <CurrentPath routerName="about" />
        <AboutShop />
      </div>
    );
  }
}

export default About;
