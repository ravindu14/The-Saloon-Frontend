import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'store';
import Routes from 'routes';
import reportWebVitals from './reportWebVitals';
import Theme from './theme';

import { registerServices, serviceManager } from 'services/manager';
import { Provider } from 'react-redux';

import './index.scss';
import { isUserAuthenticated } from 'action/auth';

const settings = {
  api: {
    baseUrl: 'http://localhost:8080',
  },
};

registerServices(settings);

/**
 * configuring redux store
 */
const store = configureStore({}, serviceManager);

store.dispatch(isUserAuthenticated());

ReactDOM.render(
  <Theme>
    <Provider store={store}>
      <Routes />
    </Provider>
  </Theme>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
