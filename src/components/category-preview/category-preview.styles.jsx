import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;
`;

export const H2Container = styled.h2`
  text-align: center;
  margin-bottom: 25px;
  margin-top: 0px;
  background-color: #f1f1f1;
`;

export const TitleLink = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
