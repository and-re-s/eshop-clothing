import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useDispatch } from "react-redux/es/exports";

import {
  SingInContainer,
  H2Container,
  SpanContainer,
  SignInButtonContainer,
} from "./sign-in-form.styles";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

const defaultFormFields: {
  email: string;
  password: string;
} = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Incorrect password");
      }
      if (error.code === "auth/user-not-found") {
        alert("User not found");
      }
      console.log(error);
    }
  };

  return (
    <SingInContainer>
      <H2Container>Already have an account?</H2Container>
      <SpanContainer>Sign In with your email and passwords</SpanContainer>
      <FormInput
        label="Email"
        required
        type="email"
        onChange={handleChange}
        name="email"
        value={email}
      />
      <FormInput
        label="Password"
        required
        type="password"
        onChange={handleChange}
        name="password"
        value={password}
      />
      <SignInButtonContainer>
        <Button type="submit" onClick={handleSubmit}>
          Sign In
        </Button>
        <Button
          type="button"
          buttonType={BUTTON_TYPE_CLASSES.google}
          onClick={logGoogleUser}
        >
          Sign In with Google
        </Button>
      </SignInButtonContainer>
    </SingInContainer>
  );
};

export default SignInForm;