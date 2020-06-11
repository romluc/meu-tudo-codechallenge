import React from 'react';
import CountUp from 'react-countup';
import { Container, ListItem } from './styles';

const data = {
  labels: ['Male', 'Female', 'Children'],
  numbers: [4225000, 2230745, 50134],
};

const ListTypesPatients = () => {
  const { labels, numbers } = data;

  return (
    <Container>
      <ul>
        {labels.map((label, i) => (
          <ListItem key={i}>
            <p>
              <CountUp start={0} end={numbers[i]} duration={1.5} separator="" />
            </p>
            <p>{label}</p>
          </ListItem>
        ))}
      </ul>
    </Container>
  );
};

export default ListTypesPatients;
