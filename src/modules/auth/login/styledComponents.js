import { styled } from 'baseui';

export const LoginContainer = styled('div', () => ({
  width: '100%',
  height: '100vh',
  backgroundColor: '#179926',
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
  width: '45%',
  backgroundColor: '#ffffff',
  [`@media only screen and (max-width: ${$theme.breakpoints.medium})`]: {
    width: '100%',
  },
}));

export const LoginForm = styled('div', ({ $theme }: any) => ({
  margin: '100px',
  height: 'calc(100vh - 120px)',
  overflowY: 'auto',
  padding: '2px',
  [`@media only screen and (max-width: ${$theme.breakpoints.large})`]: {
    margin: '100px 10px',
  },
  [`@media only screen and (max-width: ${$theme.breakpoints.medium})`]: {
    margin: '10px',
    height: 'calc(100vh - 120px)',
  },
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

export const ButtonText = styled('span', () => ({
  marginLeft: '10px',
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
