import React from 'react';
import Header from '../../components/Header';
import Chart from '../../components/Chart';
import ListTypesCases from '../../components/ListTypesCases';

import { ListTypesPatients } from './styles';
const data = {
  labels: ['Deaths', 'Discharges', 'Active'],
  datasets: [
    {
      data: [70, 15, 15],
      backgroundColor: ['#FFC259', '#FF5959', '#55E13A'],
    },
  ],
};

const Cases = () => {
  return (
    <>
      <Header />
      <Chart data={data} />
      <ListTypesCases data={data} />
      <ListTypesPatients />
    </>
  );
};

export default Cases;
