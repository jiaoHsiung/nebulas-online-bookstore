import React, { Component } from 'react';
import { Badge, Icon } from 'antd';

class TopBar extends Component {
  render() {
    return (
      <section className="topbar">
        <div className="wrapper">
          <div className="cart-options">
          <ul>
            <li>
              <Badge count={0} showZero>
                <Icon type="shopping-cart" />
              </Badge>
            </li>
            <li>
              <Icon type="star-o" />
              <span>收藏 0 个</span>
            </li>
            <li>
              <Icon type="user" />
              <span>
                <a>登录</a>
                &nbsp;/&nbsp;
                <a>注册</a>
              </span>
            </li>
          </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default TopBar;
