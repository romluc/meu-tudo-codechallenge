import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  margin: 32px 20px 25px;
`;
export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;

  &:nth-of-type(1) {
    border-bottom: 1px solid #f4f4f6;
  }

  &:nth-of-type(2) {
    border-bottom: 1px solid #f4f4f6;
  }

  &:nth-of-type(3) {
    border-bottom: 1px solid #f4f4f6;
  }

  p {
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    color: #3c4954;
    margin-top: 5px;
  }
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #78849e;
  line-height: 44px;
  margin: 0 16px;
`;
export const Rectangle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px 16px 0;
  min-height: 144px;
  border-radius: 12px;
  box-shadow: 0 4px 16px #455b6314;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 20px;

    h3 {
      text-align: left;
      line-height: 21px;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 12px;
    }

    p {
      font-size: 12px;
      line-height: 20px;
      color: #78849e;
      text-align: left;
    }
  }
`;
