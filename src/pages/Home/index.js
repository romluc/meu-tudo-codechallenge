import React from 'react';

import {
  Container,
  PersonImage,
  VirusImage,
  ImagesContainer,
  Title,
  Paragraph,
  StyledLink,
} from './styles';

const Home = () => {
  return (
    <Container>
      {/* <ImagesContainer> */}
      <VirusImage />
      <PersonImage />
      {/* </ImagesContainer> */}
      <Title>Covid-19</Title>
      <Paragraph>
        <p>
          Protect yourself and others around you by knowing the facts and taking
          appropriate precautions.
        </p>
      </Paragraph>
      <StyledLink to="/cases">
        <p>Get Started</p>
      </StyledLink>
    </Container>
  );
};

export default Home;
