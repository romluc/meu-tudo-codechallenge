import React from 'react';
import { Container, ListItem } from './styles';

const data = {
  labels: ['Male', 'Female', 'Children'],
  numbers: [9000, 55, 200],
};

const ListTypesPatients = () => {
  const { labels, numbers } = data;

  return (
    <Container>
      <ul>
        {labels.map((label, i) => (
          <ListItem key={i}>
            <p>{numbers[i]}</p>
            <p>{label}</p>
          </ListItem>
        ))}
      </ul>
    </Container>
  );
};

export default ListTypesPatients;
