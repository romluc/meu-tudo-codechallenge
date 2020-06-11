import React from 'react';
import { Chart, Doughnut } from 'react-chartjs-2';
import { Container } from './styles';

let originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function () {
    originalDoughnutDraw.apply(this, arguments);

    // Draw number in the center of the chart
    let chart = this.chart.chart;
    let ctx = chart.ctx;
    let width = chart.width;
    let height = chart.height;

    ctx.font = '500 30px Roboto, sans-serif';
    ctx.fontWeight = 'bold';
    ctx.fillStyle = '#3C4954';
    ctx.textBaseline = 'middle';

    let text = chart.config.data.text || 'Loading...',
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2 - 10;

    ctx.fillText(text, textX, textY);

    // Draw subtitle for the number
    ctx.font = '500 16px Roboto, sans-serif';
    ctx.fillStyle = '#78849E';
    ctx.textBaseline = 'middle';

    let text2 = 'Total Cases',
      text2X = Math.round((width - ctx.measureText(text2).width) / 2),
      text2Y = height / 2 + 20;

    ctx.fillText(text2, text2X, text2Y);
  },
});

const DataChart = ({
  dataToRender: { confirmed, recovered, deaths, active },
  colors,
}) => {
  console.log(colors);
  const data = {
    labels: ['Active Cases', 'Discharges', 'Deaths'],
    datasets: [
      {
        data: [
          ((active / confirmed) * 100).toFixed(2),
          ((recovered / confirmed) * 100).toFixed(2),
          ((deaths / confirmed) * 100).toFixed(2),
        ],
        backgroundColor: [colors[0], colors[1], colors[2]],
        borderWidth: 0,
      },
    ],
    text: confirmed,
    text2: 'Total Cases',
  };

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
      <Doughnut data={data} options={options} />
    </Container>
  );
};

export default DataChart;
