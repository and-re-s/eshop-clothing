import { FC } from "react";

import { CartItem as TCartItem } from "../../store/cart/cart.types";

import {
  CartItemContainer,
  ItemDetails,
  ItemImage,
  Name,
  Price,
} from "./cart-item.styles";

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} * ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
