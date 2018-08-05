import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';

import AppLayout from './routes/AppLayout';
import IndexPage from './routes/IndexPage';
import FavListPage from './routes/FavListPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Route path="/" component={AppLayout}>
          <IndexRoute component={IndexPage} />
          <Route path="favlist" component={FavListPage} />
        </Route>
    </Router>
  );
}

export default RouterConfig;
