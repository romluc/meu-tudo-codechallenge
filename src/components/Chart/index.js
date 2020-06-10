import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Container } from './styles';

// const data = {
//   labels: ['Red', 'Green', 'Yellow'],
//   datasets: [
//     {
//       data: [300, 50, 100],
//       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//       hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//     },
//   ],
// };

const Chart = ({ data }) => {
  return (
    <Container>
      <Doughnut data={data} />
    </Container>
  );
};

export default Chart;
