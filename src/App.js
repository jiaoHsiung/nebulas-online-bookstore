import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Routes from './components/routers';

import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
	        {
		        Routes.map(({name, path, exact = true, component }) => (
			        <Route path={path} exact={exact} component={component} key={name} />
		        ))
	        }
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
