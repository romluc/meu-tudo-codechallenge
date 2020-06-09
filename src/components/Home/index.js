import React from 'react';

import {
  Container,
  PersonImage,
  VirusImage,
  Title,
  Paragraph,
  StyledLink,
} from './styles';

const Home = () => {
  return (
    <div>
      <Container>
        <VirusImage />
        <PersonImage />
        <Title>Covid-19</Title>
        <Paragraph>
          <p>
            Protect yourself and others around you by knowing the facts and
            taking appropriate precautions.
          </p>
        </Paragraph>
        <StyledLink to="/cases">
          <p>Get Started</p>
        </StyledLink>
      </Container>
    </div>
  );
};

export default Home;
