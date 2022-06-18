import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
  CartButton,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToChekoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {!cartItems.length ? (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        )}
      </CartItems>
      <CartButton onClick={goToChekoutHandler}>Check Out</CartButton>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
