import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../common/header';
import InnerBanner from './inner-banner';
import BookList from './list';

import './style.less';

class BookListHome extends Component {
  render() {
    return (
      <div className="book-list-wrapper">
        <Header />
        <InnerBanner />
        <div className="current-path">
          <div className="wrapper">
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>shop</li>
            </ul>
          </div>
        </div>
        <BookList />
      </div>
    );
  }
}

export default BookListHome;
