import React from 'react';
import { Container } from './styles';

const ListTypesCases = ({ data }) => {
  const { labels } = data;
  return (
    <Container>
      <ul>
        {labels.map((label) => (
          <li>{label}</li>
        ))}
      </ul>
    </Container>
  );
};

export default ListTypesCases;
