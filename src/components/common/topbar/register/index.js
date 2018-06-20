import React, { Component } from 'react';
import { Modal, Button, Form, Icon, Input, Checkbox, notification } from 'antd';
import debounce from 'lodash/debounce';

import '../login/login.less';

const FormItem = Form.Item;
class Register extends Component {
  constructor(props) {
    super(props);
    this.validateEmail = debounce(this.validateEmail.bind(this), 500);;
  }

  handleCancel() {
    this.props.handleCancel(false);
  }

  validateEmail(rule, val, cb) {
    this.props.checkEmail({ email: val }, (res) => {
      if (!res.code) {
        cb();
      } else {
        cb("该邮箱已经被注册！");
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!!err) {
        return;
      }
      let data = {
        memName: values.memName,
        email: values.email,
        memPassword: values.password
      };

      this.props.createMember(data, () => {
        notification.success({
          message: '',
          description: '注册成功'
        });
        this.handleCancel();
      });
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        visible={this.props.visible}
        closable={false}
        onCancel={this.handleCancel.bind(this)}
        footer={null}
        width="840px"
        wrapClassName="loginModal"
      >
        <div className="content-wrap">
          <div className="content-body-box">
            <div className="row">
              <div className="col-lg-6">
                <img src={require('../assets/lr.png')} alt="" />
              </div>
              <div className="col-lg-6">
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <h3>Miss熊网上书店会员注册</h3>
                  <FormItem>
                    {getFieldDecorator('memName', {
                      rules: [{ required: true, message: '请输入你的昵称!' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入你的昵称" />
                      )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('email', {
                      rules: [{ required: true, validator: this.validateEmail.bind(this) }],
                    })(
                      <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="请输入你的电子邮箱" />
                      )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                      <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
                      )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('remember', {
                      valuePropName: 'checked',
                      initialValue: true,
                    })(
                      <Checkbox>记住我</Checkbox>
                      )}
                    <a className="login-form-forgot" href="">忘记密码</a>
                    <Button htmlType="submit" className="login-form-button">
                      注册
                      </Button>
                    <span>已有账号？ </span>
                    <a href="">立即登录!</a>
                  </FormItem>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default (Form.create()(Register));
