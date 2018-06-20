import React from 'react';
import Header from '../../common/header';
import Footer from '../../common/footer';
import InnerBanner from './inner-banner';
import Main from './main';

class Shop extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <InnerBanner />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Shop;
