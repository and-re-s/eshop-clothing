import {
  CheckoutContainer,
  Order,
  OrderTitle,
  PleaseSignIn,
  PleaseSignInContainer,
  OrderHint,
  CartItems,
  EmptyMessage,
  PaymentAndDeliveryContainer,
  Payment,
} from "./checkout.styles";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import CheckoutCart from "../../components/checkout-cart/checkout-cart.component";

import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../../utils/stripe/stripe.utils";
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      <Elements stripe={stripePromise}>
        <CheckoutContainer>
          <Order>
            <OrderTitle>
              {cartItems.length} {cartItems.length === 1 ? "Item" : "Items"}
            </OrderTitle>
            <CartItems>
              {cartItems.length ? (
                cartItems.map((item) => (
                  <CheckoutCart key={item.id} cartItem={item} />
                ))
              ) : (
                <EmptyMessage>Your cart is empty</EmptyMessage>
              )}
              <OrderTitle>
                <br />
                Total: ${cartTotal}
              </OrderTitle>
            </CartItems>
          </Order>

          {currentUser ? (
            <>
              <PaymentAndDeliveryContainer>
                <OrderTitle>Delivery Adress</OrderTitle>
                <OrderHint>
                  For testing purposes there are no strict data checking in this
                  form, just add at least one character to each field.
                  <br />
                  Stripe payment testing card number: 4242 4242 4242 4242. Any
                  date from today, any CVC and ZIP.
                </OrderHint>
                <Payment>
                  <PaymentForm />
                </Payment>
              </PaymentAndDeliveryContainer>
            </>
          ) : (
            <PleaseSignInContainer>
              <PleaseSignIn>Please Sign In to make this order!</PleaseSignIn>
            </PleaseSignInContainer>
          )}
        </CheckoutContainer>
      </Elements>
    </>
  );
};

export default Checkout;
