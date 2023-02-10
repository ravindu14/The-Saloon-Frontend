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
import { InputError, InputStyles, SelectStyles } from 'styledComponents';
import { getMerchantProfile, updateMerchantProfile } from 'action/merchant';
import { Select } from 'baseui/select';
import { Button, KIND } from 'baseui/button';
import { ASYNC_STATUS } from 'constants/async';
import {
  AuthButtonStyles,
  AuthInputStyles,
  AuthLinkStyles,
  AuthPasswordInputStyles,
  AuthSubButtonStyels,
  InputRow,
} from 'modules/auth/styledComponents';
import { Link } from 'react-router-dom';
import { authSignUp } from 'action/auth';
import { v4 } from 'uuid';

export const LoginContainer = styled('div', () => ({
  width: '100%',

  display: 'flex',
  overflow: 'hidden',
}));

export const LeftContainer = styled('div', ({ $theme }: any) => ({
  width: '55%',
  [`@media only screen and (max-width: ${$theme.breakpoints.medium})`]: {
    display: 'none',
  },
}));

export const RightContainer = styled('div', ({ $theme }: any) => ({
  width: '100%',
  backgroundColor: '#ffffff',
  [`@media only screen and (max-width: ${$theme.breakpoints.medium})`]: {
    width: '100%',
  },
}));

export const LoginForm = styled('div', ({ $theme }: any) => ({
  margin: '0px 100px 100px 100px',
  overflowY: 'auto',
  padding: '2px',
}));

export const LoginHeaderSection = styled('div', ({ $theme }: any) => ({
  margin: '50px 100px 0px 100px',
  padding: '2px',
}));

export const LoginHeader = styled('h1', () => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: '10px',
  color: '#000000',
}));

export const LoginSecondText = styled('p', () => ({
  margin: '0 0 40px 0',
  fontSize: '0.8rem',
}));

export const InputLabel = styled('label', () => ({
  fontSize: '0.8rem',
}));

export const ForgotPassword = styled('div', () => ({
  fontSize: '0.8rem',
  fontWeight: 500,
  textAlign: 'right',
  marginBottom: '30px',
}));

export const BottomLine = styled('div', () => ({
  fontSize: '0.8rem',
  fontWeight: 400,
  textAlign: 'center',
  marginTop: '10px',
}));

export const MobileBackButton = styled('div', ({ $theme }: any) => ({
  display: 'none',
  [`@media only screen and (max-width: ${$theme.breakpoints.medium})`]: {
    display: 'flex',
    alignItems: 'center',
    height: '100px',
    marginLeft: '10px',
  },
}));

const AdminDashboard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [userName, setUserName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: null,
    password: null,
    firstName: null,
    contact: null,
    confirmPassword: null,
    userName: null,
  });

  const dispatch = useDispatch();

  const changeEmail = (value: string) => {
    setErrors({ ...errors, email: null });
    setEmail(value);
  };
  const changePassword = (value: string) => {
    setErrors({ ...errors, password: null });
    setPassword(value);
  };
  const changeFirstName = (value: string) => {
    setErrors({ ...errors, firstName: null });
    setFirstName(value);
  };

  const changeUserName = (value: string) => {
    setErrors({ ...errors, userName: null });
    setUserName(value);
  };

  const changeContact = (value: string) => {
    setErrors({ ...errors, contact: null });
    setContact(value);
  };
  const changeConfirmPassword = (value: string) => {
    setErrors({ ...errors, confirmPassword: null });
    setConfirmPassword(value);
  };

  const onSignUp = () => {
    const newUser = {
      userId: v4(),
      userName,
      firstName,
      lastName,
      email,
      contact,
      password,
      userRole: 'Merchant',
      status: 'Activated',
    };

    dispatch(authSignUp(newUser));
  };

  return (
    <Layout>
      <LoginContainer>
        <RightContainer>
          <LoginHeaderSection>
            <LoginHeader>Welcome to The Saloon</LoginHeader>
            <LoginSecondText>Please Register your merchants</LoginSecondText>
          </LoginHeaderSection>
          <LoginForm>
            <InputRow>
              <InputLabel>User name</InputLabel>
              <Input
                value={userName}
                error={errors.userName !== null}
                onChange={event => changeUserName(event.currentTarget.value)}
                placeholder="User Name"
                overrides={{ ...AuthInputStyles }}
              />
              {errors.userName !== null && (
                <InputError>{errors.userName}</InputError>
              )}
            </InputRow>
            <InputRow>
              <InputLabel>first name</InputLabel>
              <Input
                value={firstName}
                error={errors.firstName !== null}
                onChange={event => changeFirstName(event.currentTarget.value)}
                placeholder="Fist Name"
                overrides={{ ...AuthInputStyles }}
              />
              {errors.firstName !== null && (
                <InputError>{errors.firstName}</InputError>
              )}
            </InputRow>
            <InputRow>
              <InputLabel>last name</InputLabel>
              <Input
                value={lastName}
                onChange={event => setLastName(event.currentTarget.value)}
                placeholder="Last Name"
                overrides={{ ...AuthInputStyles }}
              />
            </InputRow>
            <InputRow>
              <InputLabel>Email</InputLabel>
              <Input
                value={email}
                error={errors.email !== null}
                onChange={event => changeEmail(event.currentTarget.value)}
                placeholder="email"
                overrides={{ ...AuthInputStyles }}
              />
              {errors.email !== null && <InputError>{errors.email}</InputError>}
            </InputRow>
            <InputRow>
              <InputLabel>Contact Number</InputLabel>
              <Input
                value={contact}
                error={errors.contact !== null}
                onChange={event => changeContact(event.currentTarget.value)}
                placeholder="contact number"
                overrides={{ ...AuthInputStyles }}
              />
              {errors.contact !== null && (
                <InputError>{errors.contact}</InputError>
              )}
            </InputRow>
            <InputRow>
              <InputLabel>Password</InputLabel>
              <Input
                value={password}
                error={errors.password !== null}
                onChange={event => changePassword(event.currentTarget.value)}
                type="password"
                placeholder="* * * * * *"
                overrides={{ ...AuthPasswordInputStyles }}
              />
              {errors.password !== null && (
                <InputError>{errors.password}</InputError>
              )}
            </InputRow>
            <InputRow>
              <InputLabel>Confirm Password</InputLabel>
              <Input
                value={confirmPassword}
                error={errors.confirmPassword !== null}
                onChange={event =>
                  changeConfirmPassword(event.currentTarget.value)
                }
                type="password"
                placeholder="* * * * * *"
                overrides={{ ...AuthPasswordInputStyles }}
              />
              {errors.confirmPassword !== null && (
                <InputError>{errors.confirmPassword}</InputError>
              )}
            </InputRow>
            <Button
              isLoading={loading}
              onClick={onSignUp}
              overrides={{ ...AuthButtonStyles }}
            >
              Sign Up
            </Button>
            <Button
              onClick={() => {}}
              kind={KIND.secondary}
              overrides={{ ...AuthSubButtonStyels }}
            >
              Cancel
            </Button>
            <BottomLine>
              Already have an account?{' '}
              <Link to={'/login'} style={{ ...AuthLinkStyles }}>
                Sign In
              </Link>
            </BottomLine>
          </LoginForm>
        </RightContainer>
      </LoginContainer>
    </Layout>
  );
};

export default AdminDashboard;
