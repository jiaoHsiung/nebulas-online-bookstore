import React, { Component } from 'react';
import { Modal, Button, Form, Icon, Input, Checkbox, notification } from 'antd';

import './login.less';

class Login extends Component {
  constructor(props) {
    super(props);
    this.checkLogin = this.checkLogin.bind(this);
  }

  handleCancel() {
    this.props.handleCancel(false);
  }

  checkLogin(nextState, replaceState, callback) {
    const self = this;
    self.props.checkLogin(nextState)
      .then((ret) => {
        if (ret.value) {
          callback();
        }
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!!err) {
        return;
      }
      let data = {
        email: values.email,
        memPassword: values.memPassword
      }
      this.checkLogin(data, null, () => {
        notification.success({
          message: '',
          description: '登录成功'
        });
        this.handleCancel();
        this.props.loginUserSuccess(data.email);
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
                  <h3>欢迎登录Miss熊网上书店</h3>
                  <Form.Item>
                    {getFieldDecorator('email', {
                      rules: [{ required: true, message: '请输入电子邮箱!' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入电子邮箱" />
                      )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('memPassword', {
                      rules: [{ required: true, message: '请输入密码!' }],
                    })(
                      <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
                      )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('remember', {
                      valuePropName: 'checked',
                      initialValue: true,
                    })(
                      <Checkbox>记住我</Checkbox>
                      )}
                    <a className="login-form-forgot" href="">忘记密码</a>
                    <Button htmlType="submit" className="login-form-button">
                      登录
                      </Button>
                    <span>没有账号？ </span>
                    <a href="">立即注册!</a>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default (Form.create()(Login));
