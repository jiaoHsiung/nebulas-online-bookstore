import React from 'react';
import { Link } from 'react-router-dom';

import './style.less';

export default function CurrentPath({routerName}) {
  return (
    <div className="current-path">
      <div className="wrapper">
        <ul>
          <li>
            <Link to="/">{routerName}</Link>
          </li>
          <li>shop</li>
        </ul>
      </div>
    </div>
  );

}
