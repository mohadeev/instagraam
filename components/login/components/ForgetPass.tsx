import React from "react";
import Style from "../../../styles/components/login/components/forgetpass.module.css";
import { IoLogoFacebook } from "@react-icons/all-files/io/IoLogoFacebook";
const ForgetPass = () => {
  return (
    <div className={Style.container}>
      <div className={Style.or_log_container}>
        <div className={Style.lines}></div>
        <p className={Style.or_p}> or </p>
        <div className={Style.lines}></div>
      </div>
      <div className={Style.log_facebook}>
        <IoLogoFacebook />
        Log in With Faceebook
      </div>
      <p className={Style.forget_pass}>Forgot password? </p>
    </div>
  );
};

export default ForgetPass;
