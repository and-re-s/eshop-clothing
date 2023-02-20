import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import CartPreviewItem from "../cart-preview-item/cart-preview-item.component";

import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
  CartButton,
} from "./cart-dropdown.styles";
import { useCallback } from "react";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const goToCheckoutHandler = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const goToOrdersHistoryHandler = useCallback(() => {
    navigate("/orders");
  }, [navigate]);

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
      <CartButton onClick={goToCheckoutHandler}>GO TO CART</CartButton>
      {currentUser ? (
        <CartButton onClick={goToOrdersHistoryHandler}>
          ORDERS HISTORY
        </CartButton>
      ) : null}
    </CartDropDownContainer>
  );
};

export default CartDropdown;
