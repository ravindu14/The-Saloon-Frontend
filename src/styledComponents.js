import { KIND, KindType } from 'baseui/toast';
import { styled } from 'baseui';

export const toasterStyles = {
  Root: {
    style: () => ({
      zIndex: 9999,
    }),
  },
  ToastBody: {
    style: ({ $kind }: any) => ({
      borderLeft: '7px solid',
      borderRadius: '7px',
      borderLeftColor: getToastBorderColor($kind),
      backgroundColor: getToastBackgroundColor($kind),
      color: getToastBorderColor($kind),
    }),
  },
};

const getToastBorderColor = (kind: KindType) => {
  switch (kind) {
    case KIND.negative:
      return '#e0505e';
    case KIND.info:
      return '#1991ff';
    case KIND.positive:
      return '#2bc15d';
    case KIND.warning:
      return '#ff8541';
    default:
      return '#e0505e';
  }
};

const getToastBackgroundColor = (kind: KindType) => {
  switch (kind) {
    case KIND.negative:
      return '#ffeeee';
    case KIND.info:
      return '#eef0ff';
    case KIND.positive:
      return '#eeffef';
    case KIND.warning:
      return '#fff8ee';
    default:
      return '#ffeeee';
  }
};

export const InputError = styled('div', () => ({
  fontSize: '0.7rem',
  color: '#e0505e',
}));

export const InputStyles = {
  Root: {
    style: ({ $error }: any) => ({
      width: '100%',
      borderRadius: '7px !important',
      margin: '0px',
      backgroundColor: '#ffffff',
      border: `1px solid ${$error ? '#e0505e' : '#eeeeee'}`,
    }),
  },
  Input: {
    style: ({ $error }: any) => ({
      fontSize: '0.8rem',
      lineHeight: '15px',
      backgroundColor: $error ? '#ffeeee' : '#ffffff',
    }),
  },
  EndEnhancer: {
    style: () => ({
      backgroundColor: 'transparent',
      fontStyle: 'italic',
      fontsize: '0.5rem',
      color: '#999999',
    }),
  },
  StartEnhancer: {
    style: () => ({
      backgroundColor: 'transparent',
    }),
  },
};

export const PaymentInputStyles = {
  Root: {
    style: ({ $error }: any) => ({
      width: '100%',
      borderRadius: '7px !important',
      margin: '0px',
      backgroundColor: '#ffffff',
      border: `1px solid ${$error ? '#e0505e' : '#eeeeee'}`,
    }),
  },
  Input: {
    style: ({ $error }: any) => ({
      fontSize: '0.8rem',
      lineHeight: '15px',
      backgroundColor: $error ? '#ffeeee' : '#ffffff',
    }),
  },
  InputContainer: {
    style: ({ $error }: any) => ({
      fontSize: '0.8rem',
      lineHeight: '15px',
      backgroundColor: $error ? '#ffeeee' : '#ffffff',
    }),
  },
};
