import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media only screen and (max-width: 374px) {
    width: 100%;
  }

  @media only screen and (min-width: 375px) and (max-width: 520px) {
    width: 100%;
  }

  @media only screen and (min-width: 521px) and (max-width: 932px) {
    width: 90%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  font-size: 1.4rem;
  &:nth-child(5) {
    width: 9%;
  }
  @media only screen and (max-width: 374px) {
    &:nth-child(5) {
      width: 15%;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 520px) {
    &:nth-child(5) {
      width: 15%;
    }
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  @media only screen and (max-width: 374px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 375px) and (max-width: 520px) {
    font-size: 28px;
  }
`;

export const Span = styled.span`
  @media only screen and (max-width: 374px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 375px) and (max-width: 520px) {
    font-size: 16px;
  }
`;
