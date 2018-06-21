import React, { Component } from 'react';
import { Rate, Icon, Pagination } from 'antd';
import BooksList from '../mock/bookList.json';

import './style.less';

class BookList extends Component {
  render() {
    return (
      <div className="list-container">
        <div className="books-list-wrap">
          {
            BooksList.map((book, index) => {
              return (
                <div className="book-wrap" key={index}>
                  <div className="product-box">
                    <div className="product-img">
                      <img src={book.bookImage} width="132" height="197" />
                      <ul className="product-cart-option position-center-x">
                        <li>
                          <a><Icon type="eye" /></a>
                        </li>
                        <li>
                          <a onClick={(e) => { this.showPurchaseModal(e, book); }}>
                            <Icon type="shopping-cart" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <Icon type="share-alt" />
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
                        <div className="rating-stars">
                          <Rate allowHalf defaultValue={2.5} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      
        <div className="pagination-holder">
          <Pagination size="small" total={BooksList.length} showSizeChanger showQuickJumper />
        </div> 
      </div>
    );
  }
}

export default BookList;
