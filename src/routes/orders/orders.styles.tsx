import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: top;
  margin: 25px 0 0 0;
  @media only screen and (max-width: 374px) {
    width: 100%;
  }
  @media only screen and (min-width: 375px) and (max-width: 520px) {
    width: 100%;
  }
  @media only screen and (min-width: 521px) and (max-width: 932px) {
    width: 100%;
  }
`;

export const OrdersContainer = styled.div`
  margin: 10px 0px 0px 0px;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const OrderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  border: 1px solid #ddd;
  margin-bottom: 25px;
  @media only screen and (min-width: 319px) and (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 25px;
  }
`;

export const ItemsContainer = styled.div`
  padding: 15px 0px 0px 0px;
  flex-direction: column;
  height: 100%;
  width: 30%;
  align-self: center;
  border-right: 1px solid #ddd;
  @media only screen and (min-width: 319px) and (max-width: 767px) {
    width: 100%;
    border-right: 0;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    min-width: 50%;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1441px) {
    width: 60%;
  }
`;

export const DeliveryContainer = styled.div`
  width: 70%;
  min-height: max-content;
  max-height: fit-content;
  display: grid;
  align-self: center;
`;

export const DeliveryAdressContainer = styled.div`
  font-size: 20px;
  height: max-content;
  overflow-x: auto;
  display: flex;
  align-self: center;
  @media only screen and (min-width: 319px) and (max-width: 767px) {
    min-width: fit-content;
  }
`;

export const OrderDateContainer = styled.div`
  font-size: 18px;
  text-align: center;
  display: flex;
  justify-content: top;
  align-content: center;
  flex-direction: column;
  font-style: italic;
`;

export const DeliveryDataTable = styled.table`
  width: 100%;
  text-align: center;
  vertical-align: center;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f4f4f4;
  }
`;

export const Td = styled.td`
  &:first-child {
    width: 20%;
  }
  &:last-child {
    font-weight: 600;
  }
`;

export const Total = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;

export const PleaseSignInContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PleaseSignIn = styled.h1`
  font-size: 26px;
  text-align: center;
  vertical-align: center;
  color: red;
`;
