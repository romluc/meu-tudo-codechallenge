import React from 'react';
import Header from '../../components/Header';
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
