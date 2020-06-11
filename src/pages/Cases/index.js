import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import DataChart from '../../components/DataChart';
import ListTypesCases from '../../components/ListTypesCases';
import ListTypesPatients from '../../components/ListTypesPatients';
import Indicator from '../../components/Indicator';
import Loading from '../../components/Loading';

import { Container } from './styles';

import { fetchData } from '../../api';

const formatCenterText = () => {
  const randomText = parseInt(Math.random() * (10000000 - 1000000) + 1000000);

  return randomText;
};

const dataToRender = {
  labels: ['Active Cases', 'Discharges', 'Deaths'],
  datasets: [
    {
      data: [60, 25, 15],
      backgroundColor: ['#FFC259', '#FF5959', '#55E13A'],
      borderWidth: 0,
    },
  ],
  text: formatCenterText(),
  text2: 'Total Cases',
};

// const handleCountryChange = async (country) => {
//   const fetchedData = await fetchData(country);

//   this.setState({ data: fetchedData, country });
// };

const Cases = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const callFetchData = async () => {
      setLoading(true);
      const fetchedData = await fetchData();
      setData({
        data: fetchedData,
        country: '',
      });
      setLoading(false);
    };
    callFetchData();
  }, []);

  console.log(data);
  return (
    <Container>
      <Header />
      {loading && <Loading />}
      <DataChart dataToRender={dataToRender} />
      <ListTypesCases dataToRender={dataToRender} />
      <ListTypesPatients />
      <Indicator />
    </Container>
  );
};

export default Cases;
