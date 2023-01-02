// @flow
import { ASYNC_AUTH_INIT, HANDLE_NOTIFICATION } from "actionTypes/auth";
import Alert from "components/Alert";

function asyncAuthInit() {
  return {
    type: ASYNC_AUTH_INIT,
  };
}

function notificationHandler(isSuccess, message) {
  return {
    type: HANDLE_NOTIFICATION,
    payload: {
      isSuccess,
      notification: {
        type: isSuccess ? Alert.TYPE.SUCCESS : Alert.TYPE.ERROR,
        message,
      },
    },
  };
}
