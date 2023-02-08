import { styled } from 'baseui';

import logoImage from 'assets/saloon-logo.png';

const LogoContainer = styled('div', ({ $theme }) => ({
  backgroundColor: '#179926',
  padding: '0.5rem',
  borderRadius: '0.25rem',
}));

const Image = styled('img', ({ $theme }) => ({
  maxWidth: '50px',
  width: '100%',
  height: '100%',
}));

const SaloonLogo = () => {
  return (
    <LogoContainer>
      <Image src={logoImage} alt="The Saloon" />
    </LogoContainer>
  );
};

export default SaloonLogo;
