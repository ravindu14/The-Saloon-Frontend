import {
  BannerContainer,
  Description,
  DescriptionHeader,
  DescriptionText,
  ImageContainer,
  WorkFlowImage,
} from './styledComponents';
import workFlowImage from 'assets/login-bg.png';
import React from 'react';

const AuthBanner = () => {
  return (
    <BannerContainer>
      <Description>
        <DescriptionHeader>The Saloon</DescriptionHeader>
        <DescriptionText>
          The saloon is a platform where you can engage with all your beauty
          service providers. You can simply view provider profiles to check the
          services, prices and the quality of the work. You want a service? It's
          simple. Check for the best available time slot for you. Make
          appointment. Tired to explain what you want over and over? Don't worry
          we are here to help. Simply create a gallery to explain what service
          you want. Add a small note. You don't have to explain anything on
          location.
        </DescriptionText>
      </Description>
      <ImageContainer>
        <WorkFlowImage src={workFlowImage} alt="background" />
      </ImageContainer>
    </BannerContainer>
  );
};

export default AuthBanner;
