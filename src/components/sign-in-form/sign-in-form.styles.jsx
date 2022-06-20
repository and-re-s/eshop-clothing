import styled from "styled-components";

export const SingInContainer = styled.div`
  width: 30%;
  margin: 1rem 3rem 3rem 3rem;
  @media only screen and (max-width: 520px) {
    margin: 1rem 1rem 1rem 1rem;
  }
`;

export const H2Container = styled.h2`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  font-size: 1.5rem;
`;

export const SpanContainer = styled.span`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
`;

export const SignInButtonContainer = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  justify-items: center;
  @media only screen and (max-width: 1000px) {
    display: grid;
    row-gap: 5px;
  }
`;
