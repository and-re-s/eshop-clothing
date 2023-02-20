import { FC, memo } from "react";

import { CartItem as TCartItem } from "../../store/cart/cart.types";

import {
  CartPreviewItemContainer,
  ItemDetails,
  ItemImage,
  Name,
  Price,
} from "./cart-preview-item.styles";

type CartItemProps = {
  cartItem: TCartItem;
};

const CartPreviewItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartPreviewItemContainer>
      <ItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} * ${price}
        </Price>
      </ItemDetails>
    </CartPreviewItemContainer>
  );
});

export default CartPreviewItem;
