// @flow
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  type AsyncStatusType,
  type NotificationType,
} from 'shared/types/General';
import Layout from '../../components/layout';
import Timetable from 'react-timetable-events';
import { styled } from 'baseui';
import { ASYNC_STATUS } from 'constants/async';
import { getMerchantProfile } from 'action/merchant';

const TimeTableContainer = styled('div', ({ $theme }) => ({
  width: '100%',
  height: 'calc(100vh - 150px)',
}));

const MerchantAdjenda = () => {
  const { status, profile } = useSelector(state => state.merchant);
  const dispatch = useDispatch();

  const [events, setEvents] = useState({
    monday: [
      {
        id: 1,
        name: 'Jane Doe',
        type: 'custom',
        startTime: new Date('2023-02-23T11:30:00'),
        endTime: new Date('2018-02-23T12:30:00'),
      },

      {
        id: 2,
        name: 'John Wick',
        type: 'custom',
        startTime: new Date('2023-02-23T13:30:00'),
        endTime: new Date('2023-02-23T14:00:00'),
      },
      {
        id: 3,
        name: 'Mac Henry',
        type: 'custom',
        startTime: new Date('2023-02-23T16:00:00'),
        endTime: new Date('2018-02-22T16:30:00'),
      },
    ],
    tuesday: [
      {
        id: 1,
        name: 'Maggy Kane',
        type: 'custom',
        startTime: new Date('2023-02-24T08:30:00'),
        endTime: new Date('2023-02-24T09:30:00'),
      },
      {
        id: 2,
        name: 'Kenady Brown',
        type: 'custom',
        startTime: new Date('2023-02-24T11:00:00'),
        endTime: new Date('2023-02-24T11:30:00'),
      },
      {
        id: 3,
        name: 'Cinty Clain',
        type: 'custom',
        startTime: new Date('2023-02-24T13:30:00'),
        endTime: new Date('2023-02-24T14:30:00'),
      },
    ],
    wednesday: [],
    thursday: [
      {
        id: 1,
        name: 'Cinty Clain',
        type: 'custom',
        startTime: new Date('2023-02-26T13:30:00'),
        endTime: new Date('2023-02-26T14:30:00'),
      },
    ],
    friday: [],
    saturday: [
      {
        id: 1,
        name: 'Clare Brown',
        type: 'custom',
        startTime: new Date('2023-02-28T10:30:00'),
        endTime: new Date('2023-02-28T11:30:00'),
      },
    ],
    sunday: [],
  });

  useEffect(() => {
    dispatch(getMerchantProfile());
  }, []);

  return (
    <Layout>
      <TimeTableContainer>
        {status !== ASYNC_STATUS.LOADING && (
          <Timetable
            events={events}
            hoursInterval={{
              from: parseInt(profile.openTime),
              to: parseInt(profile.closeTime),
            }}
            timeLabel="Time :)"
            style={{ height: '100%', width: '100%' }}
          />
        )}
      </TimeTableContainer>
    </Layout>
  );
};

export default MerchantAdjenda;
