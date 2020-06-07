import React from 'react';
import { Container, Image, Title, Paragraph, Button } from './styles';

const Home = () => {
  return (
    <div>
      <Container>
        <Image />
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
