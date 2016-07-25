import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from './App';
import MenuDaily from './views/MenuDaily';
import NewMenu from './views/NewMenu';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MenuDaily} />
    <Route path="new" component={NewMenu} />
  </Route>
);
