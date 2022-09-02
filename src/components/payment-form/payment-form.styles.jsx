import styled from "styled-components";
import { CardElement } from "@stripe/react-stripe-js";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: grid;
  place-items: center;
  background-color: #f1f1f125;
  border-radius: 5%;
  padding: 0px 10px 0px 10px;
`;

export const H2Container = styled.h2`
  font-size: 2.2em;
  font-weight: 600;
`;

export const FormContainer = styled.div`
  min-width: 500px;
`;

export const ButtonContainer = styled.div`
  display: grid;
  place-items: center;
  margin: 25px 0 25px 0;
`;

export const CardContainer = styled(CardElement)`
  padding: 0 0 25px 0;
`;
