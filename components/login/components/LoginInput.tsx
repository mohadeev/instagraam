import React, { useEffect, useRef, useState } from "react";
import Style from "../../../styles/components/login/components/inputlogin.module.css";
import ForgetPass from './ForgetPass';

const LoginInput = () => {
  const ButtonLogIn = useRef<HTMLDivElement>(null);

  const [EmailInput, setEmailInput] = useState("");
    const [Show, setShow] = useState(true);

  const [PassInput, setPassInput] = useState("");
  const PassChange = (event: any) => {
    setPassInput(event.target.value);
  };
  const EmailChange = (event: any) => {
    setEmailInput(event.target.value);
  };
  useEffect(() => {
    const localFun = () => {
      if (ButtonLogIn.current != null || ButtonLogIn.current != undefined) {
        if (EmailInput.length >= 2 && PassInput.length >= 6) {
          ButtonLogIn.current.style.backgroundColor = "#0095F6";
        } else if (EmailInput.length < 2 || PassInput.length < 6) {
          ButtonLogIn.current.style.backgroundColor = "#b2dffc";
        }
      }
    };
    localFun();
  }, [EmailInput, PassInput]);
  return (
    <div className={Style.container}>
      <div className={Style.form_container}>
        <h5 className={Style.logo}>Instagraam</h5>
        <form className={Style.form}>
          <label className={Style.label}>
            {EmailInput !== "" && "Phone number, username, or email"}
            <input
              onChange={EmailChange}
              placeholder="Phone number, username, or email"
              className={Style.input}
              type="text"
              name="first_name"
            />
          </label>
          <label className={Style.label}>
            {PassInput !== "" && "Password"}
            <input
              placeholder="Password"
              onChange={PassChange}
              className={Style.input}
              type={Show ? "password" : "text"}
              name="first_name"
            />
            <p onClick={()=>{setShow(!Show)}} className={Style.show}>{Show ? "Show" : "Hide"}</p>
          </label>
          <input
            ref={ButtonLogIn}
            value="Log in "
            className={Style.button}
            type="submit"
          />
        </form>
        <ForgetPass />
      </div>
      <div className={Style.p_container}>
        <p>
          <span>Don't have an account?</span> <b>Sign up</b>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginInput;
