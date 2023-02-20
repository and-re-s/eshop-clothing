import {
  CheckoutContainer,
  Order,
  OrderTitle,
  CartItems,
  EmptyMessage,
  PaymentAndDeliveryContainer,
  Delivery,
  Payment,
} from "./checkout.styles";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import CheckoutCart from "../../components/checkout-cart/checkout-cart.component";
import AdressForm from "../../components/adress-form/adress-form.component";

import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../../utils/stripe/stripe.utils";
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
              <OrderTitle>Total: ${cartTotal}</OrderTitle>
            </CartItems>
          </Order>
          <PaymentAndDeliveryContainer>
            <OrderTitle>Delivery Adress</OrderTitle>
            <Delivery>
              <AdressForm />
            </Delivery>
            <Payment>
              <PaymentForm />
            </Payment>
          </PaymentAndDeliveryContainer>
        </CheckoutContainer>
      </Elements>
    </>
  );
};

export default Checkout;
