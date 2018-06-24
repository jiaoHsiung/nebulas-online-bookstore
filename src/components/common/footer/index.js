import React, { Component } from 'react';
import { Icon, Input } from 'antd';

import './footer.less';

export default class Footer extends Component {
  backToTop() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200)
  }

  render() {
    return (
      <footer className="footer">
        <div className="wrapper">
          <div className="footer-columns">
            <div className="footer-column logo-column">
              <a href="">
                <img src={require('../assets/logo.png')} alt=""/>
                <span>Read Lover</span>
              </a>
              <p>
                如果您有更好的建议和想法，我们很欢迎您联系我们。
              </p>
              <p>
                If you have better suggestions and ideas, we are looking forward to your feedbacks and suggestions.
              </p>
              <ul className="address-list">
                <li>
                  <a><Icon type="home" /></a>
                  Chengdu In Sichuan.
                </li>
                <li>
                  <a><Icon type="phone" /></a>
                  +86 123-456-789
                </li>
                <li>
                  <a><Icon type="mail" /></a>
                  readLover@onlinebookstore.com
                </li>
              </ul>
            </div>
            <div className="footer-column footer-links">
              <h4>Information</h4>
              <ul>
                <li>
                  <a href=""><Icon type="right" />Home</a>
                </li>
                <li>
                  <a href=""><Icon type="right" />shop</a>
                </li>
                <li>
                  <a href=""><Icon type="right" />About</a>
                </li>
                <li>
                  <a href=""><Icon type="right" />Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-column footer-links">
              <h4>Shipping info</h4>
              <ul>
                <li>
                  <a href="">new products</a>
                </li>
                <li>
                  <a href="">top sellers</a>
                </li>
                <li>
                  <a href="">manufacturers</a>
                </li>
                <li>
                  <a href="">suppliers</a>
                </li>
                <li>
                  <a href="">special</a>
                </li>
                <li>
                  <a href="">imported</a>
                </li>
              </ul>
            </div>
            <div className="footer-column newsletter">
              <h4>Weekly Newsletter</h4>
              <p>
                Get our awesome releases and latest updates with exclusive news and offers in your inbox.
              </p>
              <div className="newsletter-input">
                <Input addonBefore={<Icon type="mail" />} addonAfter="订阅" />
              </div>
              <p>We're on Social Networks. Follow us & get in touch!</p>
              <ul className="social-icons">
                <li>
                  <a className="qq">
                    <i className="fa fa-qq" />
                  </a>
                </li>
                <li>
                  <a className="weixin">
                    <i className="fa fa-weixin" />
                  </a>
                </li>
                <li>
                  <a className="weibo">
                    <i className="fa fa-weibo" />
                  </a>
                </li>
                <li>
                  <a className="linkedin">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sub-footer">
          <div className="wrapper">
            <p>
              Copyright
              <Icon type="copyright" />
              2018-more
              Pactice for Nebulas.
            </p>
            <a className="back-top" onClick={this.backToTop.bind(this)}>
              Back to Top
              <Icon type="caret-up" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
