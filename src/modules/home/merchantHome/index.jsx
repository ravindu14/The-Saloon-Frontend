// @flow
import { styled } from 'baseui';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  type AsyncStatusType,
  type NotificationType,
} from 'shared/types/General';
import Layout from './components/layout';
import MerchantBanner from 'assets/merchant/saloon-Banner.jpeg';
import { Input } from 'baseui/input';
import { Textarea } from 'baseui/textarea';
import { InputStyles, SelectStyles } from 'styledComponents';
import { getMerchantProfile, updateMerchantProfile } from 'action/merchant';
import { Select } from 'baseui/select';
import { Button, KIND } from 'baseui/button';
import { ASYNC_STATUS } from 'constants/async';

const HomeContainer = styled('div', ({ $theme }) => ({
  width: '100%',
}));

const BannerImageContainer = styled('div', ({ $theme }) => ({
  borderRadius: '1.5rem',
  width: '100%',
}));

const Banner = styled('img', ({ $theme }) => ({
  borderRadius: '1.5rem',
  width: '100%',
  maxWidth: '100%',
}));

const DetailContainer = styled('div', ({ $theme }) => ({}));

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

const MerchantDashboard = () => {
  const { status, profile } = useSelector(state => state.merchant);
  const dispatch = useDispatch();

  const [businessName, setBusinessName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [openTime, setOpenTime] = useState('7');
  const [closeTime, setCloseTime] = useState('18');
  const [description, setDescription] = useState('');

  useEffect(() => {
    dispatch(getMerchantProfile());
  }, []);

  useEffect(() => {
    if (profile) {
      const {
        businessName,
        contact,
        openTime,
        closeTime,
        description,
        address,
      } = profile;

      setBusinessName(businessName);
      setContact(contact);
      setOpenTime({ id: openTime, label: openTime });
      setCloseTime({ id: closeTime, label: closeTime });
      setDescription(description);
      setAddress(address);
    }
  }, [profile]);

  const onReset = () => {
    const {
      businessName,
      contact,
      openTime,
      closeTime,
      description,
      address,
    } = profile;

    setBusinessName(businessName);
    setContact(contact);
    setOpenTime([{ id: openTime, label: openTime }]);
    setCloseTime([{ id: closeTime, label: closeTime }]);
    setDescription(description);
    setAddress(address);
  };

  const onUpdate = () => {
    const updatedProfile = {
      ...profile,
      businessName,
      contact,
      openTime: openTime[0].id,
      closeTime: closeTime[0].id,
      description,
      address,
    };

    dispatch(updateMerchantProfile(updatedProfile));
  };

  return (
    <Layout>
      <HomeContainer>
        <BannerImageContainer>
          <Banner src={MerchantBanner} alt="merchant banner" />
        </BannerImageContainer>
        <DetailContainer>
          <PropertyContainer>
            <ProfileLabel>Business Name</ProfileLabel>
            <PropertyValue>
              <Input
                overrides={{ ...InputStyles }}
                value={businessName}
                onChange={event => setBusinessName(event.target.value)}
              />
            </PropertyValue>
          </PropertyContainer>
          <PropertyContainer>
            <ProfileLabel>Address</ProfileLabel>
            <PropertyValue>
              <Input
                overrides={{ ...InputStyles }}
                value={address}
                onChange={event => setAddress(event.target.value)}
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
            <ProfileLabel>Open Time</ProfileLabel>
            <PropertyValue>
              <Select
                clearable={false}
                value={openTime}
                searchable={false}
                options={[
                  { label: '1', id: '1' },
                  { label: '2', id: '2' },
                  { label: '3', id: '3' },
                  { label: '4', id: '4' },
                  { label: '5', id: '5' },
                  { label: '6', id: '6' },
                  { label: '7', id: '7' },
                  { label: '8', id: '8' },
                  { label: '9', id: '9' },
                  { label: '10', id: '10' },
                  { label: '11', id: '11' },
                  { label: '12', id: '12' },
                  { label: '13', id: '13' },
                  { label: '14', id: '14' },
                  { label: '15', id: '15' },
                  { label: '16', id: '16' },
                  { label: '17', id: '17' },
                  { label: '18', id: '18' },
                  { label: '19', id: '19' },
                  { label: '20', id: '20' },
                  { label: '21', id: '21' },
                  { label: '22', id: '22' },
                  { label: '23', id: '23' },
                ]}
                onChange={({ value }) => setOpenTime(value)}
                overrides={{ ...SelectStyles }}
              />
            </PropertyValue>
          </PropertyContainer>
          <PropertyContainer>
            <ProfileLabel>Close Time</ProfileLabel>
            <PropertyValue>
              <Select
                clearable={false}
                value={closeTime}
                searchable={false}
                options={[
                  { label: '1', id: '1' },
                  { label: '2', id: '2' },
                  { label: '3', id: '3' },
                  { label: '4', id: '4' },
                  { label: '5', id: '5' },
                  { label: '6', id: '6' },
                  { label: '7', id: '7' },
                  { label: '8', id: '8' },
                  { label: '9', id: '9' },
                  { label: '10', id: '10' },
                  { label: '11', id: '11' },
                  { label: '12', id: '12' },
                  { label: '13', id: '13' },
                  { label: '14', id: '14' },
                  { label: '15', id: '15' },
                  { label: '16', id: '16' },
                  { label: '17', id: '17' },
                  { label: '18', id: '18' },
                  { label: '19', id: '19' },
                  { label: '20', id: '20' },
                  { label: '21', id: '21' },
                  { label: '22', id: '22' },
                  { label: '23', id: '23' },
                ]}
                onChange={({ value }) => setCloseTime(value)}
                overrides={{ ...SelectStyles }}
              />
            </PropertyValue>
          </PropertyContainer>
          <PropertyContainer>
            <ProfileLabel>Business Description</ProfileLabel>
            <PropertyValue>
              <Textarea
                overrides={{ ...InputStyles }}
                value={description}
                onChange={event => setDescription(event.target.value)}
              />
            </PropertyValue>
          </PropertyContainer>
        </DetailContainer>
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
            onClick={onReset}
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
            isLoading={status === ASYNC_STATUS.LOADING}
            onClick={onUpdate}
          >
            Update
          </Button>
        </ButtonContainer>
      </HomeContainer>
    </Layout>
  );
};

export default MerchantDashboard;
