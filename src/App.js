import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';
import IndexLayout from './IndexLayout';
import App1 from './App1';

class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path="/" component={IndexLayout} />
            <Route exact path="/app" component={App1} />
        </Switch>
    )
  }
}

export default App
