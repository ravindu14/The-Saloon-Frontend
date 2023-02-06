// @flow
import React, { Suspense, PureComponent, Fragment } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'store';
import { connect } from 'react-redux';

import { isAuthenticated } from 'selectors/auth';

import Loader from '../components/loader';
import routes from './routes';
import PublicRoute from './Public';
import PrivateRoute from './Private';

type RoutesProps = {
  isAuthenticated: Boolean,
};

class Routes extends PureComponent<RoutesProps> {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <Fragment>
        <ConnectedRouter history={history}>
          <BrowserRouter>
            <Suspense fallback={<Loader />}>
              <Switch>
                {routes.map((route, i) => {
                  if (route.auth) {
                    return (
                      <PrivateRoute
                        isAuthenticated={isAuthenticated}
                        key={i}
                        {...route}
                      />
                    );
                  }
                  return <PublicRoute key={i} {...route} />;
                })}
              </Switch>
            </Suspense>
          </BrowserRouter>
        </ConnectedRouter>
      </Fragment>
    );
  }
}

const Actions = {};

function mapStateToProps(state) {
  return {
    isAuthenticated: isAuthenticated(state),
  };
}

export default connect(mapStateToProps, Actions)(Routes);
