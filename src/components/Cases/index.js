import React from 'react';
import Header from '../Header';
import { Chart, ListTypesCases, ListTypesPatients } from './styles';

const Cases = () => {
  return (
    <>
      <Header />
      <Chart />
      <ListTypesCases />
      <ListTypesPatients />
    </>
  );
};

export default Cases;
