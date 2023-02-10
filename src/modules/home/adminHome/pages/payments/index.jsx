// @flow
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  type AsyncStatusType,
  type NotificationType,
} from 'shared/types/General';
import Layout from '../../components/layout';

const AdminPayments = () => {
  

  return (
    <Layout>
      <div>{`This is merchant payments`}</div>
    </Layout>
  );
};

export default AdminPayments;
