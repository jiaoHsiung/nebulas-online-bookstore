import React, { Component } from 'react';
import Search from './search';
import Category from './category';
import List from './list';

import './style.less';

class BookList extends Component {
  render() {
    return (
      <div className="book-list-container">
        <div className="wrapper">
          <Search />
          <div className="book-container">
            <Category />
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default BookList;
