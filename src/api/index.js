import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let dynamicUrl = url;

  if (country) {
    dynamicUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths },
    } = await axios.get(dynamicUrl);

    return {
      confirmed,
      recovered,
      deaths,
    };
  } catch (error) {
    console.log(error);
  }
};
