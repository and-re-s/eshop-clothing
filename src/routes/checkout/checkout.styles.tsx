import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  @media only screen and (max-width: 374px) {
    flex-flow: column wrap;
    row-gap: 10px;
  }
`;

export const CartItems = styled.div`
  height: 90%;
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

export const PaymentAndDeliveryContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  padding: 0% 10% 15% 10%;
`;

export const Delivery = styled.div`
  padding: 0% 10% 0% 10%;
`;

export const Payment = styled.div``;
