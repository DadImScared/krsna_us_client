
import React from 'react';

import { Route, Redirect } from 'react-router-dom';


const ProtectedRoute = ({ component: Component, componentProps, loggedIn, ...other }) => (
  <Route
    {...other}
    render={(props) => loggedIn ? (
      <Component {...props} {...componentProps} />
    ):(
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location }
        }}
      />
    )}
  />
);

export default ProtectedRoute;
