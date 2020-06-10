import React from 'react';
import moment from 'moment';

import {
  StatusBar,
  TitleBar,
  MenuBar,
  CountryPicker,
  Select,
  Navbar,
} from './styles';

import flag from '../../assets/flag-round-250/flag-round-250.png';
import menu from '../../assets/menu/menu.png';
import notification from '../../assets/notification/notification.png';

const Header = () => {
  const time = moment().format('LT');
  return (
    <div>
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
          <img src={flag} alt="flag from picked country" />
          <Select
          // value={}
          // onChange={handleChange}
          >
            <option value={'india'}>IND</option>
            <option value={'global'}>GlOBAL</option>
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
          <a href="/hospitals">Hospitals</a>
        </li>
      </Navbar>
    </div>
  );
};

export default Header;
