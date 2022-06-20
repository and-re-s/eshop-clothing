import { useContext } from "react";

import { CartContext } from "../../../contexts/cart.context";

import CheckoutItem from "../../checkout-item/checkout-item";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  Span,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <Span>Product</Span>
        </HeaderBlock>
        <HeaderBlock>
          <Span>Description</Span>
        </HeaderBlock>
        <HeaderBlock>
          <Span>Quantity</Span>
        </HeaderBlock>
        <HeaderBlock>
          <Span>Price</Span>
        </HeaderBlock>
        <HeaderBlock>
          <Span>Remove</Span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: {totalPrice}$</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
