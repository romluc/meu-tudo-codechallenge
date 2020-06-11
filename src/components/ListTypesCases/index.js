import React from 'react';
import CountUp from 'react-countup';
import { Container, ListItem } from './styles';

const ListTypesCases = ({
  dataToRender: { active, recovered, deaths },
  colors,
}) => {
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
