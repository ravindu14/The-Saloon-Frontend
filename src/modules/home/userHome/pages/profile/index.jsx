// @flow
import React, { useEffect, useState } from 'react';
import { styled } from 'baseui';
import { Input } from 'baseui/input';
import { Button, KIND } from 'baseui/button';
import { useSelector, useDispatch } from 'react-redux';
import {
  type AsyncStatusType,
  type NotificationType,
} from 'shared/types/General';
import Layout from '../../components/layout';
import { InputStyles } from 'styledComponents';
import { GoPrimitiveDot } from 'react-icons/go';
import { updateUserProfile } from 'action/auth';
import { ASYNC_STATUS } from 'constants/async';

const PageHeader = styled('div', ({ $theme }) => ({
  fontSize: '2rem',
  marginTop: '50px',
  color: $theme.colors.accent50,
  fontWeight: 600,
}));

const PageDescription = styled('p', ({ $theme }) => ({
  fontSize: '1rem',
}));

const PageContent = styled('div', ({ $theme }) => ({
  width: '50vw',
}));

const PropertyContainer = styled('div', ({ $theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
  columnGap: '10px',
  marginTop: '10px',
}));

const ProfileLabel = styled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const PropertyValue = styled('div', ({ $theme }) => ({}));

const ButtonContainer = styled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  margin: '10px 0',
}));

const StatusItem = styled('div', ({ $theme }) => ({
  color: '#065903',
  padding: '10px 0px',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
}));

const UserProfile = () => {
  const { status: loading, currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const {
    firstName: profileFirstName,
    lastName: profileLastName,
  } = currentUser;

  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (currentUser) {
      const {
        firstName,
        lastName,
        email,
        userName,
        contact,
        status,
      } = currentUser;
      setFirstname(firstName);
      setLastname(lastName);
      setEmail(email);
      setUserName(userName);
      setContact(contact);
      setStatus(status);
    }
  }, [currentUser]);

  const onClickUpdate = () => {
    const updatedUser = {
      ...currentUser,
      firstName,
      lastName,
      email,
      userName,
      contact,
    };

    dispatch(updateUserProfile(updatedUser));
  };

  const onClickReset = () => {
    if (currentUser) {
      const {
        firstName,
        lastName,
        email,
        userName,
        contact,
        status,
      } = currentUser;
      setFirstname(firstName);
      setLastname(lastName);
      setEmail(email);
      setUserName(userName);
      setContact(contact);
      setStatus(status);
    }
  };

  return (
    <Layout>
      <PageHeader>{`Hello ${profileFirstName} ${profileLastName},`}</PageHeader>
      <PageDescription>
        This is your profile details page. You can simply view your profile
        details using this page and do any updates to updatable fields whenever
        required.
      </PageDescription>
      <PageContent>
        <PropertyContainer>
          <ProfileLabel>First Name</ProfileLabel>
          <PropertyValue>
            <Input
              overrides={{ ...InputStyles }}
              value={firstName}
              onChange={event => setFirstname(event.target.value)}
            />
          </PropertyValue>
        </PropertyContainer>
        <PropertyContainer>
          <ProfileLabel>Last Name</ProfileLabel>
          <PropertyValue>
            <Input
              overrides={{ ...InputStyles }}
              value={lastName}
              onChange={event => setLastname(event.target.value)}
            />
          </PropertyValue>
        </PropertyContainer>
        <PropertyContainer>
          <ProfileLabel>Email</ProfileLabel>
          <PropertyValue>
            <Input
              overrides={{ ...InputStyles }}
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </PropertyValue>
        </PropertyContainer>
        <PropertyContainer>
          <ProfileLabel>User Name</ProfileLabel>
          <PropertyValue>
            <Input
              overrides={{ ...InputStyles }}
              value={userName}
              onChange={event => setUserName(event.target.value)}
            />
          </PropertyValue>
        </PropertyContainer>
        <PropertyContainer>
          <ProfileLabel>Contact</ProfileLabel>
          <PropertyValue>
            <Input
              overrides={{ ...InputStyles }}
              value={contact}
              onChange={event => setContact(event.target.value)}
            />
          </PropertyValue>
        </PropertyContainer>
        <PropertyContainer>
          <ProfileLabel>Status</ProfileLabel>
          <PropertyValue>
            <StatusItem>
              <GoPrimitiveDot style={{ marginRight: '10px' }} />
              {status}
            </StatusItem>
          </PropertyValue>
        </PropertyContainer>
        <ButtonContainer>
          <Button
            kind={KIND.secondary}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  padding: '10px 20px',
                  marginRight: '10px',
                  width: '150px',
                }),
              },
            }}
            onClick={onClickReset}
          >
            Reset
          </Button>
          <Button
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  padding: '10px 20px',
                  width: '150px',
                }),
              },
            }}
            isLoading={loading === ASYNC_STATUS.LOADING}
            onClick={onClickUpdate}
          >
            Update
          </Button>
        </ButtonContainer>
      </PageContent>
    </Layout>
  );
};

export default UserProfile;
