import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import DataChart from '../../components/DataChart';
import ListTypesCases from '../../components/ListTypesCases';
import ListTypesPatients from '../../components/ListTypesPatients';
import Indicator from '../../components/Indicator';
import Loading from '../../components/Loading';

import { fetchData, fetchCountries } from '../../api';

import { Container } from './styles';

const Cases = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(false);

  const colors = ['#FFC259', '#55E13A', '#FF5959'];

  useEffect(() => {
    const callFetchData = async () => {
      setLoading(true);
      const fetchedData = await fetchData();
      setData(fetchedData);
      setLoading(false);
    };
    callFetchData();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    setData(fetchedData);
    setCountry(country);
  };

  return (
    <Container>
      <Header handleCountryChange={handleCountryChange} />
      {loading && <Loading />}
      <DataChart data={data} colors={colors} />
      <ListTypesCases data={data} colors={colors} />
      <ListTypesPatients />
      <Indicator />
    </Container>
  );
};

export default Cases;
