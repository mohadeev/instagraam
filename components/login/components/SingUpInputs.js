import React, { useEffect, useRef, useState } from "react";
import Style from "../../../styles/components/login/components/inputlogin.module.css";
import ForgetPass from "./ForgetPass";

const SingUpInputs = () => {
  const ButtonLogIn = useRef < HTMLDivElement > null;

  const [EmailInput, setEmailInput] = useState("");
  const [Show, setShow] = useState(true);
  const [FullName, setFullName] = useState("");
  const [PassInput, setPassInput] = useState("");
  const [Username, setUsername] = useState("");

  const PassChange = (event) => {
    setPassInput(event.target.value);
  };
  const EmailChange = (event) => {
    setEmailInput(event.target.value);
  };
  const FullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const UsernameChange = (event) => {
    setUsername(event.target.value);
  };
  useEffect(() => {
    const localFun = () => {
      if (ButtonLogIn.current != null || ButtonLogIn.current != undefined) {
        if (
          FullName.length >= 4 &&
          Username.length >= 4 &&
          EmailInput.includes("@") &&
          EmailInput.length >= 2 &&
          PassInput.length >= 6
        ) {
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
            {EmailInput !== "" && "Phone Number Email"}
            <input
              onChange={EmailChange}
              placeholder="Phone Number Email"
              className={Style.input}
              type="text"
              name="first_name"
            />
          </label>
          <label className={Style.label}>
            {FullName !== "" && "Full Name"}
            <input
              onChange={FullNameChange}
              placeholder="Full Name"
              className={Style.input}
              type="text"
              name="first_name"
            />
          </label>
          <label className={Style.label}>
            {Username !== "" && "Username"}
            <input
              onChange={UsernameChange}
              placeholder="Username"
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
            <p
              onClick={() => {
                setShow(!Show);
              }}
              className={Style.show}
            >
              {Show ? "Show" : "Hide"}
            </p>
          </label>
          <input
            ref={ButtonLogIn}
            value="Next"
            className={Style.button}
            type="submit"
          />
        </form>
      </div>
      <div className={Style.p_container}>
        <p>
          <span>Have an account?</span> <b>Log in </b>{" "}
        </p>
      </div>
    </div>
  );
};

export default SingUpInputs;
