import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  @media only screen and (max-width: 374px) {
    display: grid;
    row-gap: 10px;
  }
`;

export const CartItems = styled.div`
  height: 95%;
  flex-direction: column;
  overflow: auto;
  margin-top: 5%;
`;

export const EmptyMessage = styled.span`
  font-size: 1.4rem;
  margin: auto auto;
`;

export const Order = styled.div`
  width: 35%;
`;

export const OrderTitle = styled.h1`
  font-size: 26px;
  text-align: center;
`;

export const OrderHint = styled.h1`
  font-size: 18px;
  text-align: center;
  font-weight: 200;
  font-style: italic;
`;

export const PleaseSignInContainer = styled.div`
  width: 64%;
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

export const PaymentAndDeliveryContainer = styled.div`
  width: 65%;
  display: flex;
  height: max-content;
  flex-direction: column;
  padding: 0% 10% 0% 10%;
  @media only screen and (max-width: 374px) {
    width: max-content;
  }
`;

export const Payment = styled.div``;
