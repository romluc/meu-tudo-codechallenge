import styled from 'styled-components';
import personImg from '../../assets/bg-person.png';
import virusImg from '../../assets/bg-virus.png';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const VirusImage = styled.div`
  min-width: 316px;
  min-height: 373px;
  background-image: url(${virusImg});
  background-position: center;
  background-repeat: no-repeat;
`;

export const PersonImage = styled.div`
  min-width: 240px;
  min-height: 381px;
  margin-top: -260px;
  margin-bottom: 40px;

  background-image: url(${personImg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
export const Title = styled.h1`
  font-size: 32px;
  font-family: 'Acumin Pro', sans-serif;
  color: #3c4954;
  text-transform: uppercase;
`;
export const Paragraph = styled.div`
  display: flex;
  margin: 0 15px 22px 0;
  text-align: center;
  line-height: 26px;
  height: 71px;

  p {
    font-size: 16px;
    color: #3c4954;
    height: 87px;
    padding: 16px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 20px 0;
  width: calc(100% - 42px);
  margin: 24px 0 24px;
  font-size: 15px;
  border-radius: 12px;
  background-color: #3c4954;
  text-decoration: none;

  p {
    color: #fff;
    font-size: 15px;
    text-transform: uppercase;
    line-height: 20px;
    letter-spacing: 0.38px;
  }
`;
