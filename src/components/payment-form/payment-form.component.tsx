import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart.selector";
import { clearAllCartItems } from "../../store/cart/cart.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import { saveOrderHistory } from "../../store/orders/orders.actions";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import Spinner from "../spinner/spinner.component";
import FormInput from "../form-input/form-input.component";

import {
  PaymentFormContainer,
  FormContainer,
  H2Container,
  ButtonContainer,
  CardContainer,
} from "./payment-form.styles";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  mobile: "",
  adress1: "",
  adress2: "",
  city: "",
  country: "",
  postcode: "",
};

const PaymentForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const dispatch = useDispatch();

  const clearCartHandler = () => dispatch(clearAllCartItems());

  const {
    firstName,
    lastName,
    mobile,
    adress1,
    adress2,
    city,
    country,
    postcode,
  } = formFields;

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleValidation = () => {
    const missedInfo = () => {
      alert("Please fill all the form fields");
    };

    if (
      !formFields.firstName ||
      !formFields.lastName ||
      !formFields.mobile ||
      !formFields.adress1 ||
      !formFields.adress2 ||
      !formFields.city ||
      !formFields.country ||
      !formFields.postcode
    ) {
      missedInfo();
      return 0;
    }

    orderConfiguration();

    return 1;
  };

  const orderConfiguration = () => {
    const timeStamp = new Date();
    const configOrder = {
      orderTotal: amount,
      orderDelivery: formFields,
      orderItems: cartItems,
      orderUserID: currentUser!.id,
      orderCreatedDate: timeStamp,
    };
    dispatch(saveOrderHistory(configOrder));
  };

  const paymentHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!handleValidation()) {
      return;
    }

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
          name: currentUser!.displayName,
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else if (paymentResult.paymentIntent.status === "succeeded") {
      // const configOrder = {
      //   orderTotal: amount,
      //   orderItems: cartItems.map((item) => {
      //     const { id, imageUrl, name, price, quantity } = item;

      //     return { id, imageUrl, name, price, quantity };
      //   }),
      // };
      // dispatch(saveOrderHistory(configOrder));

      clearCartHandler();
      cardDetails.clear();
      alert("Payment Successful!");
      navigate("/orders");
    }
  };

  return (
    <>
      <form onSubmit={() => {}}>
        <FormInput
          label="First Name"
          required
          type="text"
          onChange={handleChange}
          name="firstName"
          value={firstName}
        />

        <FormInput
          label="Last Name"
          required
          type="lastName"
          onChange={handleChange}
          name="lastName"
          value={lastName}
        />

        <FormInput
          label="Mobile"
          required
          type="mobile"
          onChange={handleChange}
          name="mobile"
          value={mobile}
        />

        <FormInput
          label="Adress"
          required
          type="adress1"
          onChange={handleChange}
          name="adress1"
          value={adress1}
        />

        <FormInput
          label="Adress"
          required
          type="adress2"
          onChange={handleChange}
          name="adress2"
          value={adress2}
        />

        <FormInput
          label="City"
          required
          type="city"
          onChange={handleChange}
          name="city"
          value={city}
        />

        <FormInput
          label="Country"
          required
          type="country"
          onChange={handleChange}
          name="country"
          value={country}
        />

        <FormInput
          label="Postcode"
          required
          type="postcode"
          onChange={handleChange}
          name="postcode"
          value={postcode}
        />

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
      </form>
    </>
  );
};

export default PaymentForm;
