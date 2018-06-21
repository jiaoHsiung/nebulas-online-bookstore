import React, { Component } from 'react';
import { Input, Select } from 'antd';

import './style.less';

const Search = Input.Search;
class BookList extends Component {
  render() {
    return (
      <div className="book-search-wrap">
        <div className="search-container">
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
          />
        </div>
        <div className="sort-container">
          <Input.Group>
            <span className="label-name">图书排序: </span>
            <Select size="large" allowClear placeholder="choose sort by">
              <Select.Option value="lowPrice">价格从低到高</Select.Option>
              <Select.Option value="highPrice">价格从高到低</Select.Option>
              <Select.Option value="popularity">好评度</Select.Option>
              <Select.Option value="newDate">最新时间</Select.Option>
            </Select>
          </Input.Group>
        </div>
      </div>
    );
  }
}

export default BookList;
