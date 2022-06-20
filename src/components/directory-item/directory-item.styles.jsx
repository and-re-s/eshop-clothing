import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const BodyContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  background-color: white;
  opacity: 0.8;
  position: absolute;
`;

export const H2Container = styled.h2`
  font-weight: 700;
  margin: 1.6rem 0 0 0;
  font-size: 1.4rem;
  text-transform: uppercase;
  color: #303030;
`;

export const PContainer = styled.p`
  font-weight: lighter;
  font-size: 1.15rem;
  margin: 0 0 1.6rem 0;
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 300px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 7.5px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${BodyContainer} {
      opacity: 0.95;
    }
  }

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:nth-child(1) {
    margin: 0px;
  }

  &:nth-child(3) {
    margin: 0px;
  }

  &:nth-child(4) {
    margin: 0px;
  }

  &:nth-child(5) {
    margin: 0px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media only screen and (max-width: 374px) {
    &:nth-child(2) {
      margin: 0px;
    }
    &:last-child {
      margin-left: 0px;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 420px) {
    min-width: 40%;
    &:nth-child(1) {
      margin: 0px 7.5px 0px 0px;
    }
    &:nth-child(2) {
      margin: 0px 0px 7.5px;
    }
    &:nth-child(3) {
      margin: 0px 7.5px 0px 0px;
    }
    &:nth-child(4) {
      margin: 0px 0px 7.5px;
    }
    &:nth-child(5) {
      margin: 0;
    }
  }
`;
