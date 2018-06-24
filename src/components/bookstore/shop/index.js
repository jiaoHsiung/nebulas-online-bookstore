import React, { Component } from 'react';
import InnerBanner from '../../common/inner-banner';
import CurrentPath from '../../common/current-path';
import BookList from './list';

import './style.less';

class BookListHome extends Component {
  render() {
    return (
      <div className="book-list-wrapper">
        <InnerBanner imgName="ib01" />
        <CurrentPath routerName="shop" />
        <BookList />
      </div>
    );
  }
}

export default BookListHome;
