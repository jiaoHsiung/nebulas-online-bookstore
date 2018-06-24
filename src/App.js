import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Routes from './components/routers';
import Header from './components/common/header';
import Footer from './components/common/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="root-wrapper">
          <Header />
          <Switch>
            {
              Routes.map(({name, path, exact = false, component }) => (
                <Route path={path} exact={exact} component={component} key={name} />
              ))
            }
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
