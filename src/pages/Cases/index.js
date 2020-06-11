import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Chart from '../../components/Chart';
import ListTypesCases from '../../components/ListTypesCases';
import ListTypesPatients from '../../components/ListTypesPatients';
import Rectangle from '../../components/Rectangle';

import { Container } from './styles';

import { fetchData } from '../../api';

const dataToRender = {
  labels: ['Active Cases', 'Discharges', 'Deaths'],
  datasets: [
    {
      data: [60, 25, 15],
      backgroundColor: ['#FFC259', '#FF5959', '#55E13A'],
      borderWidth: 0,
    },
  ],
};

// const handleCountryChange = async (country) => {
//   const fetchedData = await fetchData(country);

//   this.setState({ data: fetchedData, country });
// };

const Cases = () => {
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   const callFetchData = async () => {
  //     const fetchedData = await fetchData();
  //     setData({
  //       data: fetchedData,
  //       country: '',
  //     });
  //   };
  //   callFetchData();
  // }, []);

  // console.log(data);
  return (
    <Container>
      <Header />
      <Chart dataToRender={dataToRender} />
      <ListTypesCases dataToRender={dataToRender} />
      <ListTypesPatients />
      <Rectangle />
    </Container>
  );
};

export default Cases;
