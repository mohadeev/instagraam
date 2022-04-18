import React from "react";
import LoginInput from "../../components/login/components/LoginInput";
import Style from "../../styles/components/login-page/login.module.css";
import SingUpInputs from "./../../components/login/components/SingUpInputs";
import Switching from './../../components/login/components/Switching';
const LoginIndex = () => {
  return (
    <div className={Style.container}>
        <div className={Style.second_container}>
        <Switching />
      </div>
      <div className={Style.second_container}>
        <LoginInput />
      </div>
      <div className={Style.second_container}>
        <SingUpInputs />
      </div>
      
      
    </div>
  );
};

export default LoginIndex;
