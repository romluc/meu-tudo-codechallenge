import React from 'react';
import { Container, ListItem } from './styles';

const ListTypesCases = ({ dataToRender }) => {
  const { labels } = dataToRender;
  const { data, backgroundColor } = dataToRender.datasets[0];
  console.log(dataToRender);
  return (
    <Container>
      <ul>
        {labels.map((label, i) => (
          <ListItem key={label}>
            <div>
              <span style={{ backgroundColor: `${backgroundColor[i]}` }} />
              <p>{label}</p>
            </div>
            <p>{data[i]}</p>
          </ListItem>
        ))}
      </ul>
    </Container>
  );
};

export default ListTypesCases;
