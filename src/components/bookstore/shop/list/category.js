import React, { Component } from 'react';
import { Icon } from 'antd';
import BookTypes from '../mock/bookTypesList.json';

import './style.less';

class BookList extends Component {
  render() {
    return (
      <div className="book-category-wrap">
        <h6>图书分类</h6>
        <ul>
          {
            BookTypes.map((type, index) => {
              return (
                <li key={index}>
                  <a><Icon type="right" />{type.bookClassTitle}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default BookList;
