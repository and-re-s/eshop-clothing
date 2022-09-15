import styled from "styled-components";
import Button from "../button/button.component";

export const ProductImg = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
  border: 2px solid black;
`;

export const ProductButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const ProductCardContainer = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${ProductImg} {
      opacity: 0.8;
    }

    ${ProductButton} {
      opacity: 0.85;
      display: flex;
    }
`;
