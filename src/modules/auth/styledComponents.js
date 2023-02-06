import { styled } from 'baseui';

export const InputRow = styled('div', () => ({
  marginBottom: '10px',
}));

export const AuthInputStyles = {
  Root: {
    style: ({ $isFocused, $theme, $error }: any) => ({
      borderRadius: '10px',
      margin: '10px 0px',
      borderColor: $isFocused
        ? $theme.colors.inputBorderPositive
        : $error
        ? '#e0505e'
        : $theme.colors.inputBorder,
    }),
  },
  Input: {
    style: ({ $error }: any) => ({
      backgroundColor: $error ? '#ffeeee' : '#ffffff',
    }),
  },
};

export const AuthPasswordInputStyles = {
  Root: {
    style: ({ $isFocused, $theme, $error }: any) => ({
      borderRadius: '10px',
      margin: '10px 0px',
      backgroundColor: $error ? '#ffeeee' : '#ffffff',
      borderColor: $isFocused
        ? $theme.colors.inputBorderPositive
        : $error
        ? '#e0505e'
        : $theme.colors.inputBorder,
    }),
  },
  Input: {
    style: ({ $error }: any) => ({
      backgroundColor: $error ? '#ffeeee' : '#ffffff',
    }),
  },
  MaskToggleButton: {
    style: () => ({
      backgroundColor: '#ffffff',
    }),
  },
};

export const AuthButtonStyles = {
  BaseButton: {
    style: () => ({
      borderRadius: '10px',
      width: '100%',
      marginBottom: '10px',
    }),
  },
};

export const AuthSubButtonStyels = {
  BaseButton: {
    style: () => ({
      borderRadius: '10px',
      width: '100%',
      marginBottom: '10px',
      outline: '1px solid #bababa',
    }),
  },
};

export const AuthLinkStyles = { textDecoration: 'none', color: '#179926' };
