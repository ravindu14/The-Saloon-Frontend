// @flow
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  type AsyncStatusType,
  type NotificationType,
} from 'shared/types/General';
import Layout from '../../components/layout';

const MerchantAppointments = () => {
  const { status, currentUser } = useSelector(state => state.auth);

  return (
    <Layout>
      <div>{`This is merchant appointments ${currentUser.firstName}`}</div>
    </Layout>
  );
};

export default MerchantAppointments;
