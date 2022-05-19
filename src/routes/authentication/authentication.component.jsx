import SignInForm from "../../components/sign-in/sign-in-form.component";
import SignUpForm from "../../components/sign-up/sign-up-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
