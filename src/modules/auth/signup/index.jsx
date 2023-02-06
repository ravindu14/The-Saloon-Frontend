import { useState } from 'react';

import { Input } from 'baseui/input';
import { Link } from 'react-router-dom';
import { Button, KIND } from 'baseui/button';
import { useStyletron } from 'baseui';

import AuthBanner from '../components/authBanner';

import {
  LoginContainer,
  RightContainer,
  LoginForm,
  LoginHeader,
  LoginSecondText,
  InputLabel,
  BottomLine,
  LeftContainer,
  MobileBackButton,
  LoginHeaderSection,
} from './styledComponents';
import {
  AuthButtonStyles,
  AuthInputStyles,
  AuthLinkStyles,
  AuthPasswordInputStyles,
  AuthSubButtonStyels,
  InputRow,
} from '../styledComponents';
import { toaster } from 'baseui/toast';
import { InputError } from 'styledComponents';

const Signup = () => {
  const [, theme] = useStyletron();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: null,
    password: null,
    firstName: null,
    contact: null,
    confirmPassword: null,
  });

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
  const changeContact = (value: string) => {
    setErrors({ ...errors, contact: null });
    setContact(value);
  };
  const changeConfirmPassword = (value: string) => {
    setErrors({ ...errors, confirmPassword: null });
    setConfirmPassword(value);
  };
  return (
    <LoginContainer>
      <LeftContainer>
        <AuthBanner />
      </LeftContainer>
      <RightContainer>
        <LoginHeaderSection>
          <LoginHeader>Welcome to The Saloon</LoginHeader>
          <LoginSecondText>
            Please enter your details. Merchants please contact System admin.
          </LoginSecondText>
        </LoginHeaderSection>
        <LoginForm>
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
            onClick={() => {}}
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
  );
};

export default Signup;
