import React from 'react';
import { Link } from 'react-router-dom';

import './style.less';

export default function CurrentPath({routerName}) {
  return (
    <div className="current-path">
      <div className="wrapper">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>{routerName}</li>
        </ul>
      </div>
    </div>
  );

}
