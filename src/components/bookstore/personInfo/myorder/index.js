import React from 'react';
import { Tabs, Table, Tooltip, Modal } from 'antd';

import './myorder.less';

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
		orderNo: "20180213001",
		payWay: '支付宝',
    price: 1 + i,
		bookDiscount: 1,
		orderDate: '2017-8-12',
    favNumber: 100,
    quantity: 3,
    orderState: '已付款'
  });
}
class MyOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: '订单详情', render: (text, record) => {
            return (
              <Tooltip placement="topLeft" title={this.initialToolTitle.bind(this, record)}>
                <div className="order_show_detail">
                  <span>订单号:&nbsp;</span>
                  <span className="order_number"><a href="javascript:">{record.orderNo}</a></span>
                  <span className="ant-divider" />
                  <span className="time_order">{record.orderDate}</span>
                  <span className="ant-divider" />
                  <span className="price">￥ {(record.price * record.bookDiscount * record.quantity).toFixed(2)}</span>
                  <span className="ant-divider" />
                  <span>{record.payWay}</span>
                </div>
              </Tooltip>
            )
          }
        },
        { title: '订单状态', dataIndex: 'orderState' },
        {
          title: '操作', render: (text, record) => {
            return (
              <span>
                <a onClick={this.payOrder.bind(this, record)}>付款</a>
                <span className="ant-divider" />
                <a onClick={this.removeConfirm.bind(this, record)}>删除</a>
              </span>
            )
          }
        }
      ],
      selectedRowKeys: [],
      selectedRows: [],
    };
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  componentDidMount() {
    if (this.props.username) {
      this.props.getMemberInfo({ email: this.props.username }, () => {
        this.getOrders(this.props.member.memberNo, 1);
      });
    }
  }

  initialToolTitle(record) {
    return (<div className="order_imgInfo">
      <div className="order_show_img">
        <img src={record.bookImage} width="70" />
      </div>
      <span className="introduce_detail">
        <span className="info_introduce">{record.bookTitle}</span>
        <span className="price_quan_box">
          <span className="price_num">{(record.price * record.bookDiscount).toFixed(2)}</span>
          &nbsp;x {record.quantity}
        </span>
      </span>
    </div>);
  }

  getOrders(memberNo, pageNo) {
    this.props.getOrders(this.props.member.memberNo, 1);
  }

  payOrder(order) {
    let sum = 0;
    [order].map(rowData => {
      sum = sum + rowData.quantity * rowData.price * rowData.bookDiscount;
    });
    this.props.updateTotalPrice(parseFloat(sum+10).toFixed(2));
    window.location.replace('#/pay');
  }

  payOrders() {
    let sum = 0;
    this.state.selectedRows.map(rowData => {
      sum = sum + rowData.quantity * rowData.price * rowData.bookDiscount;
    });
    this.props.updateTotalPrice(parseFloat(sum+10).toFixed(2));
    window.location.replace('/pay');
  }

  onSelectChange(selectedRowKeys, selectedRows) {
    let sum = 0;
    selectedRows.map(rowData => {
      sum = sum + rowData.quantity * rowData.price * rowData.bookDiscount;
    });
    this.setState({
      selectedRowKeys,
      selectedRows
    });
  }

  renderTabBarExtraContent() {
    return (
      <div className="search_frame">
        <input type="text" className="search_input" placeholder="商品名称/订单号/收货人姓名" />
        <a href="javascript:">
          <span className="order_search">搜索</span>
        </a>
      </div>
    )
  }

  removeConfirm(order) {
    Modal.confirm({
      title: '确定要删除该商品吗？',
      onOk: () => {
        this.props.removeOrder(
          {
            orderNo: order.orderNo,
            ISBN: order.ISBN,
            updateInfo: {
              amountReceivable: parseFloat((order.amountReceivable - (order.price * order.quantity)).toFixed(2)),
              paidAmount: parseFloat((order.paidAmount - (order.price * order.quantity * order.bookDiscount)).toFixed(2)),
            }
          },
          this.getOrders.bind(this, this.props.member.memberNo, this.props.pagination.current)
        )
      }
    });
  }

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div className="tabBarStyle">
        <Tabs defaultActiveKey="1" animated={false} tabBarExtraContent={this.renderTabBarExtraContent()}>
          <div className="order_time" key="0">
            <div className="time_show">
              <ul>
                <li><span>一周之内</span></li>
                <li><span>30天内</span></li>
                <li><span>90天内</span></li>
                <li><span>2017年</span></li>
                <li><span>更早之前</span></li>
              </ul>
            </div>
            <div className="time_show_pic">
              <div className="wl_order_time">
                <span>下单时间</span>
                <div>
                  <div className="pic_line"></div>
                  <ul className="time_circle">
                    <li><a href="javascript:" /></li>
                    <li><a href="javascript:" /></li>
                    <li><a href="javascript:" /></li>
                    <li><a href="javascript:" /></li>
                    <li><a href="javascript:" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Tabs.TabPane tab="全部订单" key="1">
            <div className="order_table">
              <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={data || []} />
              <div className="choice_all">
                <span>全选</span>
                <button className={hasSelected ? "can_buf" : ""} onClick={this.payOrders.bind(this)}>合并支付</button>
              </div>
            </div>
            {
              !data.length ? (<div className="collection_box">
                <div className="show_list">
                  <div className="none_box">
                    <img src={require('./assets/monkey.jpg')} alt="" />
                    <h3>
                      您没有该类型的订单，回首页
                      <a href="/">逛逛去</a>
                    </h3>
                  </div>
                </div>
              </div>) : null
            }
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>待付款<span className="numCount">{data.length}</span></span>} key="2">Content of Tab Pane 2</Tabs.TabPane>
          <Tabs.TabPane tab={<span>待发货<span className="numCount">0</span></span>} key="3">Content of Tab Pane 3</Tabs.TabPane>
          <Tabs.TabPane tab={<span>待收货<span className="numCount">0</span></span>} key="4">Content of Tab Pane 3</Tabs.TabPane>
          <Tabs.TabPane tab={<span>待评价<span className="numCount">0</span></span>} key="5">Content of Tab Pane 3</Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default MyOrder;
