// @flow
import {
  ASYNC_MERCHANT_INIT,
  GET_MERCHANT_PROFILE_SUCCESS,
  GET_SERVICES_SUCCESS,
  HANDLE_NOTIFICATION,
} from 'actionTypes/merchant';
import Alert from 'components/Alert';

const asyncMerchantInit = () => {
  return {
    type: ASYNC_MERCHANT_INIT,
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

export const createService = (service: any) => {
  return async (dispatch, getState, serviceManager) => {
    try {
      dispatch(asyncMerchantInit());

      let merchantService = serviceManager.get('MerchantService');

      const { success } = await merchantService.createService(service);

      if (!success) {
        dispatch(notificationHandler(false, 'Failed to create service'));
        return;
      }

      const {
        success: retrieveSuccess,
        data,
      } = await merchantService.getServices();

      if (!retrieveSuccess) {
        dispatch(
          notificationHandler(retrieveSuccess, 'Failed to fetch services')
        );
        return;
      }

      dispatch({ type: GET_SERVICES_SUCCESS, payload: data });
    } catch (e) {
      dispatch(notificationHandler(false, 'Something went wrong'));
    }
  };
};

export const getAllServices = () => {
  return async (dispatch, getState, serviceManager) => {
    try {
      dispatch(asyncMerchantInit());

      let merchantService = serviceManager.get('MerchantService');

      const {
        success: retrieveSuccess,
        data,
      } = await merchantService.getServices();

      if (!retrieveSuccess) {
        dispatch(
          notificationHandler(retrieveSuccess, 'Failed to fetch services')
        );
        return;
      }

      dispatch({ type: GET_SERVICES_SUCCESS, payload: data });
    } catch (e) {
      dispatch(notificationHandler(false, 'Something went wrong'));
    }
  };
};

export const getMerchantProfile = () => {
  return async (dispatch, getState, serviceManager) => {
    try {
      dispatch(asyncMerchantInit());

      let merchantService = serviceManager.get('MerchantService');

      const {
        success: retrieveSuccess,
        data,
      } = await merchantService.getMerchantProfile();

      if (!retrieveSuccess) {
        dispatch(
          notificationHandler(retrieveSuccess, 'Failed to fetch profile')
        );
        return;
      }

      dispatch({ type: GET_MERCHANT_PROFILE_SUCCESS, payload: data });
    } catch (e) {
      dispatch(notificationHandler(false, 'Something went wrong'));
    }
  };
};

export const updateMerchantProfile = (profile: any) => {
  return async (dispatch, getState, serviceManager) => {
    try {
      dispatch(asyncMerchantInit());

      let merchantService = serviceManager.get('MerchantService');

      const { success, data } = await merchantService.updateProfile(profile);

      if (!success) {
        dispatch(notificationHandler(false, 'Failed to update profile'));
        return;
      }

      dispatch({ type: GET_MERCHANT_PROFILE_SUCCESS, payload: data });
    } catch (e) {
      dispatch(notificationHandler(false, 'Something went wrong'));
    }
  };
};
