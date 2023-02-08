// @flow
import { type Action } from 'shared/types/ReducerAction';
import {
  type AsyncStatusType,
  type NotificationType,
} from 'shared/types/General';

import { ASYNC_STATUS } from 'constants/async';
import {
  ASYNC_MERCHANT_INIT,
  HANDLE_NOTIFICATION,
  GET_SERVICES_SUCCESS,
} from 'actionTypes/merchant';

export type MerchantStateType = {
  status: AsyncStatusType,
  notification: NotificationType,
  services: Array<any>,
};

const initialState: AuthStateType = {
  status: ASYNC_STATUS.INIT,
  notification: null,
  services: [],
};

function asyncMerchantInit(state: AuthStateType) {
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
  state: MerchantStateType = initialState,
  { type, payload = {} }: Action
) => {
  switch (type) {
    case ASYNC_MERCHANT_INIT:
      return asyncMerchantInit(state);
    case HANDLE_NOTIFICATION:
      return handleNotification(state, payload);
    case GET_SERVICES_SUCCESS:
      return {
        ...state,
        status: ASYNC_STATUS.SUCCESS,
        services: payload,
      };
    default:
      return state;
  }
};

export default reducer;
