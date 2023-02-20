import styled from "styled-components";

export const CartPreviewItemContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: left;
  margin-left: 20%;
  margin-bottom: 15px;
`;

export const ItemImage = styled.img`
  max-width: 20%;
  height: fit-content;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 20px 20px;
`;

export const Name = styled.span`
  font-size: 20px;
`;

export const Price = styled.span`
  font-size: 18px;
`;
