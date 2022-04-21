import React from "react";
import LoginInput from "../../components/login/components/LoginInput";
import Style from "../../styles/components/login-page/login.module.css";
import SingUpInputs from "../../components/login/components/SingUpInputs";
import Switching from "../../components/login/components/Switching";
import { useSelector } from "react-redux";
const LoginIndex = () => {
  const ShredWord = useSelector((state) => state.UserFormLogin.SharedWord);
  return (
    <div className={Style.container}>
      {(() => {
        if (ShredWord === "switch") {
          return (
            <div className={Style.second_container}>
              <Switching />
            </div>
          );
        } else if (ShredWord === "login") {
          return (
            <div className={Style.second_container}>
              <LoginInput />
            </div>
          );
        } else {
          return (
            <div className={Style.second_container}>
              <SingUpInputs />
            </div>
          );
        }
      })()}
    </div>
  );
};

export default LoginIndex;
