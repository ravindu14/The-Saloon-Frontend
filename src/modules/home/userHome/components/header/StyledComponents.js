import { styled } from 'baseui';

export const HeaderContainer = styled('div', ({ $theme }) => ({
  width: '100vw',
  backgroundColor: '#179926',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  top: 0,
  boxShadow: '0px 1px 1px #e0e0e0',
  padding: '0.75rem 0',
  zIndex: 99,
}));

export const LeftContainer = styled('div', () => ({
  marginLeft: '4rem',
  display: 'flex',
  alignItems: 'center',
}));

export const RightContainer = styled('div', () => ({
  marginRight: '4rem',
}));

export const LineSeparator = styled('div', () => ({
  height: '25px',
  borderLeft: '1px solid #ffffff',
  margin: '0px 10px',
}));

export const HeaderBreadcrumbs = styled('div', () => ({
  fontSize: '18px',
  fontWeight: '600',
  color: '#ffffff',
}));
