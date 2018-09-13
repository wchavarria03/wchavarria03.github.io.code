import React from 'react';
import App from '@/components/App/App.jsx';
import NotFoundPage from '@/components/NotFound/NotFound.jsx';
import { HashRouter, Switch, Route } from 'react-router-dom';

export default (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={NotFoundPage} />
    </Switch>
  </HashRouter>
);