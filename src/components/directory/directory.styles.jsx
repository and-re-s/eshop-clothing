import styled from "styled-components";

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 0px;
  padding-right: 0px;
  @media only screen and (max-width: 374px) {
    flex-flow: column wrap;
    row-gap: 10px;
  }
`;
