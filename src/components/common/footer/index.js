import React, { Component } from 'react';

import './footer.less';

export default class Footer extends Component {
  backToTop() {
    setTimeout(() => {
      window.scrollTo(0,0);
    }, 2000)
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer-columns">
          <div className="container">
            <div className="footer-ad-banner">
              <a href="">
                <img src={require('./assets/footer-ad-banner.jpg')} alt=""/>
              </a>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="footer-column logo-column">
                  <a href="">
                    <img src={require('./assets/logo-2.png')} alt=""/>
                  </a>
                  <p>
                    如果您有更好的建议和想法，我们很欢迎您联系我们。
                    love does not consist in gazing at each other, but in looking outward together in the same direction.
                  </p>
                  <ul className="address-list">
                    <li>
                      <i className="fa fa-home" />
                      Finance and Economics University Of Jiangxi.
                    </li>
                    <li>
                      <i className="fa fa-phone" />
                      00+123-456-789
                    </li>
                    <li>
                      <i className="fa fa-envelope" />
                      contact@onlinbookshops.com
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="footer-column footer-links">
                  <h4>Information</h4>
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a href="">Shop</a>
                    </li>
                    <li>
                      <a href="">Categories</a>
                    </li>
                    <li>
                      <a href="">SHOP-Related</a>
                    </li>
                    <li>
                      <a href="">Author</a>
                    </li>
                    <li>
                      <a href="">Community</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
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
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="footer-column newsletter">
                  <h4>Weekly Newsletter</h4>
                 <p>
                   Get our awesome releases and latest updates with exclusive news and offers in your inbox.
                 </p>
                 <form className="newsletter-input">
                   <i className="fa fa-envelope-o" />
                   <input type="text" className="form-control" placeholder="Enter Your Email"/>
                   <button>SUBSCRIBE</button>
                 </form>
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
          </div>
        </div>
        <div className="sub-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <p>
                  Copyright
                  <i className="fa fa-copyright" />
                  207-more
                  <span className="theme-color">Finelayers</span>
                  All Rights Reserved.
                </p>
              </div>
              <div className="col-sm-6">
                <a href="#" className="back-top" onClick={this.backToTop.bind(this)}>
                  Back to Top
                  <i className="fa fa-caret-up" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
