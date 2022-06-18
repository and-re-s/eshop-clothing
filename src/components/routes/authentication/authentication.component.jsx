import SignInForm from "../../sign-in-form/sign-in-form.component";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import { FormsContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <div>
      <FormsContainer>
        <SignInForm />
        <SignUpForm />
      </FormsContainer>
    </div>
  );
};

export default Authentication;
