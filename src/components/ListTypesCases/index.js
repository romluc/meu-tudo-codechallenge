import React from 'react';
import { Container, ListItem } from './styles';

const ListTypesCases = ({
  dataToRender: { confirmed, recovered, deaths, active },
}) => {
  const { labels } = data;
  const { data, backgroundColor } = data.datasets[0];
  console.log(data);
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
