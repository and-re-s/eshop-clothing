import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 35px;
  @media only screen and (max-width: 374px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 375px) and (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
  }
  @media only screen and (min-width: 521px) and (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 17px;
  margin-top: 20px;
  text-align: center;
  font-weight: 400;
`;
