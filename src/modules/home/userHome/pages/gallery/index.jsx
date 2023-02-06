// @flow
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  type AsyncStatusType,
  type NotificationType,
} from 'shared/types/General';
import Layout from '../../components/layout';

const UserGallery = () => {
  const { status, currentUser } = useSelector(state => state.auth);

  return (
    <Layout>
      <div>{`This is new user gallery ${currentUser.firstName}`}</div>
    </Layout>
  );
};

export default UserGallery;
