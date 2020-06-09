import React from 'react';
import {
  Container,
  PersonImage,
  VirusImage,
  Title,
  Paragraph,
  Button,
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
        <Button>
          <p>Get Started</p>
        </Button>
      </Container>
    </div>
  );
};

export default Home;
