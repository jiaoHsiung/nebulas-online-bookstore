import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.less'

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleNavigator = this.handleNavigator.bind(this);
    this.changeNavigatorAnimate = this.changeNavigatorAnimate.bind(this);
  }

  componentDidMount() {
    const hashName = window.location.hash.replace('#', '').split('?')[0];
    this.changeNavigatorAnimate(hashName);
  }

  componentWillReceiveProps() {
    const hashName = window.location.hash.replace('#', '').split('?')[0];
    this.changeNavigatorAnimate(hashName);
  }

  changeNavigatorAnimate(hashName) {
    let eventIndex = 'home';
    if (hashName === '/shop' || hashName === '/book-detail') {
      eventIndex = 'shop';
    } else if (hashName === '/author' || hashName === '/author-detail') {
      eventIndex = 'author';
    }
    for (let item in this.refs) {
      if (this.refs[item].classList.contains('active')) {
        this.refs[item].classList.remove('active');
      }
    }
    this.refs[eventIndex].classList.add('active');
  }

  handleNavigator(event) {
    let eventIndex = 'home';
    if (event.target.innerText === '书店') {
      eventIndex = 'shop';
    } else if (event.target.innerText === '分类') {
      eventIndex = 'category';
    } else if (event.target.innerText === 'SHOP相关') {
      eventIndex = 'shop-releative';
    } else if (event.target.innerText === '作者') {
      eventIndex = 'author';
    } else if (event.target.innerText === '社区') {
      eventIndex = 'community';
    } else if (event.target.innerText === '联系US') {
      eventIndex = 'contact';
    }
    for (let item in this.refs) {
      if (this.refs[item].classList.contains('active')) {
        this.refs[item].classList.remove('active');
      }
    }
    this.refs[eventIndex].classList.add('active');
  }

  render() {
    return (
      <nav className="nav-holder">
        <div className="container">
          <div className="mega-dropdown-wrapper">
            <div className="logo">
              <a href="#">
                <img src={require('../../images/logo-1.png')} alt="" />
              </a>
            </div>
            <div className="search-bar">
              <a href="#">
                <i className="fa fa-search" />
              </a>
            </div>
            <div className="navigation">
              <ul onClick={e => { this.handleNavigator(e); }}>
                <li className="active dropdown-icon" ref="home">
                  <Link to="/">
                    <i className="fa fa-home" />
                    主页
                  </Link>
                </li>
                <li className="dropdown-icon" ref="shop">
                  <Link to="/shop">
                    <i className="fa fa-shopping-bag" />
                    书店
                  </Link>
                </li>
                <li className="dropdown-icon mega-dropdown-holder" ref="category">
                  <a href="#/shop">
                    <i className="fa fa-book" />
                    分类
                  </a>
                  <ul>
                    <li>
                      <div className="mega-dropdown">
                        <div className="row">
                          <div className="col-sm-2">
                            <div className="categories-list">
                              <h6>新书和预售</h6>
                              <a href="#">《我这一辈子》</a>
                              <a href="#">《和女儿的日常》</a>
                              <a href="#">《追问》</a>
                              <a href="#">《大门口的陌生人》</a>
                              <a href="#">《去，你的旅行》</a>
                              <a href="#">《拜托了冰箱》</a>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="categories-list">
                              <h6>好书推荐</h6>
                              <a href="#">《解忧杂货店》</a>
                              <a href="#">《故事思维》</a>
                              <a href="#">《厉害了，我的厨房》</a>
                              <a href="#">《从你的全世界路过》</a>
                              <a href="#">《医本正经》</a>
                              <a href="#">《这么慢，那么美》</a>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="categories-list">
                              <h6>热榜销售</h6>
                              <a href="#">《天才在左，疯子在右》</a>
                              <a href="#">《你喜欢的样子我都有》</a>
                              <a href="#">《人民的名义》</a>
                              <a href="#">《孤独小说家》</a>
                              <a href="#">《岛上书店》</a>
                              <a href="#">《我们仨》</a>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="row">
                              <div className="col-sm-4">
                                <div className="s-product">
                                  <div className="s-product-img">
                                    <img src={require('../../images/products-collection/new01.jpg')} alt="" />
                                  </div>
                                  <span>《我这一辈子》</span>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <div className="s-product">
                                  <div className="s-product-img">
                                    <img src={require('../../images/products-collection/recommend01.jpg')} alt="" />
                                  </div>
                                  <span>《解忧杂货店》</span>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <div className="s-product">
                                  <div className="s-product-img">
                                    <img src={require('../../images/products-collection/hot01.jpg')} alt="" />
                                  </div>
                                  <span>《天才在左，疯子在右》</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Link to="/shop" className="seemore">查看更多...</Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>

                <li className="dropdown-icon" ref="shop-releative">
                  <a href="#">
                    <i className="fa fa-pencil" />
                    Shop相关
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        文具用品
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        学习资料
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown-icon" ref="author">
                  <Link to="/author">
                    <i className="fa fa-file-text" />
                    作者
                  </Link>
                </li>
                <li className="dropdown-icon" ref="community">
                  <a href="#">
                    <i className="fa fa-files-o" />
                    社区
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        社区论坛
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        优秀图书馆
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-icon" ref="contact">
                  <a href="#">
                    <i className="fa fa-fax" />
                    联系Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
