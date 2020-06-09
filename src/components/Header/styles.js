import styled from 'styled-components';
import { lighten } from 'polished';

export const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 32px;

  i {
    margin-left: 5px;
  }

  div {
    display: flex;
  }
`;

export const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 30px;

  img:first-of-type {
    height: 9px;
  }
`;

export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px;

  p {
    font-size: 30px;
    color: #3c4954;
    line-height: 44px;
    text-transform: uppercase;
  }

  span {
    font-size: 14px;
  }
`;

export const Navbar = styled.ul`
  box-shadow: 0 12px 16px #a5a5a538;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  li {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border: 2px solid ${lighten(0.4, '#748a9d')};
    transition: border 0.3s ease;

    &:nth-of-type(2) {
      border-left: 0;
      border-right: 0;
    }

    &:hover {
      border-bottom: 2px solid #3497fd;
    }

    a {
      text-decoration: none;
      color: #748a9d;
    }
  }
`;

export const CountryPicker = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: space-between;
  border: 2px solid #f4f4f6;
  border-radius: 25px;

  span {
    margin: 0 4px;
  }
`;

export const Select = styled.select`
  display: flex;
  margin: 0;
  border: 0;
  padding: 0;
`;
