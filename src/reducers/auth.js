// @flow
import { type Action } from "shared/types/ReducerAction";
import {
  type AsyncStatusType,
  type NotificationType,
} from "shared/types/General";

import { ASYNC_STATUS } from "constants/async";
import { ASYNC_AUTH_INIT, HANDLE_NOTIFICATION } from "actionTypes/auth";

export type AuthStateType = {
  status: AsyncStatusType,
  notification: NotificationType,
};

const initialState: AuthStateType = {
  status: ASYNC_STATUS.INIT,
  notification: null,
};

function asyncAuthInit(state: AuthStateType) {
  return {
    ...state,
    status: ASYNC_STATUS.LOADING,
    notification: null,
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
    default:
      return state;
  }
};

export default reducer;
