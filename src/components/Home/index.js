import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/cases">
            <p>Get Started</p>
          </Link>
        </Button>
      </Container>
    </div>
  );
};

export default Home;
