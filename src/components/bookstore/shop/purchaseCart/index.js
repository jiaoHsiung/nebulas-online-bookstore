import React, { Component } from 'react';
import { Modal, InputNumber } from 'antd';

import './purchase.less';

class PurchaseCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        }
    }

    componentDidMount() {
        let username = localStorage.getItem('username');
        if (username) {
            this.props.getMemberInfo({ email: username });
        }
    }

    handleCancel() {
        this.props.handleCancel(false);
    }

    render() {
        return (
            <Modal
                visible={this.props.visible}
                closable={false}
                onCancel={this.handleCancel.bind(this)}
                footer={null}
                width="880px"
                wrapClassName="purchaseModal"
            >
                <div className="content-wrap">
                    <div className="content-body-box">
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="img-detail">
                                    <img src={this.props.currentBook.bookImage} width="280" height="390" />
                                    <p onClick={this.addFavorite}>
                                        收藏商品
                                        <i className="fa fa-star" />
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="book-detail">
                                    <h3>{this.props.currentBook.bookTitle}</h3>
                                    <ul className="rating-stars">
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star-half-full" /></li>
                                        <li>有2个用户评论过</li>
                                    </ul>
                                    <div className="prices">
                                        <span className="now">{`￥${(this.props.currentBook.price * this.props.currentBook.bookDiscount).toFixed(2)}`}</span>
                                        <del className="was">{`￥${this.props.currentBook.price}`}</del>
                                    </div>
                                    <h4>内容简介</h4>
                                    <p>{this.props.currentBook.introduction}</p>
                                    <div className="quantity-box">
                                        <label htmlFor="quantity">数量：</label>
                                        <InputNumber min={0} defaultValue={1} onChange={this.changeCount} />
                                    </div>
                                    <ul className="btn-list">
                                        <li onClick={this.creatCartInfo}>
                                            <a className="btn-1 sm shadow-0">
                                                加入购物车
                                            </a>
                                        </li>
                                        <li onClick={this.nowBuyBook}>
                                            <a className="btn-1 sm shadow-0" style={{ marginLeft: 30 }}>
                                                立即购买
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default PurchaseCart;
