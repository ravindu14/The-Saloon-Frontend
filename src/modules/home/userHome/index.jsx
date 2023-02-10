// @flow
import { getMerchantProfiles } from 'action/merchant';
import { styled } from 'baseui';
import { Button, KIND } from 'baseui/button';
import { Search } from 'baseui/icon';
import { Input } from 'baseui/input';
import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  type AsyncStatusType,
  type NotificationType,
} from 'shared/types/General';
import { InputStyles } from 'styledComponents';
import Layout from './components/layout';
import MerchantI from 'assets/merchant/saloon-Banner.jpeg';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'baseui/modal';
import { ASYNC_STATUS } from 'constants/async';
import Timetable from 'react-timetable-events';

const PageContainer = styled('div', ({ $theme }) => ({
  width: '100%',
}));

const TopContainer = styled('div', ({ $theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
  columnGap: '15px',
}));

const LeftContainer = styled('div', ({ $theme }) => ({
  height: '70vh',
  border: '1px solid #179926',
  borderRadius: '1rem',
  boxShadow: '1px 1px 10px #e0e0e0',
  padding: '1rem',
}));

const RightContainer = styled('div', ({ $theme }) => ({
  height: '70vh',
  border: '1px solid #179926',
  borderRadius: '1rem',
  boxShadow: '1px 1px 10px #e0e0e0',
  padding: '1rem',
}));

const LeftHeader = styled('div', ({ $theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 500,
}));

const ItemContainer = styled('div', ({ $theme }) => ({
  marginTop: '10px',
}));

const Appointment = styled('div', ({ $theme }) => ({
  boxShadow: '1px 1px 10px #031700',
  borderRadius: '1rem',
  marginBottom: '10px',
  padding: '0.5rem',
}));

const AppointmentItem = styled('div', ({ $theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 500,
  marginBottom: '0.5rem',
  color: '#031700',
}));

const AppointmentDetails = styled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const AppointmentPlace = styled('div', ({ $theme }) => ({
  fontSize: '1rem',
}));

const AppointmentDate = styled('div', ({ $theme }) => ({
  fontSize: '0.8rem',
}));

const AppointmentTime = styled('div', ({ $theme }) => ({
  fontSize: '0.8rem',
}));

const RightItemContainer = styled('div', ({ $theme }) => ({
  marginTop: '10px',
  position: 'relative',
}));

const MerchantList = styled('div', ({ $theme }) => ({
  borderRadius: '1rem',
  position: 'absolute',
  boxShadow: '1px 1px 10px #e0e0e0',
  width: '100%',
  top: '50px',
}));

const MerchantItem = styled('div', ({ $theme }) => ({
  padding: '1rem',
  fontSize: '0.8rem',
  ':hover': {
    backgroundColor: '#f7f7f7',
  },
}));

const MerchantProfileDisplay = styled('div', ({ $theme }) => ({}));

const ProfileImage = styled('img', ({ $theme }) => ({
  maxWidth: '100%',
  borderRadius: '1rem',
  margin: '10px 0',
}));

const ProfileName = styled('div', ({ $theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
}));

const OpenClose = styled('span', ({ $theme }) => ({
  fontSize: '0.8rem',
  fontWeight: 400,
  marginLeft: '20px',
}));

const ContactNow = styled('div', ({ $theme }) => ({
  fontSize: '1rem',
  fontWeight: 400,
  marginTop: '10px',
}));

const DescriptionContainer = styled('div', ({ $theme }) => ({
  fontSize: '0.9rem',
  fontWeight: 400,
  marginTop: '10px',
}));

const ButtonContainer = styled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '10px',
}));

const HeaderText = styled('div', () => ({
  fontSize: '1.5rem',
  color: '#000000',
  fontWeight: '600',
}));

const ContentContainer = styled('div', ({ $theme }: any) => ({
  height: '65vh',
  overflow: 'auto',
}));

const ModalButtonContainer = styled('div', () => ({
  display: 'flex',
  justifyContent: 'space-between',
  height: '2.5rem',
}));

