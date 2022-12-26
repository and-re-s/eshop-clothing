import { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { clearAllCartItems } from "../../store/cart/cart.action";
import { selectCurrentUser } from "../../store/user/user.selector";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import Spinner from "../spinner/spinner.component";

import {
  PaymentFormContainer,
  FormContainer,
  H2Container,
  ButtonContainer,
  CardContainer,
} from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const dispatch = useDispatch();

  const clearCartHandler = () => dispatch(clearAllCartItems());

  const paymentHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log("fail");
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const cardDetails = elements.getElement(CardElement);

    if (cardDetails === null) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else if (paymentResult.paymentIntent.status === "succeeded") {
      alert("Payment Successful!");
      clearCartHandler();
      cardDetails.clear();
    }
  };

  return (
    <PaymentFormContainer>
      <H2Container>Pay with card: </H2Container>
      <FormContainer>
        {stripe && elements ? <CardContainer /> : <Spinner />}
        <ButtonContainer>
          <Button
            onClick={(e) => paymentHandler(e)}
            isLoading={isProcessingPayment}
            buttonType={BUTTON_TYPE_CLASSES.inverted}
          >
            Pay now
          </Button>
        </ButtonContainer>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
