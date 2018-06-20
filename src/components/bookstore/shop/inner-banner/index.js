import React from 'react';
import $ from 'jquery';
import './parallax';

export default class InnerBanner extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    $('.parallax-window').parallax({imageSrc: require('../assets/img-10.jpg')});
  }

  render() {
    return (
      <div className="parallax-window inner-banner tc-padding" data-parallax="scroll" >
        <div className="container">
          <div className="inner-page-heading">
            <h2>Shop</h2>
            <p>读书之乐何处寻 数点梅花天地心</p>
          </div>
        </div>
      </div>
    );
  }
}
