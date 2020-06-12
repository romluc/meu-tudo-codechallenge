import React from 'react';
import { Container, ListItem } from './styles';

const ListTypesCases = ({ data: { active, recovered, deaths }, colors }) => {
  const types = ['Active Cases', 'Discharges', 'Deaths'];
  const dataFromTypes = [active, recovered, deaths];
  return (
    <Container>
      <ul>
        {colors.map((color, i) => (
          <ListItem key={i}>
            <div>
              <span style={{ backgroundColor: `${color}` }} />
              <p>{types[i]}</p>
            </div>
            <p>{dataFromTypes[i]}</p>
          </ListItem>
        ))}
      </ul>
    </Container>
  );
};

export default ListTypesCases;
