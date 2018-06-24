import React from 'react';
import { Form, Input, Button, Checkbox, Table, notification, Modal } from 'antd';
import AddressCascader from './addressCascader';

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
		serialNo: i + 1,
    receiver: '栗子',
    province: '四川省',
    city: '成都市',
    country: '高新区',
    StreetAddress: 'xxx',
    zipCode: 660012,
		telephone: 12345678,
		orderDate: '2017-8-12',
    favNumber: 100,
    isDefault: true
  });
}
class ReceiveAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: '序号', dataIndex: 'serialNo' },
        { title: '收货人', dataIndex: 'receiver' },
        {
          title: '收货地址', render: (text, record) => {
            return <span>{`${record.province} ${record.city} ${record.country} ${record.StreetAddress}`}</span>
          }
        },
        { title: '邮政编码', dataIndex: 'zipCode' },
        { title: '联系电话', dataIndex: 'telephone' },
        {
          title: '是否为默认地址', render: (text, record) => {
            return record.isDefault ? <span>是</span> : <span>否</span>
          }
        },
        {
          title: '操作', render: (text, record) => {
            return (
              <span>
                <a onClick={this.editAddress.bind(this, record)}>修改</a>
                <span className="ant-divider" />
                <a onClick={this.removeConfirm.bind(this, record)}>删除</a>
                {
                  !record.isDefault ? <span>
                    <span className="ant-divider" />
                    <a onClick={this.setDefaultAddress.bind(this, record, '1')}>设为默认地址</a>
                  </span> : null
                }
              </span>
            )
          }
        }
      ],
      province: '',
      city: '',
      country: '',
      currentAddress: {},
      createFlag: false
    };
    // this.getAllAddress = this.getAllAddress.bind(this);
    this.changeProvince = this.changeProvince.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.changeCountry = this.changeCountry.bind(this);
    this.checkAddressDeafult = this.checkAddressDeafult.bind(this);
  }

  changeProvince(province) {
    this.setState({
      province,
    })
  }

  changeCity(city) {
    this.setState({
      city,
    })
  }

  changeCountry(country) {
    this.setState({
      country,
    })
  }

  checkAddressDeafult(addressNo, attr, attrValue) {
    const data = this
      .props
      .addresses
      .map(address => {
        delete address.serialNo;
        if (attrValue) {
          if (address.addressNo === addressNo) {
            return {
              ...address,
              [attr]: attrValue
            };
          }

          return {
            ...address,
            [attr]: !attrValue
          };
        }

        return {
          ...address,
          [attr]: attrValue
        };
      });
    this.props.updateAddresses(data);
    return data;
  }

  setDefaultAddress(record, value) {
    const newAddresses = this.checkAddressDeafult(record.addressNo, 'isDefault', value);
    this.props.updateAddresses(newAddresses);
    this.props.updateAddress(newAddresses, (res) => {
      if (res.code) {
        notification.success({
          message: '',
          description: '设置默认地址成功'
        });
        this.getAllAddress(1);
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!!err) {
        return;
      }
      let data = {
        receiver: values.receiver,
        province: this.state.province || this.state.currentAddress.province,
        city: this.state.city || this.state.currentAddress.city,
        country: this.state.country || this.state.currentAddress.country,
        zipCode: values.zipCode,
        telephone: values.telephone,
        StreetAddress: values.StreetAddress,
        isDefault: values.default ? '1' : '0',
      }
      if (this.state.currentAddress && this.state.currentAddress.addressNo) {
        const newAddresses = this.checkAddressDeafult(this.state.currentAddress.addressNo, 'isDefault', data.isDefault);
        const updateAddress = newAddresses.map(address => {
          if (address.addressNo === this.state.currentAddress.addressNo) {
            return {
              ...address,
              ...data
            };
          }
          return Object.assign({}, address);
        });
        this.props.updateAddresses(updateAddress);
        this.props.updateAddress(updateAddress, (res) => {
          if (res.code) {
            notification.success({
              message: '',
              description: '地址修改成功'
            });
            this.props.form.resetFields();
            this.setState({
              currentAddress: {},
              createFlag: true
            });
            this.getAllAddress(1);
          }
        });
      } else {
        let addNewAddress = this.props.addresses.push({
          ...data,
          memberNo: this.props.member.memberNo,
        });
        this.props.updateAddresses(addNewAddress);
        const newAddresses = this.checkAddressDeafult(null, 'isDefault', data.isDefault);
        this.props.updateAddress(newAddresses, (res) => {
          if (res.code) {
            this.props.createAddress({
              ...data,
              memberNo: this.props.member.memberNo,
            }, () => {
              notification.success({
                message: '',
                description: '地址创建成功'
              });
              this.setState({
                createFlag: true
              });
              this.props.form.resetFields();
              this.getAllAddress(1);
            });
          }
        })
      }
    });
  }

  editAddress(address) {
    this.setState({
      currentAddress: address
    });
  }

  removeConfirm(address) {
    Modal.confirm({
      title: '确定要删除该地址？',
      onOk: () => {
        notification.success({
          message: '',
          description: '地址删除成功'
        });
        this.props.removeAddress({ memberNo: address.memberNo, addressNo: address.addressNo }, this.getAllAddress.bind(this, address.memberNo, this.props.pagination.current));
      }
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

    return (
      <Form onSubmit={this.handleSubmit} className="infoform">
        <h3>收货地址薄</h3>
        {
          data.length ? <div className="tableBox">
            <Table columns={this.state.columns} dataSource={data || []} />
            <h4>新增/修改收货地址</h4>
          </div> : null
        }
        <Form.Item label="收货人">
          {
            props('receiver', 'string', true, this.state.currentAddress.receiver)(
              <Input />
            )
          }
        </Form.Item>
        <Form.Item label="地区">
          <AddressCascader createFlag={this.state.createFlag}
            currentProvince={this.state.currentAddress.province}
            currentCity={this.state.currentAddress.city}
            currentCountry={this.state.currentAddress.country}
            changeProvince={this.changeProvince}
            changeCity={this.changeCity}
            changeCountry={this.changeCountry} />
        </Form.Item>
        <Form.Item label="街道地址">
          {
            props('StreetAddress', 'string', true, this.state.currentAddress.StreetAddress)(
              <Input />
            )
          }
        </Form.Item>
        <Form.Item label="邮政编码">
          {
            props('zipCode', 'string', true, this.state.currentAddress.zipCode)(
              <Input />
            )
          }
        </Form.Item>
        <Form.Item label="联系电话">
          {
            props('telephone', 'string', true, this.state.currentAddress.telephone)(
              <Input />
            )
          }
        </Form.Item>
        <Form.Item className="saveDefault">
          {getFieldDecorator('default', {
            valuePropName: 'checked',
            initialValue: this.state.currentAddress.isDefault,
          })(
            <Checkbox />
            )}
          <span>默认页</span>
        </Form.Item>
        <Form.Item className="savebtn receive_savebtn">
          <Button type="primary" htmlType="submit" size="large">保存</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default (Form.create()(ReceiveAddress));