import { styled } from 'baseui';
import React from 'react';
import Header from '../header';

type LayoutProps = {
  children: React.ReactNode,
};

export const Main = styled('div', () => ({
  height: '100vh',
  width: '100vw',
}));

export const Body = styled('div', () => ({
  padding: '100px 7rem',
}));

const Layout = ({ children }: LayoutProps) => {
  return (
    <Main>
      <Header />
      <Body>{children}</Body>
    </Main>
  );
};

export default Layout;
