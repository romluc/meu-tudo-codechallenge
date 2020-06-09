import styled from 'styled-components';
import personImg from '../../assets/bg-person.png';
import virusImg from '../../assets/bg-virus.png';

export const Container = styled.div`
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    height: 812px;
    width: 375px;
  }
`;

export const VirusImage = styled.image`
  position: absolute;
  top: 30px;
  min-width: 316px;
  min-height: 373px;
  background-image: url(${virusImg});
  background-position: center;
  background-repeat: no-repeat;
`;

export const PersonImage = styled.image`
  position: absolute;
  top: 141px;
  min-width: 240px;
  min-height: 381px;
  background-image: url(${personImg});
  background-position: center;
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

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: calc(100% - 24px);
  margin: 24px 0 40px;
  font-size: 15px;
  border-radius: 12px;
  background-color: #3c4954;

  p {
    color: #fff;
    font-size: 15px;
    text-transform: uppercase;
    line-height: 20px;
    letter-spacing: 0.38px;
  }
`;
