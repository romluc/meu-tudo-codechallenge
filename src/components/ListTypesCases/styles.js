import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 16px;
  border-radius: 12px;
  min-height: 182px;
  width: 340px;
  box-shadow: 0 4px 16px #455b6314;

  ul {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    list-style: none;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  height: 33%;
  border-bottom: 1px solid #f4f4f6;

  &:last-of-type {
    border: 0;
  }
  div {
    display: flex;
    align-items: baseline;

    span {
      width: 10px;
      height: 10px;
      border-radius: 3px;
      margin-right: 20px;
    }

    p {
      color: #3c4954;
      font-size: 16px;
      font-weight: 500;
    }
  }
  p {
    color: #3c4954;
    font-size: 16px;
    font-weight: 500;
  }
`;
