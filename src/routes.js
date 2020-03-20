import React                                         from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Containers
import Full                                          from './containers/Full/'

// Pages
import Home                                         from './views/Pages/Home/'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Full}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
);