import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 16px;
  border-radius: 12px;
  min-height: 83px;
  width: 340px;
  box-shadow: 0 4px 16px #455b6314;

  ul {
    display: flex;
    width: 100%;
    align-items: center;
    list-style: none;
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 33%;

  border-right: 1px solid #f4f4f6;

  &:last-of-type {
    border: 0;
  }

  p {
    color: #3c4954;
    font-size: 20px;
    line-height: 26px;

    &:last-of-type {
      font-size: 14px;
      color: #748a9d;
      line-height: 19px;
    }
  }
`;
