import React from 'react';
import { StatusBar, CountryPicker, Navbar } from './styles';

const Header = () => {
  return (
    <div>
      <StatusBar />
      <p>covid-19</p>
      <CountryPicker>
        <img src="" alt="" />
        <p>IND</p>
        {/* <Select />  --> Styled?!  */}
      </CountryPicker>
      <Navbar>
        <li></li>
        <a href="/cases">Cases</a>
        <a href="/prevention">Prevention</a>
        <a href="/hospitals">Hospitals</a>
      </Navbar>
    </div>
  );
};

export default Header;
