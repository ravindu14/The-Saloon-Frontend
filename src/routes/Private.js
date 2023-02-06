// @flow
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//import { type AuthStateType } from 'reducers/auth';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  path,
  ...rest
}: {
  component: Function,
  isAuthenticated: boolean,
  //currentUserRole: $PropertyType<AuthStateType, 'role'>,
  //roles: $PropertyType<AuthStateType, 'role'>[],
  path: string,
  location?: Object,
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
