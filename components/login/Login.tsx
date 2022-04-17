import React, { useEffect, useRef } from "react";
import Style from "../../styles/components/login/login.module.css";
import InputLogin from "./components/Inputs";
interface divEL {
  current: HTMLDivElement | null;
}
const Login = () => {
  const Height = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const LocalFetch = () => {
      if (Height.current !== null) {
        Height.current.style.height = `${window.innerHeight}px`;
      }
    };
    LocalFetch();
  }, []);

  return (
    <div className={Style.container} ref={Height}>
      <div className={Style.main}>
        <div className={Style.phone_container}> </div>
        <div className={Style.input_container}>
          {" "}
          <InputLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
