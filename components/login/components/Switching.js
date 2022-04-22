import React, { useEffect, useRef, useState } from "react";
import Style from "../../../styles/components/login/components/switching.module.css";
import { UserFormLoginReducer } from "../../../redux/reducers/user/UserFormLogin";
import { useDispatch } from "react-redux";
const User = () => {
  return (
    <div className={Style.user_container}>
      <div className={Style.image}> </div>
      <p className={Style.username}>Uasede</p>{" "}
      <button className={Style.button}>Log in </button>
    </div>
  );
};
const SingUpInputs = () => {
  const dispatch = useDispatch();
  const HandelLogin = () => {
    dispatch(UserFormLoginReducer({ value: "login" }));
  };
  const HandelSingUp = () => {
    dispatch(UserFormLoginReducer({ value: "singup" }));
  };
  return (
    <div className={Style.container}>
      <div className={Style.form_container}>
        <h5 className={Style.logo}>Instagraam</h5>
        <div className={Style.form}>
          <User />
          <User />
        </div>
        <div className={Style.first_p_container}>
          <b>Mange accounts </b>
        </div>
      </div>
      <div className={Style.p_container}>
        <p>
          <b onClick={HandelLogin}>Switch account </b>
          <span> or </span> <b onClick={HandelSingUp}>Sign up</b>{" "}
        </p>
      </div>
    </div>
  );
};

export default SingUpInputs;
