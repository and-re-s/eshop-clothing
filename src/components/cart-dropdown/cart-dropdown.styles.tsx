import styled from "styled-components";
import Button from "../button/button.component";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 245px;
  height: 395px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 520px;
  z-index: 100;

  @media only screen and (max-width: 374px) {
    right: 15px;
  }

  @media only screen and (min-width: 375px) and (max-width: 600px) {
    right: 15px;
  }

  @media only screen and (min-width: 601px) and (max-width: 1600px) {
    right: 40px;
  }

  @media only screen and (min-width: 1601px) and (max-width: 1800px) {
    right: 100px;
  }
  @media only screen and (min-width: 1801px) and (max-width: 1900px) {
    right: 150px;
  }
  @media only screen and (min-width: 1901px) and (max-width: 2000px) {
    right: 200px;
  }
  @media only screen and (min-width: 2001px) and (max-width: 2200px) {
    right: 250px;
  }
  @media only screen and (min-width: 2201px) and (max-width: 2400px) {
    right: 350px;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
`;

export const EmptyMessage = styled.span`
  font-size: 1.4rem;
  margin: auto auto;
`;

export const CartButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0 0 0;
`;

export const CartButton = styled(Button)`
  margin: 0 0 10px 0;
`;
