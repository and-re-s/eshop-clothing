import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const ItemImage = styled.img`
  max-width: 30%;
  height: fit-content;
  width: fit-content;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 20px 20px;
`;

export const Name = styled.span`
  font-size: 16px;
`;

export const Price = styled.span`
  font-size: 14px;
`;
