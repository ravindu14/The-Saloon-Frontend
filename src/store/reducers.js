// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth, { type AuthStateType } from 'reducers/auth';
import merchant, { type MerchantStateType } from 'reducers/merchant';

export type ApplicationState = {
  auth: AuthStateType,
  merchant: MerchantStateType,
};

const reducers = (history: History) =>
  combineReducers({
    auth,
    merchant,
    router: connectRouter(history),
  });

export default reducers;
