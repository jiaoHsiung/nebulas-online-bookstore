import React from 'react';
import moment from 'moment';
import { Tabs, Form, Input, Radio, Button, notification, DatePicker } from 'antd';
import UploadImg from '../image-uploader';
import ImgDatas from './imgSrc.json';

import './myinfo.less';

class MyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      defaultImg: ''
    });
  }

  componentDidMount() {
    let username = localStorage.getItem('username');
    if(username) {
      this.props.getMemberInfo({email: username});
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!!err) {
        return;
      }
      let data = {
        memName: values.memName,
        sex: values.sex,
        employee: values.employee,
        birthday: values.birthday.format('YYYY-MM-DD'),
        address: values.address,
        telephone: values.phone,
        introduction: values.introduction,
        memImg: this.state.defaultImg || this.props.member.defaultImg
      };

      if (this.props.member && this.props.member.memberNo) {
        this.props.updateMember({
          ...this.props.member,
          ...data
        }, () => {
          notification.success({
            message: '',
            description: '信息更新成功'
          });
        })
      }
    });
  }

  getBase64(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
    var dataURL = canvas.toDataURL("image/" + ext);
    return dataURL;
  }

  changeCurrentPhoto(defaultImg) {
    const img = new Image();
    img.src = require(`${defaultImg}`);
    this.setState({
      defaultImg: this.getBase64(img)
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const props = (name, type, required, defaultValue) => getFieldDecorator(name, {
      rules: [
        { required, type: type || 'string', message: '请填写此字段' }
      ],
      initialValue: defaultValue || ''
    });
    const dateFormat = 'YYYY-MM-DD';
    return (
      <Form onSubmit={this.handleSubmit} className="infoform">
        <h3>编辑个人信息</h3>
        <div className="choiceImg">
          <div className="edit-photo">
            <div className="photo_prev">
              <UploadImg default={this.state.defaultImg} oncChange={this.changeCurrentPhoto.bind(this)} />
            </div>
            <div className="photo_browse">
              <p>您可以在下方选择自己喜欢的头像：</p>
              <div className="card-container">
                <Tabs type="card">
                  {
                    ImgDatas.map((imgTab, idx) => {
                      return (
                        <Tabs.TabPane tab={imgTab['key']} key={idx + 1}>
                          <div className="img_wrap">
                            {
                              imgTab.items.map((imgData, index) => {
                                return (
                                  <div className="img_choice" key={index}>
                                    <a href="javascript:" onClick={this.changeCurrentPhoto.bind(this, `${imgTab.imgPrefix + imgData}`)}>
                                      <img src={require(`${imgTab.imgPrefix + imgData}`)} />
                                    </a>
                                  </div>
                                );
                              })
                            }
                          </div>
                        </Tabs.TabPane>
                      );
                    })
                  }
                </Tabs>
              </div>
              <p className="suggestPara">建议尺寸96*96像素</p>
            </div>
          </div>
        </div>
        <Form.Item label="昵称">
          {
            props('memName', 'string', true)(
              <Input />
            )
          }
        </Form.Item>
        <Form.Item label="性别">
          {
            props('sex', 'string', true)(
              <Radio.Group>
                <Radio value="男">男</Radio>
                <Radio value="女">女</Radio>
              </Radio.Group>
            )
          }
        </Form.Item>
        <Form.Item label="身份">
          {
            props('employee', 'string', true)(
              <Radio.Group>
                <Radio value="在校学生">在校学生</Radio>
                <Radio value="教师">教师</Radio>
                <Radio value="上班族">上班族</Radio>
                <Radio value="自由职业">自由职业</Radio>
              </Radio.Group>
            )
          }
        </Form.Item>
        <Form.Item label="生日">
          {
            props('birthday', 'object', false)(
              <DatePicker format={dateFormat} />
            )
          }
        </Form.Item>
        <Form.Item label="家庭地址">
          {
            props('address', 'string', false)(
              <Input />
            )
          }
        </Form.Item>
        <Form.Item label="联系电话">
          {
            props('phone', 'string', true)(
              <Input />
            )
          }
        </Form.Item>
        <Form.Item label="电子邮箱">
          <Input  />
        </Form.Item>
        <Form.Item label="个人签名">
          {
            props('introduction', 'string', false)(
              <textarea className="text-intro" />
            )
          }
        </Form.Item>
        <Form.Item className="savebtn">
          <Button type="primary" htmlType="submit" size="large">保存基本信息</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(MyInfo);
