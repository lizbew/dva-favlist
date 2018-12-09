import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';

import AppLayout from './routes/AppLayout';
import IndexPage from './routes/IndexPage';
import FavListPage from './routes/FavListPage';
import TaskListPage from './routes/TaskListPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Route path="/" component={AppLayout}>
          <IndexRoute component={IndexPage} />
          <Route path="favlist" component={FavListPage} />
          <Route path="tasklist" component={TaskListPage} />
        </Route>
    </Router>
  );
}

export default RouterConfig;
