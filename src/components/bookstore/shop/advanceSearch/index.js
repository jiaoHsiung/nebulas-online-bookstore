import React, { Component } from 'react';
import { Modal, Form, Input, Button } from 'antd';

class AdvanceSearch extends Component {
    constructor(props) {
        super(props);
    }

    handleCancel() {
        this.props.handleCancel(false);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!!err) {
                return;
            }
            let data = {
                ISBN: values.ISBN,
                bookTitle: values.bookTitle,
                authorName: values.authorName,
                pressTitle: values.pressTitle
            }
            this.props.getAdvancedSearch(data, () => {
                this.handleCancel();
            });
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };
        return (
            <Modal
                visible={this.props.visible}
                closable={false}
                onCancel={this.handleCancel.bind(this)}
                title="基本条件查询"
                footer={null}
                width="600px"
                wrapClassName="searchModal"
            >
                <div className="content-wrap">
                    <div className="content-body-box">
                        <Form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
                            <Form.Item
                                {...formItemLayout}
                                label="ISBN"
                            >
                                {getFieldDecorator('ISBN', {
                                    rules: [{ required: false, message: '请输入图书编号!' }],
                                })(
                                    <Input placeholder="请输入图书编号" />
                                    )}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                label="图书名称"
                            >
                                {getFieldDecorator('bookTitle', {
                                    rules: [{ required: true, message: '请输入书名!' }],
                                })(
                                    <Input placeholder="请输入书名" />
                                    )}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                label="作者"
                            >
                                {getFieldDecorator('authorName', {
                                    rules: [{ required: true, message: '请输入作者姓名!' }],
                                })(
                                    <Input placeholder="请输入作者姓名" />
                                    )}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                label="出版社"
                            >
                                {getFieldDecorator('pressTitle', {
                                    rules: [{ required: true, message: '请输入出版社名称!' }],
                                })(
                                    <Input placeholder="请输入出版社名称" />
                                    )}
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit" size="large" icon="search">搜索</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default (Form.create()(AdvanceSearch));

