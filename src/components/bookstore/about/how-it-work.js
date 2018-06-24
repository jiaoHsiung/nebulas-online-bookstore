import React from 'react';
import { Icon, Button } from 'antd';

export default function AboutShop() {
  return (
    <div className="about-shop-container line-bg">
      <div class="main-heading-wrap">
        <div className="main-heading">
          <h2>How it Works</h2>
        </div>
      </div>
      <section className="how-wrap">
        <div className="block-item">
          <div className="title-wrap">
            <a><Icon type="search" /></a>
            <p>Step1 > Search</p>
          </div>
          <p>
            你可以在我们平台上租书，为什么租书？租书自然有租书的好处，买了一本书你看完之后，你还会看第二遍嘛，也许你会，也许你不会。
            一句话说的很好，“sharing is caring”.
          </p>
          <Button>Learn more<Icon type="double-right" /></Button>
        </div>
        <div className="block-item">
          <div className="title-wrap">
            <a><Icon type="question-circle-o" /></a>
            <p>Step2 > Choice</p>
          </div>
          <p>
            你可以在我们平台上租书，为什么租书？租书自然有租书的好处，买了一本书你看完之后，你还会看第二遍嘛，也许你会，也许你不会。
            一句话说的很好，“sharing is caring”.
          </p>
          <Button>Learn more<Icon type="double-right" /></Button>
        </div>
        <div className="block-item">
          <div className="title-wrap">
            <a><Icon type="edit" /></a>
            <p>Step3 > Information</p>
          </div>
          <p>
            你可以在我们平台上租书，为什么租书？租书自然有租书的好处，买了一本书你看完之后，你还会看第二遍嘛，也许你会，也许你不会。
            一句话说的很好，“sharing is caring”.
          </p>
          <Button>Learn more<Icon type="double-right" /></Button>
        </div>
        <div className="block-item">
          <div className="title-wrap">
            <a><Icon type="wallet" /></a>
            <p>Step4 > Payment</p>
          </div>
          <p>
            你可以在我们平台上租书，为什么租书？租书自然有租书的好处，买了一本书你看完之后，你还会看第二遍嘛，也许你会，也许你不会。
            一句话说的很好，“sharing is caring”.
          </p>
          <Button>Learn more<Icon type="double-right" /></Button>
        </div>
      </section>
    </div>
  );
}
