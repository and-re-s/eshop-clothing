import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media only screen and (max-width: 320px) {
    height: 50px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  margin-top: 15px;
  @media only screen and (max-width: 320px) {
    width: 50px;
    margin-top: 5px;
  }
`;

export const NavLinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  font-size: 1.4rem;
  padding: 10px 15px;
  cursor: pointer;
  @media only screen and (max-width: 300px) {
    padding: 10px 5px;
  }
`;
