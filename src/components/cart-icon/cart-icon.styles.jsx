import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ShopIcon = styled(ShoppingIcon)`
  margin-top: -5px;
  margin-left: 10px;
  width: 24px;
  height: 24px;
`;

export const ItemCount = styled.span`
  margin-left: 10px;
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 2px;
`;
