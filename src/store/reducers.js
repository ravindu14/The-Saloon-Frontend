// @flow
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth, { type AuthStateType } from "reducers/auth";

export type ApplicationState = {
  auth: AuthStateType,
};

const reducers = (history: History) =>
  combineReducers({
    auth,
    router: connectRouter(history),
  });

export default reducers;
