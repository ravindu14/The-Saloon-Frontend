import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  LoginContainer,
  RightContainer,
  LoginForm,
  LoginHeader,
  LoginSecondText,
  InputLabel,
  ForgotPassword,
  BottomLine,
  LeftContainer,
} from './styledComponents';
import {
  AuthButtonStyles,
  AuthInputStyles,
  AuthLinkStyles,
  AuthPasswordInputStyles,
  AuthSubButtonStyels,
  InputRow,
} from '../styledComponents';
import { InputError } from 'styledComponents';
import { Input } from 'baseui/input';
import { Button, KIND } from 'baseui/button';
import { toaster } from 'baseui/toast';
import { authSignIn } from 'action/auth';

import AuthBanner from '../components/authBanner';
import { ASYNC_STATUS, USER_ROLES } from 'constants/async';

type Errors = {
  email: null | string,
  password: null | string,
};

const Login = () => {
  const { status, notification, isAuthenticated, currentUser } = useSelector(
    state => state.auth
  );

  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    userName: null,
    password: null,
  });

  const changeUserName = (value: string) => {
    setErrors({ ...errors, email: null });
    setUserName(value);
  };

  const changePassword = (value: string) => {
    setErrors({ ...errors, password: null });
    setPassword(value);
  };

  const onSignIn = () => {
    dispatch(authSignIn({ userName, password }));
  };

  if (isAuthenticated) {
    const { userRole } = currentUser;
    switch (userRole) {
      case USER_ROLES.ADMIN:
        return <Redirect to={'/admin-dashboard'} />;
      case USER_ROLES.MERCHANT:
        return <Redirect to={'/merchant-dashboard'} />;
      case USER_ROLES.USER:
        return <Redirect to={'/user-dashboard'} />;
      default:
        return <Redirect to={'/login'} />;
    }
  }

  return (
    <LoginContainer>
      <LeftContainer>
        <AuthBanner />
      </LeftContainer>
      <RightContainer>
        <LoginForm>
          <LoginHeader>Welcome Back!</LoginHeader>
          <LoginSecondText>
            You're almost there! Enter your details.
          </LoginSecondText>
          <InputRow>
            <InputLabel>User Name</InputLabel>
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
          <ForgotPassword>
            <Link style={{ textDecoration: 'none', color: '#179926' }} to={'/'}>
              Forgot Password
            </Link>
          </ForgotPassword>
          <Button
            onClick={onSignIn}
            isLoading={status === ASYNC_STATUS.LOADING}
            kind={KIND.primary}
            overrides={{ ...AuthButtonStyles }}
          >
            Sign In
          </Button>
          <Button
            onClick={() => {}}
            kind={KIND.secondary}
            overrides={{ ...AuthSubButtonStyels }}
          >
            Cancel
          </Button>
          <BottomLine>
            Don't have an account?{' '}
            <Link to={'/signup'} style={{ ...AuthLinkStyles }}>
              Sign up for free
            </Link>
          </BottomLine>
        </LoginForm>
      </RightContainer>
    </LoginContainer>
  );
};

export default Login;
