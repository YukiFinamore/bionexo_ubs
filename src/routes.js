import React                             from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Pages
import Home                              from './views/Pages/Home/Home'

export default (
  <Router history={browserHistory}>
    <Route exact path="/" component={Home}/>
  </Router>
);