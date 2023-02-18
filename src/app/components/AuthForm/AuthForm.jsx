import { useState } from "react";
import PropTypes from "prop-types";
import PullOut from "../PullOut/PullOut";

import "./AuthForm.css";
import "./AuthForm.adaptive.css";

const AuthForm = ({ isOpen }) => {
  // TODO: сделать контролируемую форму

  const [visible, setVisible] = useState(false);

  const imgClickHanlder = (e) => {
    if (visible)
      e.currentTarget.setAttribute("src", "/src/app/assets/visible.svg");
    else e.currentTarget.setAttribute("src", "/src/app/assets/hidden.svg");
    setVisible(!visible);
  };

  return (
    <PullOut isOpen={isOpen} position="right">
      <form
        action="post"
        className={`auth-form ${isOpen ? "open" : ""}`}
        id="auth-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <fieldset>
          <label htmlFor="inputLogin">
            Логин:
            <input type="text" name="user-login" id="inputLogin" />
          </label>
          <label htmlFor="inputPassword">
            Пароль:
            <input
              type={`${visible ? "text" : "password"}`}
              name="user-password"
              id="inputPassword"
            />
            <button className="password-visible visible">
              <img
                onClick={imgClickHanlder}
                src="/src/app/assets/visible.svg"
                alt=""
              />
            </button>
          </label>
          <button type="submit" className="auth-form-btn">
            Войти
          </button>
        </fieldset>
      </form>
    </PullOut>
  );
};

AuthForm.propTypes = {
  isOpen: PropTypes.bool,
};

export default AuthForm;
