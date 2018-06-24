import React from 'react';
import WhatYouCanDo from './what-you-can-do';
import WhyWeDoIt from './why-we-do-it';
import HowItWork from './how-it-work';

export default function AboutShop() {
  return (
    <div className="about-shop-wrapper">
      <div className="wrapper">
        <WhatYouCanDo />
      </div>
      <WhyWeDoIt />
      <div className="wrapper">
        <HowItWork />
      </div>
    </div>
  );
}
