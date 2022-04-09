import React from "react";
import HeaderRight from "./components/header-right";
import HeaderLeft from "./components/header-left";
// import Style from "../../styles/header/header.module.css";
import Style from "../../styles/components/header/header.module.css";
const Header = () => {
  return (
    <div className={Style.container}>
      <div className={Style.main}>
        <HeaderLeft /> <HeaderRight />
      </div>
    </div>
  );
};

export default Header;
