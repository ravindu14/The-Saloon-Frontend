import { useState } from 'react';
import { styled } from 'baseui';
import { Link, useLocation } from 'react-router-dom';
import HeaderProfile from './HeaderProfile';

const NavigationContainer = styled('div', () => ({
  display: 'flex',
  alignItems: 'center',
  a: {
    textDecoration: 'none',
  },
}));

const NavigationItem = styled('div', ({ $theme, $selected }: any) => ({
  position: 'relative',
  margin: '0px 10px',
  background: 'none',
  padding: $selected ? '0.5rem 1.25rem' : '0.75rem 1.25rem',
  borderRadius: $selected ? '0rem' : '1.5rem',
  fontSize: '16px',
  color: '$ffffff',
  fontWeight: 500,
  borderBottom: $selected ? '2px solid #ffffff' : 'none',
  ':hover': {
    background: $selected ? 'none' : '#e5e7eb82',
  },
}));

const NavigationListEnum = {
  HOME: 'Home',
  SERVICES: 'Services',
  ADJENDA: 'Adjenda',
  APPOINTMENTS: 'Appointments',
};

const NaviagtionPathEnum = {
  HOME: 'merchant-dashboard',
  SERVICES: 'merchant-services',
  ADJENDA: 'merchant-adjenda',
  APPOINTMENTS: 'merchant-appointments',
};

const anchorStyles = {
  textDecoration: 'none',
  color: '#ffffff',
};

const HeaderNavigationBar = () => {
  const [selectedNav, setSelectedNav] = useState(NavigationListEnum.HOME);

  const location = useLocation();

  const activePath = location.pathname;

  const isActive = (path: string) => {
    return activePath.startsWith(`/${path}`);
  };

  return (
    <NavigationContainer>
      <Link to={'/merchant-dashboard'} style={anchorStyles}>
        <NavigationItem {...{ $selected: isActive(NaviagtionPathEnum.HOME) }}>
          {NavigationListEnum.HOME}
        </NavigationItem>
      </Link>
      <Link to={'/merchant-services'} style={anchorStyles}>
        <NavigationItem
          {...{ $selected: isActive(NaviagtionPathEnum.SERVICES) }}
        >
          {NavigationListEnum.SERVICES}
        </NavigationItem>
      </Link>
      <Link to={'/merchant-adjenda'} style={anchorStyles}>
        <NavigationItem
          {...{ $selected: isActive(NaviagtionPathEnum.ADJENDA) }}
        >
          {NavigationListEnum.ADJENDA}
        </NavigationItem>
      </Link>
      <Link to={'/merchant-appointments'} style={anchorStyles}>
        <NavigationItem
          {...{ $selected: isActive(NaviagtionPathEnum.APPOINTMENTS) }}
        >
          {NavigationListEnum.APPOINTMENTS}
        </NavigationItem>
      </Link>
      <HeaderProfile />
    </NavigationContainer>
  );
};

export default HeaderNavigationBar;
