import React from "react";
import Style from "../../../styles/components/body/inbox/inbox.module.css";
import SideBar from "./components/SideBar";
import Conent from "./components/Conent";

const Inbox = () => {
  return (
    <div className={Style.main}>
      <div className={Style.container}>
        <SideBar /> <Conent />
      </div>{" "}
    </div>
  );
};

export default Inbox;
