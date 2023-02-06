// @flow
import {
  ASYNC_AUTH_INIT,
  HANDLE_NOTIFICATION,
  INITIAL_AUTH_FAIL,
  USER_SIGN_IN_SUCCESS,
} from 'actionTypes/auth';
import Alert from 'components/Alert';

const asyncAuthInit = () => {
  return {
    type: ASYNC_AUTH_INIT,
  };
};

const asyncInitialAuthFail = () => {
  return {
    type: INITIAL_AUTH_FAIL,
  };
};

const notificationHandler = (isSuccess, message) => {
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
};

export const authSignIn = ({ userName, password }) => {
  return async (dispatch, getState, serviceManager) => {
    try {
      dispatch(asyncAuthInit());

      let authService = serviceManager.get('AuthService');

      const { success, data } = await authService.signIn({
        userName,
        password,
      });

      if (!success) {
        dispatch(notificationHandler(false, 'Login Failed.'));
        return;
      }

      serviceManager.get('ApiService').authToken = data.token;

      localStorage.setItem('access-token', data.token);

      const {
        success: userSuccess,
        data: currentUser,
      } = await authService.getCurretUser();

      if (!userSuccess) {
        dispatch(
          notificationHandler(userSuccess, 'Failed to fetch user profile')
        );
        return;
      }

      dispatch({ type: USER_SIGN_IN_SUCCESS, payload: currentUser });
    } catch (e) {
      dispatch(notificationHandler(false, 'Something went wrong'));
    }
  };
};

export const isUserAuthenticated = () => {
  return async (dispatch, getState, serviceManager) => {
    try {
      dispatch(asyncAuthInit());

      let authService = serviceManager.get('AuthService');

      const token = localStorage.getItem('access-token');

      if (!token) {
        dispatch(asyncInitialAuthFail());
        return;
      }

      serviceManager.get('ApiService').authToken = token;

      const {
        success: userSuccess,
        data: currentUser,
      } = await authService.getCurretUser();

      if (!userSuccess) {
        dispatch(
          notificationHandler(userSuccess, 'Failed to fetch user profile')
        );
        return;
      }

      dispatch({ type: USER_SIGN_IN_SUCCESS, payload: currentUser });
    } catch (e) {
      dispatch(notificationHandler(false, 'Something went wrong'));
    }
  };
};
