import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 100px);
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid gray;
`;
export const GridItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #ddd;

  p {
    font-size: 13px;
    line-height: 44px;
    font-weight: 500;
    color: #3c4954;
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
  margin: 0 16px;
  min-height: 144px;
  border-radius: 12px;
  box-shadow: 0 4px 16px #455b6314;

  div {
    display: flex;
    flex-direction: column;

    h3 {
      text-align: left;
      line-height: 21px;
      font-size: 16px;
      font-weight: 500;
    }

    p {
      font-size: 12px;
      color: #78849e;
      text-align: left;
    }
  }
`;
