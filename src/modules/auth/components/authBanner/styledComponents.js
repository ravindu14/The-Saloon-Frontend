import { styled } from 'baseui';
import backgroudImage from 'assets/login-bg-img.png';

export const BannerContainer = styled('div', () => ({
  width: '100%',
  overflow: 'hidden',
  backgroundImage: `url(${backgroudImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'round',
}));

export const BackContainer = styled('div', () => ({
  height: '120px',
  marginLeft: '100px',
  display: 'flex',
  alignItems: 'center',
}));

export const Description = styled('div', () => ({
  margin: '0px 100px 40px 100px',
  letterSpacing: '1px',
}));

export const DescriptionHeader = styled('h1', () => ({
  fontSize: '2rem',
  letterSpacing: '0.1rem',
  fontWeight: 600,
  color: '#ffffff',
  marginBottom: '10px',
}));

export const DescriptionText = styled('p', () => ({
  fontSize: '0.7rem',
  fontWeight: 400,
  color: '#ffffff',
  lineHeight: '1.2rem',
  marginTop: '5px',
}));

export const ImageContainer = styled('div', () => ({
  paddingLeft: '100px',
  position: 'relative',
  width: '100%',
  height: 'calc(100vh - 170px)',
}));

export const WorkFlowImage = styled('img', () => ({
  position: 'absolute',
  bottom: 0,
  maxHeight: '100%',
}));
