import React, { Component } from 'react';
import Header from '../../common/header';
import Footer from '../../common/footer';
import InnerBanner from '../../common/inner-banner';
import CurrentPath from '../../common/current-path';
import Qustions from './questions';

import './style.less';

class About extends Component {
  render() {
    return (
      <div className="questions-wrapper">
        <InnerBanner imgName="img-10" />
        <CurrentPath routerName="faqs" />
        <Qustions />
      </div>
    );
  }
}

export default About;
