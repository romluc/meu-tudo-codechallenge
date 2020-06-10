import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Chart from '../../components/Chart';
import ListTypesCases from '../../components/ListTypesCases';

import { fetchData } from '../../api';

import { ListTypesPatients } from './styles';
// const data = {
//   labels: ['Deaths', 'Discharges', 'Active'],
//   datasets: [
//     {
//       data: [70, 15, 15],
//       backgroundColor: ['#FFC259', '#FF5959', '#55E13A'],
//     },
//   ],
// };

// const handleCountryChange = async (country) => {
//   const fetchedData = await fetchData(country);

//   this.setState({ data: fetchedData, country });
// };

const Cases = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const callFetchData = async () => {
      const fetchedData = await fetchData();
      setData({
        data: fetchedData,
        country: '',
      });
    };
    callFetchData();
  }, []);

  return (
    <>
      <Header />
      <Chart data={data.data} />
      {}
      {/* <ListTypesCases data={data} /> */}
      <ListTypesPatients />
    </>
  );
};

export default Cases;
