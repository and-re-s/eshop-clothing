import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import CartPreviewItem from "../cart-preview-item/cart-preview-item.component";

import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
  CartButtonContainer,
  CartButton,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = useCallback(
    () => dispatch(setIsCartOpen(!isCartOpen)),
    [isCartOpen, dispatch]
  );

  const goToCheckoutHandler = useCallback(() => {
    navigate("/cart");
    toggleIsCartOpen();
  }, [navigate, toggleIsCartOpen]);

  const goToOrdersHistoryHandler = useCallback(() => {
    navigate("/orders");
    toggleIsCartOpen();
  }, [navigate, toggleIsCartOpen]);

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartPreviewItem key={item.id} cartItem={item} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CartButtonContainer>
        <CartButton onClick={goToCheckoutHandler}>GO TO CART</CartButton>

        <CartButton onClick={goToOrdersHistoryHandler}>
          ORDERS HISTORY
        </CartButton>
      </CartButtonContainer>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
