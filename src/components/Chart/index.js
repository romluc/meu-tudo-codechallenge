import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Container } from './styles';

const Chart = ({ dataToRender }) => {
  const options = {
    cutoutPercentage: 80,
    legend: {
      display: false,
    },
    plugins: {
      datalabels: {
        color: '#3C4954',
        font: {
          size: 20,
          weight: 500,
        },
        align: 'end',
        offset: 10,
      },
    },
  };

  return (
    <Container>
      <Doughnut data={dataToRender} options={options} />
    </Container>
  );
};

export default Chart;
