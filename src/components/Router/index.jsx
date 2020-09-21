import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Restaurants from '../Restaurants';
import RestaurantPage from '../RestaurantPage';
import NoSuchPage from '../NoSuchPage';

const Router = () => (
  <Switch>
    <Route path="/" exact component={ToRestaurants} />
    <Route path="/restaurants" exact component={Restaurants} />
    <Route
      path="/restaurants/:currentUuid"
      exact
      component={RestaurantPage}
    />
    <Route path="/404" exact component={NoSuchPage} />
    <Route component={To404} />
  </Switch>
);

const ToRestaurants = () => (
  <Redirect to="/restaurants" />
);

const To404 = () => (
  <Redirect to="/404" />
);

export default Router;
