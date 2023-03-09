import { useSelector, useDispatch } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { clearAllCartItems } from "../../store/cart/cart.action";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";

import {
  CartContainer,
  CartHeader,
  HeaderBlock,
  Total,
  ButtonsContainer,
} from "./cart.styles";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const clearCartHandler = () => dispatch(clearAllCartItems());

  const goToCheckoutHandler = useCallback(() => {
    if (!cartItems.length) {
      alert("Sorry, your cart is empty :( Pls buy something!");
    } else {
      navigate("../checkout");
    }
  }, [navigate, cartItems.length]);

  return (
    <CartContainer>
      <CartHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CartHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
      <ButtonsContainer>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.clearCart}
          onClick={clearCartHandler}
        >
          CLEAR CART :(
        </Button>
        <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
      </ButtonsContainer>
    </CartContainer>
  );
};

export default Cart;

// import { Elements } from "@stripe/react-stripe-js";
// import { stripePromise } from "../../utils/stripe/stripe.utils";
// import PaymentForm from "../../components/payment-form/payment-form.component";
// <Elements stripe={stripePromise}>
// <PaymentForm />
// </Elements>
