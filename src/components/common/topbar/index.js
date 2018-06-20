import React, { Component } from 'react';
import { Popover } from 'antd';
import Login from './login';
import Register from './register';
import { Link } from 'react-router-dom';
import './topbar.less';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginVisible: false,
      registerVisible: false,
    };
  }

  componentDidMount() {
    if (this.props.username) {
      this.props.getMemberInfo({ email: this.props.username }, () => {
        this.props.getCartBooks(this.props.member.memberNo, 1, 10, () => {
          this.props.updateGlobalCount(this.props.paginationCart.total);
        });
        this.props.getFavBooks(this.props.member.memberNo, 1, 10, () => {
          this.props.updateFavCount(this.props.paginationFav.total);
        });
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.username !== nextProps.username || this.props.member.memberNo !== nextProps.member.memberNo || this.props.paginationCart.total !== nextProps.paginationCart.total) {
      this.props.getMemberInfo({ email: nextProps.username }, () => {
        this.props.getCartBooks(nextProps.member.memberNo, 1, 10, () => {
          this.props.updateGlobalCount(nextProps.paginationCart.total);
        });
        this.props.getFavBooks(this.props.member.memberNo, 1, 10, () => {
          this.props.updateFavCount(this.props.paginationFav.total);
        });
      });
    }
  }

  showLoginModal(event) {
    event.preventDefault();
    this.setState({
      loginVisible: true
    });
  }
  showRegisterModal(event) {
    event.preventDefault();
    this.setState({
      registerVisible: true
    });
  }

  handleCancel(loginVisible) {
    this.setState({
      loginVisible,
      registerVisible: loginVisible
    });
  }

  loginOut() {
     localStorage.removeItem("username");
     this.props.loginUserSuccess('');
     window.location.replace('#/');
  }

  render() {
    const content = (
      <div>
        <a>个人信息</a>
        <a href="#/shoppingcart">我的购物车</a>
        <a onClick={this.loginOut.bind(this)}>退出</a>
      </div>
    );

    return (
      <div className="topbar">
        <div className="container">
          <div className="online-option">
            <ul>
              <li><a href="#">online store</a></li>
              <li><a href="#">payment</a></li>
              <li><a href="#">shipping</a></li>
              <li><a href="#">return</a></li>
            </ul>
          </div>
          {
            this.props.username ? <div className="social-icons">
              <ul>
                <Popover content={content} title="设置" arrowPointAtCenter overlayClassName="hover-info">
                  <li><a href="#" className="fa fa-qq" /></li>
                </Popover>
                <li><Link to="/myallinfo" className="userName">{this.props.username}</Link></li>
              </ul>
            </div> : null
          }
          <div className="cart-option">
            <ul>
              <li className="add-cart">
                <Link to="/shoppingcart">
                  <i className="fa fa-shopping-bag" />
                  <span>购物车<span style={{color: '#ff2832', fontWeight: 'bold'}}> {this.props.globalCount}</span></span>
                </Link>
              </li>
              <li>
                <a href="#/myallinfo/bookfavorites">
                  <i className="fa fa-star" />
                  收藏夹 <span style={{color: '#ff2832', fontWeight: 'bold'}}> {this.props.favNumber}</span>
                  </a>
              </li>
              {
                !this.props.username ? <li>
                  <a href="#">
                    <i className="fa fa-user" />
                    <span onClick={this.showLoginModal.bind(this)} className="loginText">登陆</span>
                    <span> / </span>
                    <span className="registerText" onClick={this.showRegisterModal.bind(this)}>注册</span>
                  </a>
                </li> : null
              }
            </ul>
          </div>
        </div>
        <Login visible={this.state.loginVisible} handleCancel={this.handleCancel.bind(this)} />
        <Register visible={this.state.registerVisible} handleCancel={this.handleCancel.bind(this)} />
      </div>
    );
  }
}

export default TopBar;
