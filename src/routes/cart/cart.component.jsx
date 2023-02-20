import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CartContainer,
  CartHeader,
  HeaderBlock,
  Total,
  GoToCheckoutButton,
} from "./cart.styles";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const goToCheckoutHandler = useCallback(() => {
    if (!cartItems.length) {
      alert("Sorry, your cart is empty :( Pls buy something!");
    } else {
      navigate("../checkout");
    }
  }, [navigate]);

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
      <GoToCheckoutButton onClick={goToCheckoutHandler}>
        CHECKOUT
      </GoToCheckoutButton>
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
