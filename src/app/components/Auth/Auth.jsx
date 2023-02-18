import AuthForm from "../AuthForm/AuthForm";
import { useOpen } from "../../utils/hooks";

import sign from "../../../assets/sign.svg";

import "./Auth.css";
import "./Auth.adaptive.css";

const Auth = () => {
  const { isOpen, toggleOpenStatus } = useOpen();

  return (
    <div className="auth">
      <div className="header-profile guest">
        <img
          className="header-plus-sign"
          src={sign}
          alt=""
          onClick={toggleOpenStatus}
        />

        <button className="auth-btn" onClick={toggleOpenStatus}>
          Log in
        </button>

        <AuthForm isOpen={isOpen} />
        {/* <div className="sign-up">Регистрация</div> */}
      </div>
    </div>
  );
};

export default Auth;
