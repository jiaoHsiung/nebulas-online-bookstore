import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import menuData from './menu.json';
import './sidebar.less';

const { Sider } = Layout;

export default class Sidebar extends Component {
  constructor({ pathname }) {
    super();
    this.state = {
      current: pathname,
    };
  }

  componentWillReceiveProps({ pathname }) {
    if (pathname && pathname !== this.state.current) {
      this.setState({ current: pathname });
    }
  }

  handleClick = e => {
    this.setState({ current: e.key });
  }

  render() {
    return (
      <div className="sidebarmenu">
        <Menu
          mode="inline"
          selectedKeys={[this.state.current]}
          defaultOpenKeys={['personcenter', 'mytrade', 'myfavorites', 'customerservice', 'community']}
          onClick={this.handleClick}
        >
          {
            menuData.map(menu => {
              return (
                <Menu.SubMenu key={menu.key} title={<span>{menu.title}</span>}>
                  {
                    menu.items.map(item => {
                      return <Menu.Item key={item.key}><Link to={item.key}>{item.title}</Link></Menu.Item>;
                    })
                  }
                </Menu.SubMenu>
              );
            })
          }
        </Menu>
      </div>
    );
  }
}

// Sidebar.__ANT_LAYOUT_SIDER = true;