const AppointmentSection = styled('div', () => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const DateContainer = styled('div', () => ({
  display: 'flex',
  alignItems: 'center',
  width: '35%',
}));

const TimeContainer = styled('div', () => ({
  display: 'flex',
  alignItems: 'center',
  width: '35%',
}));

const ScheduleSection = styled('div', () => ({
  width: '100%',
  height: 'calc(100vh - 150px)',
  overflow: 'auto',
  marginTop: '10px',
}));

const InputLabel = styled('label', () => ({
  fontSize: '0.8rem',
}));

const UserDashboard = () => {
  const { status, searchProfiles } = useSelector(state => state.merchant);
  const [keyword, setKeyword] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [open, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
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

  const [Appointments, setAppointments] = useState([
    {
      id: '123124414',
      merchant: 'Trellos Shaiz',
      date: '2023-02-15',
      time: '12.30',
      service: 'Hair Cut',
    },
    {
      id: '887724414',
      merchant: 'Nail Kingdom',
      date: '2023-02-16',
      time: '09.30',
      service: 'Nail Art',
    },
  ]);

  const onClickItem = Name => {
    const selected = searchProfiles.filter(
      ({ businessName }) => Name === businessName
    );
    setSelectedProfile(selected[0]);
    setIsOpen(false);
  };

  const getEndEnhancer = () => {
    return (
      <Button
        kind={KIND.secondary}
        onClick={() => {
          onClickGetMerchantProfiles();
          setIsOpen(true);
        }}
        overrides={{
          BaseButton: {
            style: () => ({ outline: `none !important` }),
          },
        }}
      >
        <Search />
      </Button>
    );
  };

  const onClickGetMerchantProfiles = () => {
    dispatch(getMerchantProfiles({ keyword }));
  };

  const onModalSave = () => {
    const NewItem = {
      id: '87234782374',
      merchant: selectedProfile.businessName,
      date,
      time,
      service: 'Hair Cut',
    };

    setAppointments([...Appointments, NewItem]);

    setDate('');
    setTime('');

    setOpenModal(false);
  };

  return (
    <Layout>
      <PageContainer>
        <TopContainer>
          <LeftContainer>
            <LeftHeader>Your Appointments</LeftHeader>
            <ItemContainer>
              {Appointments.map(item => {
                return (
                  <Appointment key={item.id}>
                    <AppointmentItem>{item.service}</AppointmentItem>
                    <AppointmentDetails>
                      <AppointmentPlace>{item.merchant}</AppointmentPlace>
                      <AppointmentDate>{item.date}</AppointmentDate>
                      <AppointmentTime>{item.time}</AppointmentTime>
                    </AppointmentDetails>
                  </Appointment>
                );
              })}
            </ItemContainer>
          </LeftContainer>
          <RightContainer>
            <LeftHeader>New Appointment?</LeftHeader>
            <RightItemContainer>
              <Input
                value={keyword}
                onChange={event => setKeyword(event.target.value)}
                overrides={{ ...InputStyles }}
                endEnhancer={getEndEnhancer}
              />
              {open && searchProfiles && searchProfiles.length > 0 && (
                <MerchantList>
                  {searchProfiles.map(profile => (
                    <MerchantItem
                      key={profile.businessName}
                      onClick={() => onClickItem(profile.businessName)}
                    >
                      {profile.businessName}
                    </MerchantItem>
                  ))}
                </MerchantList>
              )}
            </RightItemContainer>
            {selectedProfile && (
              <MerchantProfileDisplay>
                <ProfileImage src={MerchantI} alt="merchant banner" />
                <ProfileName>
                  {selectedProfile.businessName}
                  <OpenClose>{`From ${selectedProfile.openTime}:00 to ${selectedProfile.closeTime}:00`}</OpenClose>
                </ProfileName>
                <ContactNow>{`Contact Now ${selectedProfile.contact}`}</ContactNow>
                <DescriptionContainer>
                  {selectedProfile.description}
                </DescriptionContainer>
                <ButtonContainer>
                  <Button
                    kind={KIND.primary}
                    overrides={{
                      BaseButton: {
                        style: ({ $theme }) => ({
                          padding: '10px 20px',
                        }),
                      },
                    }}
                    onClick={() => setOpenModal(true)}
                  >
                    Make Appointment
                  </Button>
                </ButtonContainer>
              </MerchantProfileDisplay>
            )}
          </RightContainer>
        </TopContainer>
      </PageContainer>
      <Modal
        onClose={() => setOpenModal(false)}
        closeable
        isOpen={openModal}
        animate
        autoFocus
        overrides={{
          Root: {
            style: () => ({
              zIndex: 999,
            }),
          },
          Dialog: {
            style: ({ $theme }) => ({
              width: '90%',
            }),
          },
        }}
      >
        <ModalHeader>
          <HeaderText>New Appointment</HeaderText>
        </ModalHeader>
        <ModalBody>
          <ContentContainer>
            <AppointmentSection>
              <DateContainer>
                <InputLabel>Select Date</InputLabel>
                <Input
                  value={date}
                  type="date"
                  onChange={event => setDate(event.target.value)}
                  placeholder="Date"
                  overrides={{ ...InputStyles }}
                />
              </DateContainer>
              <TimeContainer>
                <InputLabel>Select Time</InputLabel>
                <Input
                  value={time}
                  type="time"
                  onChange={event => setTime(event.target.value)}
                  placeholder="time"
                  overrides={{ ...InputStyles }}
                />
              </TimeContainer>
              <Button
                kind={KIND.primary}
                overrides={{
                  BaseButton: {
                    style: () => ({ borderRadius: '10px', width: '150px' }),
                  },
                }}
                onClick={onModalSave}
              >
                Save
              </Button>
            </AppointmentSection>
            <ScheduleSection>
              {openModal && status !== ASYNC_STATUS.LOADING && (
                <Timetable
                  events={events}
                  hoursInterval={{
                    from: parseInt(selectedProfile.openTime),
                    to: parseInt(selectedProfile.closeTime),
                  }}
                  timeLabel="Time :)"
                  style={{ height: '500px', width: '100%' }}
                />
              )}
            </ScheduleSection>
          </ContentContainer>
        </ModalBody>
      </Modal>
    </Layout>
  );
};

export default UserDashboard;
