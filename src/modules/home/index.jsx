// @flow
import React from "react";
import { connect } from "react-redux";
import {
  type AsyncStatusType,
  type NotificationType,
} from "shared/types/General";

type HomePageProps = {
  status: AsyncStatusType,
  notification: NotificationType,
};

const HomePage = (props: HomePageProps) => {
  return (
    <div>
     This is home page
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    status: auth.status,
    notification: auth.notification,
  };
};

const Actions = {};

export default connect(mapStateToProps, Actions)(HomePage);
