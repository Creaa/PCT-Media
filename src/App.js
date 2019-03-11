import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import Home from './components/Home';
import Store from './components/Store'
import Checkout from './components/Store/Checkout'
import Succes from './components/Store/Succes'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }



  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <Switch>
            <Route path='/store' exact component={Store} />
            <Route path='/' exact component={Home} />
            <Route path='/checkout' exact component={Checkout} />
            <Route path='/succes' exact component={Succes} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
