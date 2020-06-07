import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  min-width: 316px;
  min-height: 373px;
  border: 2px solid red;
  background-image: url('../../assets/bg-person.png');
`;
export const Title = styled.h1`
  font-size: 32px;
  font-family: 'Acumin Pro', sans-serif;
  color: #3c4954;
  text-transform: uppercase;
`;
export const Paragraph = styled.div`
  display: flex;
  margin: 0 22px;
  text-align: center;
  line-height: 26px;

  p {
    font-size: 16px;
    color: #3c4954;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 100%;
  border-radius: 12px;
  background-color: #3c4954;
  margin: 40px 24px;

  p {
    color: #fff;
    font-size: 15px;
    text-transform: uppercase;
    line-height: 20px;
    letter-spacing: 0.38px;
  }
`;
