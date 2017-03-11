// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/log" component={Log} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;