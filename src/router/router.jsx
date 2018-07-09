import React from 'react';
import About from '@/components/About/About.jsx';
import App from '@/components/App/App.jsx';
import Dashboard from '@/components/Dashboard/Dashboard.jsx';
import NotFoundPage from '@/components/NotFound/NotFound.jsx';
import Login from '@/components/Login/Login.jsx';
import { HashRouter, Switch, Route } from 'react-router-dom';

export default (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={App} />
        {/* <IndexRoute exact path="/" component={Dashboard} /> */}
        {/* <Route path="/about" component={About} />
        <Route component={NotFoundPage} /> */}
      <Route exact path="/login" component={Login} />
    </Switch>
  </HashRouter>
);