import React from 'react';
import { Upload, Button, Spin, notification } from 'antd';
import { formatUrl } from './env';
import { basicAuth } from './auth';
import './style.less';

const transparent = 'data:image/png;base64,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';

class ImageUploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploading: false,
      imageUrl: props.default || transparent,
      holderImage: transparent
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      imageUrl: nextProps.default || transparent
    });
  }

  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  uploadOptions = {
    action: formatUrl('//cms-api{env}.dianrong.com/files'),
    headers: {
      Authorization: basicAuth()
    },
    listType: 'picture',
    data: {
      type: 'image',
      name: ''
    },
    name: 'default',
    accept: 'image/*',
    beforeUpload: (file) => {
      this.uploadOptions.data.name = `${Date.now()}`;
      const { limit = Infinity } = this.props;
      const { size } = file;
      const overSize = size / 1024 > limit;
      if (overSize) {
        notification.warn({
          message: '',
          description: `文件大小需在 ${limit} KB以内`
        });
      }

      return !overSize;
    },
    showUploadList: false,
    onChange: ({ file }) => {
      const { status } = file;
      if (status === 'uploading') {
        this.setState({ uploading: true });
      } else if (status === 'done') {
        this.setState({ uploading: false });
        const { response, originFileObj } = file;
        if (response.result === 'success') {
          this.props.onChange && this.props.onChange(response.content.dimension[0].dir);
          this.getBase64(originFileObj, imageUrl => this.setState({ imageUrl }));
        } else {
          notification.error({
            message: '',
            description: response.content
          });
        }
      } else if (status === 'error') {
        this.setState({ uploading: false });
      }
    }
  }

  handlerRemove = () => {
    this.setState({ imageUrl: this.state.holderImage });
    this.props.onChange && this.props.onChange('');
  }

  render() {
    return (
      <div className="ae-image-uploader">
        <Spin spinning={this.state.uploading}>
          <div className="ae-image-uploader-preview">
            <img src={this.state.imageUrl}/>
          </div>
        </Spin>
        <div className="ae-image-uploader-op">
          <Upload
            {...this.uploadOptions}
          >
            <Button type="ghost" htmlType="button">上传</Button>
          </Upload>
          <Button type="ghost" htmlType="button" onClick={this.handlerRemove} className="clear">清除</Button>
        </div>
      </div>
    );
  }
}

export default ImageUploader;
