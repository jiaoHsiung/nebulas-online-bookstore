import React from 'react';
import { Table, Modal, notification } from 'antd';

import '../myorder/myorder.less';
import './bookfavo.less';

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
		bookTitle: "冰与火的星球",
		bookImage: 'http://img3m2.ddimg.cn/46/31/25259302-6_w_3.jpg',
    price: 1 + i,
		bookDiscount: 1,
		favTime: '2017-8-12',
		favNumber: 100
  });
}

class BookFavorites extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [
				{
					title: '图书信息',
					render: (text, record) => {
						return (
							<div className="bookfavo_list">
								<div className="books_item">
									<a href="" className="book_pic">
										<img src={record.bookImage} height="75px" />
									</a>
								</div>
								<div className="book_detail">
									<p>
										<a href="" className="title">{record.bookTitle}</a>
									</p>
									<p className="gray">
										收藏人气： {record.favNumber}
										<span className="space">
											已有
                      <a href="">200</a>
											人评论
                    </span>
									</p>
									<p className="gray">
										收藏时间： {record.favTime}
									</p>
								</div>
							</div>
						)
					}
				},
				{
					title: '金额',
					render: (text, record) => {
						return (
							<p className="price_book">
								<span className="price_color">{`￥${(record.price * record.bookDiscount).toFixed(2)}  (${(record.bookDiscount * 10).toFixed(2)}折)`} </span>
							</p>
						)
					}
				},
				{
					title: '操作',
					render: (text, record) => {
						return (
							<div className="favo_operate">
								<p>
									<a onClick={() => { this.creatCartInfo(record); }} className="btn_buy">加入购物车</a>
								</p>
								<a onClick={() => { this.removeConfirm(record); }}>删除</a>
							</div>
						)
					}
				}
			],
			selectedRowKeys: []
		};
		this.onSelectChange = this.onSelectChange.bind(this);
		this.getFavBooks = this.getFavBooks.bind(this);
		this.removeConfirm = this.removeConfirm.bind(this);
		this.creatCartInfo = this.creatCartInfo.bind(this);
	}

	componentDidMount() {
		// this.props.getMemberInfo({ email: this.props.username }, () => {
		// 	this.props.getFavBooks(this.props.member.memberNo)
		// });
	}

	getFavBooks(memberNo, pageNo) {
		this.props.getFavBooks(memberNo, pageNo)
	}

	onSelectChange(selectedRows) {
		this.setState({
			selectedRowKeys: selectedRows
		});
	}

	creatCartInfo(record) {
		if (this.props.member.memberNo) {
			this.props.checkOneCartBook({ memberNo: this.props.member.memberNo, ISBN: record.ISBN }, (res) => {
				if (res.code) {
					notification.warning({
						message: '',
						description: '你的购物车中已存在该图书了'
					});
				} else {
					let data = {
						memberNo: this.props.member.memberNo,
						ISBN: record.ISBN,
						quantity: 1
					};
					this.props.createCartBook(data, () => {
						notification.success({
							message: '',
							description: '已成功加入购物车'
						});
						this.props.getCartBooks(this.props.member.memberNo, 1, 10, () => {
							this.props.updateGlobalCount(this.props.paginationCart.total);
						});
					});
				}
			});
		}
	}

	removeConfirm(favbook) {
		Modal.confirm({
			title: '确定要删除该图书收藏？',
			onOk: () => {
				this.props.removeFavBook({ ISBN: favbook.ISBN, memberNo: this.props.member.memberNo },
					() => {
						this.props.updateBook({
							ISBN: favbook.ISBN,
							favNumber: favbook.favNumber - 1
						}, () => {
							this.getFavBooks(this.props.member.memberNo, this.props.pagination.current);
							notification.success({
								message: '',
								description: '删除成功'
							});
						});
					});
			}
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

	render() {
		const { selectedRowKeys } = this.state;
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange,
		};
		const hasSelected = selectedRowKeys.length > 0;
		return (
			<div className="tabBarStyle">
				{
					data.length ? (
						<div className="order_table">
							<Table rowSelection={rowSelection} columns={this.state.columns} dataSource={data || []} />
							<div className="choice_all">
								<span>全选</span>
								<button className={hasSelected ? "can_buf" : ""}>批量购买</button>
								<button className={hasSelected ? "can_buf" : ""}>批量删除</button>
							</div>
						</div>
					) : (
						<div className="collection_box">
							<div className="show_list">
								<div className="none_box">
									<img src={require('../myorder/assets/monkey.jpg')} alt="" />
									<h3>
										您收藏任何图书，回首页
                    <a href="/">逛逛去</a>
									</h3>
								</div>
							</div>
						</div>
					)
				}
			</div>
		);
	}
}

export default BookFavorites;