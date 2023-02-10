// @flow
import { type Action } from 'shared/types/ReducerAction';
import {
  type AsyncStatusType,
  type NotificationType,
} from 'shared/types/General';

import { ASYNC_STATUS } from 'constants/async';
import {
  ASYNC_AUTH_INIT,
  HANDLE_NOTIFICATION,
  USER_SIGN_IN_SUCCESS,
  INITIAL_AUTH_FAIL,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_SIGN_OUT_SUCCESS,
  USER_SIGN_UP_SUCCESS,
} from 'actionTypes/auth';

export type AuthStateType = {
  status: AsyncStatusType,
  notification: NotificationType,
  isAuthenticated: boolean,
  currentUser: any,
};

const initialState: AuthStateType = {
  status: ASYNC_STATUS.INIT,
  notification: null,
  isAuthenticated: false,
  currentUser: null,
};

function asyncAuthInit(state: AuthStateType) {
  return {
    ...state,
    status: ASYNC_STATUS.LOADING,
    notification: null,
  };
}

function asyncInitialAuthFail(state: AuthStateType) {
  return {
    ...state,
    status: ASYNC_STATUS.INIT,
    notification: null,
    isAuthenticated: false,
    currentUser: null,
  };
}

function handleNotification(state: AuthStateType, { isSuccess, notification }) {
  return {
    ...state,
    notification,
    status: isSuccess ? ASYNC_STATUS.SUCCESS : ASYNC_STATUS.FAILURE,
  };
}

const reducer = (
  state: AuthStateType = initialState,
  { type, payload = {} }: Action
) => {
  switch (type) {
    case ASYNC_AUTH_INIT:
      return asyncAuthInit(state);
    case HANDLE_NOTIFICATION:
      return handleNotification(state, payload);
    case INITIAL_AUTH_FAIL:
      return asyncInitialAuthFail(state);
    case USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        status: ASYNC_STATUS.SUCCESS,
        isAuthenticated: true,
        currentUser: payload,
      };
    case USER_PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        status: ASYNC_STATUS.SUCCESS,
        currentUser: payload,
      };
    case USER_SIGN_OUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        currentUser: null,
      };
    case USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        status: ASYNC_STATUS.SUCCESS,
      };
    default:
      return state;
  }
};

export default reducer;
