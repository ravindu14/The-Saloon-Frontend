// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import {
  type AsyncStatusType,
  type NotificationType,
} from 'shared/types/General';

const Dashboard = () => {
  const { status, notification, isAuthenticated } = useSelector(
    state => state.auth
  );

  return <div>This is user dashboard</div>;
};

export default Dashboard;
