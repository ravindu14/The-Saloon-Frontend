import React from 'react';
import { createTheme, BaseProvider } from 'baseui';
import { Client as Styletron } from 'styletron-engine-monolithic';
import { Provider as StyletronProvider } from 'styletron-react';

const engine = new Styletron();

const primitives = {
  textPrimary: '#9F9F9F',
  accent: '#171717',
  accent50: '#FDEDFC',
  accent100: '#f5f2f5',
  accent200: '#d1d1d1',
  accent300: '#F45AEA',
  accent400: '#F127E4',
  accent500: '#B71DAD',
  accent600: '#179926',
  accent700: '#46b853',
};
const theme = createTheme(primitives, {
  colors: {
    buttonPrimaryFill: primitives.accent600,
    buttonPrimaryHover: primitives.accent700,
    buttonSecondaryFill: primitives.accent100,
    buttonSecondaryText: primitives.accent,
    buttonSecondaryHover: primitives.accent200,
    buttonSecondaryActive: primitives.accent300,
    buttonSecondarySelectedFill: primitives.accent200,
    buttonSecondarySelectedText: primitives.accent,
    buttonSecondarySpinnerForeground: primitives.accent700,
    buttonSecondarySpinnerBackground: primitives.accent300,
  },
  typography: {
    font100: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '11px',
      fontWeight: 'normal',
      lineHeight: '16px',
    },
    font200: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '12px',
      fontWeight: 'normal',
      lineHeight: '20px',
    },
    font250: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '12px',
      fontWeight: 'normal',
      lineHeight: '20px',
    },
    font300: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '20px',
    },
    font350: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '20px',
    },
    font400: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '16px',
      fontWeight: 'normal',
      lineHeight: '24px',
    },
    font450: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
    },
    font500: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '20px',
      fontWeight: 'normal',
      lineHeight: '28px',
    },
    font600: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '24px',
      fontWeight: 'normal',
      lineHeight: '36px',
    },
    font700: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '32px',
      fontWeight: 'normal',
      lineHeight: '48px',
    },
    font800: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '40px',
      fontWeight: 'normal',
      lineHeight: '56px',
    },
    font900: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '52px',
      fontWeight: 'normal',
      lineHeight: '68px',
    },
    font1000: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '72px',
      fontWeight: 'normal',
      lineHeight: '96px',
    },
    font1100: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '96px',
      fontWeight: 'normal',
      lineHeight: '116px',
    },
  },
  breakpoints: {
    small: '350px',
    medium: '600px',
    large: '1280px',
  },
});

const Theme: React.FC = ({ children }) => (
  <StyletronProvider value={engine}>
    <BaseProvider theme={theme}>{children}</BaseProvider>
  </StyletronProvider>
);

export default Theme;
