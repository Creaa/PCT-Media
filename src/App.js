import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect, HashRouter } from 'react-router-dom'
import createHistory from "history/createBrowserHistory"
import Home from './components/Home';
import Store from './components/Store'
import Checkout from './components/Store/Checkout'
import Success from './components/Store/Success'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }



  render() {
    return (
      <div className='App'>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/store' component={Store} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/success' component={Success} />
            <Redirect to="/" />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
