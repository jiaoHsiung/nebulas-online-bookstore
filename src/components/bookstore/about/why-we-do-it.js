import React from 'react';
import { Icon } from 'antd';

export default function AboutShop() {
  return (
    <div className="about-shop-container container-bgc">
      <div className="wrapper">
        <h2>Why We Do it</h2>
        <section className="why-wrap">
          <div className="block-item">
            <div className="icon-holder">
              <a>
                <Icon type="share-alt" />
              </a>
            </div>
            <div className="content-holder">
              <div className="title">Share</div>
              <p>
                你可以在我们平台上租书，为什么租书？租书自然有租书的好处，买了一本书你看完之后，你还会看第二遍嘛，也许你会，也许你不会。
                一句话说的很好，“sharing is caring”.
              </p>
            </div>
          </div>
          <div className="block-item">
            <div className="icon-holder">
              <a>
                <Icon type="shop" />
              </a>
            </div>
            <div className="content-holder">
              <div className="title">Convenience</div>
              <p>
                你可以在我们平台上租书，为什么租书？租书自然有租书的好处，买了一本书你看完之后，你还会看第二遍嘛，也许你会，也许你不会。
                一句话说的很好，“sharing is caring”.
              </p>
            </div>
          </div>
          <div className="block-item">
            <div className="icon-holder">
              <a>
                <Icon type="pay-circle-o" />
              </a>
            </div>
            <div className="content-holder">
              <div className="title">Cheap</div>
              <p>
                你可以在我们平台上租书，为什么租书？租书自然有租书的好处，买了一本书你看完之后，你还会看第二遍嘛，也许你会，也许你不会。
                一句话说的很好，“sharing is caring”.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
