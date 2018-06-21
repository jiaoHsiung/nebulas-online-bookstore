import React from 'react';
import $ from 'jquery';
import './parallax';
import './style.less';

export default class InnerBanner extends React.Component {
  componentDidMount() {
    $('.parallax-window').parallax({imageSrc: require(`../assets/${this.props.imgName}.jpg`)});
  }

  render() {
    return (
      <div className="parallax-window inner-banner" data-parallax="scroll" >
        <div className="wrapper">
          <div className="inner-page-heading">
            <h2>Shop</h2>
            <p>读书之乐何处寻 数点梅花天地心</p>
          </div>
        </div>
      </div>
    );
  }
}
