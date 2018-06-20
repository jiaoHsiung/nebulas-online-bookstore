import React from 'react';
import { hashHistory } from 'react-router-dom';
import { Pagination, Select } from 'antd';
import PurchaseModal from '../purchaseCart';
import SearchModal from '../advanceSearch';

import './main.less'

class BookCollection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
      purchaseVisible: false,
      searchVisible: false,
      currentBook: {},
      hiddenPagination: false
    }

    this.showAdvancedSearchModal = this.showAdvancedSearchModal.bind(this);
    this.onPaginationChange = this.onPaginationChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeBookType = this.changeBookType.bind(this);
    this.showPurchaseModal = this.showPurchaseModal.bind(this);
    this.changeCurrentBook = this.changeCurrentBook.bind(this);
  }

  componentDidMount() {
    // this.props.getAllBookTypes(() => {
    //   this.getCollectionBooks(this.props.bookTypesAllList[0].bookClassTitle, 1);
    // });
  }

  getCollectionBooks(bookType, pageNo) {
    this.props.getCollectionBooks(bookType, pageNo, 9);
  }

  showAdvancedSearchModal(event) {
    event.preventDefault();
    this.setState({
      searchVisible: true
    })
  }

  onPaginationChange(current) {
    this.getCollectionBooks(this.props.bookTypesAllList[this.state.pageIndex].bookClassTitle, current);
  }

  handleChange(value) {
    if (value === 'lowPrice') {
      this.getCollectionBooks(this.props.bookTypesAllList[this.state.pageIndex].bookClassTitle);
    }else if(value === 'highPrice') {
      this.props.getRangeHighToLow(this.props.bookTypesAllList[this.state.pageIndex].bookClassTitle);
    }else if(value === 'popularity') {
      this.props.getGoodRateDesc(this.props.bookTypesAllList[this.state.pageIndex].bookClassTitle);
    }else {
      this.props.getNewPublishDate(this.props.bookTypesAllList[this.state.pageIndex].bookClassTitle);
    }
  }

  changeBookType(e, pageIndex) {
    e.preventDefault();
    this.setState({
      pageIndex,
      hiddenPagination: false
    });
    this.getCollectionBooks(this.props.bookTypesAllList[pageIndex].bookClassTitle, 1);
  }

  handlePurchaseCancel() {
    this.setState({
      purchaseVisible: false
    })
  }

  handleSearchCancel() {
    this.setState({
      searchVisible: false,
      hiddenPagination: true
    })
  }

  showPurchaseModal(e, currentBook) {
    e.preventDefault();
    this.setState({
      purchaseVisible: true,
      currentBook
    })
  }

  handleSubmit() {
    const searchName = document.getElementById("searchName").value;
    console.log(searchName);
    this.props.getCommonSearch(searchName);
  }

  changeCurrentBook(book) {
    this.props.updateCurrentBook(book);
    this.props.saveCurrentNavigatorTarget('shop');
    window.location.replace("#/")
  }

  render() {
    return (
      <main className="main-content">
        <div className="product-grid-holder tc-padding">
          <div className="container">
            <div className="row">
              <aside className="col-lg-3 col-md-4 pull-left">
                <div className="aside-widget">
                  <form className="search-bar" >
                    <input type="text" id="searchName" className="form-control" placeholder="search..." />
                    <button className="sub-btn fa fa-search" onClick={this.handleSubmit.bind(this)} />
                  </form>
                  <div className="advanced-search">
                    <a onClick={this.showAdvancedSearchModal.bind(this)}>高级搜索</a>
                  </div>
                </div>
                <div className="aside-widget">
                  <h6>图书分类</h6>
                  <ul className="category-list">
                    {
                      (bookTypesAllList || []).map((bookType, index) => {
                        return (
                          <li key={index}><a onClick={(e) => { this.changeBookType(e, index); }}>{bookType.bookClassTitle}</a></li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="aside-widget">
                  <h6>你也许喜欢的图书</h6>
                  <ul className="books-year-list">
                    <li>
                      <div className="books-post-widget">
                        <img src={require('./assets/bsa01.jpg')} alt="" />
                        <h6><a href="">Festa Junnia</a></h6>
                        <ul className="rating-stars">
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                        </ul>
                        <div className="offer-price">
                          32.99
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="books-post-widget">
                        <img src={require('./assets/bsa02.jpg')} alt="" />
                        <h6><a href="">Cover Design</a></h6>
                        <ul className="rating-stars">
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star-half-full" /></li>
                        </ul>
                        <div className="offer-price">
                          ￥30.99
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="books-post-widget">
                        <img src={require('./assets/bsa03.jpg')} alt="" />
                        <h6><a href="">Beer Fastival</a></h6>
                        <ul className="rating-stars">
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star-half-full" /></li>
                        </ul>
                        <div className="offer-price">
                          ￥28
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="books-post-widget">
                        <img src={require('./assets/bsa04.jpg')} alt="" />
                        <h6><a href="">Mars Club</a></h6>
                        <ul className="rating-stars">
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                        </ul>
                        <div className="offer-price">
                          ￥23
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </aside>
              <div className="col-lg-9 col-md-8 pull-right">
                <div className="product-sort">
                  <div className="sort-dropdown">
                    <label htmlFor="sortby">图书排序:</label>
                    <Select defaultValue="lowPrice" style={{ width: 120 }} onChange={this.handleChange}>
                      <Select.Option value="lowPrice">价格从低到高</Select.Option>
                      <Select.Option value="highPrice">价格从高到低</Select.Option>
                      <Select.Option value="popularity">好评度</Select.Option>
                      <Select.Option value="newDate">最新时间</Select.Option>
                    </Select>
                  </div>
                </div>
                <div className="row">
                  {
                    (collectionBooks || []).map((book, index) => {
                      return (
                        <div className="col-lg-4 col-xs-6" key={index}>
                          <div className="product-box">
                            <div className="product-img">
                              <img src={book.bookImage} width="132" height="197" />
                              <ul className="product-cart-option position-center-x">
                                <li>
                                  <a href="">
                                    <i className="fa fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a onClick={(e) => { this.showPurchaseModal(e, book); }}>
                                    <i className="fa fa-cart-arrow-down" />
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    <i className="fa fa-share-alt" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-detail">
                              <span>{book.bookClassTitle}</span>
                              <h5>
                                <a onClick={() => {this.changeCurrentBook(book);}}>{book.bookTitle}</a>
                              </h5>
                              <p>{book.introduction}</p>
                              <div className="rating-and-price">
                                <strong>{`￥${(book.price * book.bookDiscount).toFixed(2)}`}</strong>
                                <ul className="rating-stars">
                                  <li><i className="fa fa-star" /></li>
                                  <li><i className="fa fa-star" /></li>
                                  <li><i className="fa fa-star" /></li>
                                  <li><i className="fa fa-star-half-full" /></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
                {
                  !this.state.hiddenPagination ? <div className="pagination-holder">
                    <Pagination showQuickJumper defaultCurrent={1} total={this.props.pagination.total} onChange={current => { this.onPaginationChange(current); }} />
                  </div> : null
                }
              </div>
              <PurchaseModal visible={this.state.purchaseVisible} handleCancel={this.handlePurchaseCancel.bind(this)} currentBook={this.state.currentBook} />
              <SearchModal visible={this.state.searchVisible} handleCancel={this.handleSearchCancel.bind(this)} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default BookCollection;
