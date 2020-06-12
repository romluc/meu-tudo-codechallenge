import React, { useState, useEffect } from 'react';
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
import menu from '../../assets/menu/menu.png';
import notification from '../../assets/notification/notification.png';

const Header = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  const time = moment().format('LT');

  useEffect(() => {
    const fetchedAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchedAPI();
  }, [setFetchedCountries]);

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
          <Select
            default=""
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            {fetchedCountries.map((country, i) => {
              <>
                <img
                  src={`https://www.countryflags.io/${country.iso2}/flat/32.png`}
                  alt="flag from picked country or globe if global search"
                />
                <option value={''}>Global</option>
                <option key={i} value={country.name}>
                  {country.iso3}
                </option>
              </>;
            })}
          </Select>
        </CountryPicker>
      </TitleBar>
      <Navbar>
        <li>
          <a href="/cases">Cases</a>
        </li>
        <li>
          <a href="/prevention">Prevention</a>
        </li>
        <li>
          <a href="/">Hospitals</a>
        </li>
      </Navbar>
    </Container>
  );
};

export default Header;
