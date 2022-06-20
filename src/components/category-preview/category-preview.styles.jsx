import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const H2Container = styled.h2`
  font-size: 28px;
  text-align: center;
  margin-bottom: 17px;
  margin-top: 10px;
  @media only screen and (max-width: 374px) {
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 375px) and (max-width: 420px) {
    margin-bottom: 10px;
  }
`;

export const TitleLink = styled(Link)`
  cursor: pointer;
`;

export const Preview = styled.div`
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
