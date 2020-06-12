import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { fetchCountries } from '../../api';

import {
  Container,
  StatusBar,
  TitleBar,
  MenuBar,
  CountryPicker,
  Select,
  Navbar,
} from './styles';

import globe from '../../assets/globe-32.png';
import menu from '../../assets/menu.png';
import notification from '../../assets/notification.png';

const Header = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  const [flag, setFlag] = useState('');

  const time = moment().format('LT');

  useEffect(() => {
    const fetchedAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchedAPI();
  }, [setFetchedCountries]);

  const changeFlag = (e) => {
    // Taking only the first to letters of the country's name will emulate the country's ISO2 code, which access the flag in the api
    setFlag(e.slice(0, 2));
  };

  return (
    <Container>
      <StatusBar>
        <span>{time}</span>
        <div>
          <i className="fas fa-signal"></i>
          <i className="fas fa-wifi"></i>
          <i className="fas fa-battery-three-quarters"></i>
        </div>
      </StatusBar>
      <MenuBar>
        <img src={menu} alt="menu icon" />
        <img src={notification} alt="bell sign for notification" />
      </MenuBar>
      <TitleBar>
        <p>covid-19</p>
        <CountryPicker>
          {/*  */}
          <img
            src={
              !flag ? globe : `https://www.countryflags.io/${flag}/flat/32.png`
            }
            alt="flag from picked country or globe if global search"
          />
          <Select
            default=""
            onChange={(e) => {
              handleCountryChange(e.target.value);
              changeFlag(e.target.value);
            }}
          >
            <option value={''}>Global</option>
            {fetchedCountries.map((country, i) => (
              <option key={i} value={country.name}>
                {country.iso3}
              </option>
            ))}
          </Select>
        </CountryPicker>
      </TitleBar>
      <Navbar>
        <li>
          <Link to="/cases">Cases</Link>
        </li>
        <li>
          <Link to="/prevention">Prevention</Link>
        </li>
        <li>
          <Link to="/">Hospitals</Link>
        </li>
      </Navbar>
    </Container>
  );
};

export default Header;
