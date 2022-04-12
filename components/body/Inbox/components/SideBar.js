import React, { useState } from "react";
import Style from "../../../../styles/components/body/inbox/components/sidebar.module.css";
import { ArrowUp, CreateMessage } from "../../../Icons/Icons";
import { useRouter } from "next/router";
import UserMessage from "./UserMessage";
const SideBar = () => {
  const Router = useRouter();
  const [StylePrimay, setStylePrimay] = useState({ color: "#262626" });
  const [StyleGeneral, setStyleGeneral] = useState({});

  const ChangeToPrimary = () => {
    setStyleGeneral({});
    setStylePrimay({ color: "#262626" });
  };
  const ChangeToGeneral = () => {
    setStylePrimay({});
    setStyleGeneral({ color: "#262626" });
  };
  return (
    <div className={Style.container}>
      <div className={Style.top_of_side_bar}>
        <div className={Style.user_div}>
          <p>udev16 &nbsp; {ArrowUp}</p>
        </div>
        <div></div>
        {CreateMessage}
      </div>
      <div className={Style.messages_switcher}>
        <div
          onClick={ChangeToPrimary}
          className={Style.first_p}
          style={{ borderBottomColor: StylePrimay.color }}
        >
          <p style={{ color: StylePrimay.color }}>PRIMARY</p>
        </div>{" "}
        <div
          onClick={ChangeToGeneral}
          className={Style.second_p}
          style={{ borderBottomColor: StyleGeneral.color }}
        >
          <p style={{ color: StyleGeneral.color }}>GENERAL</p>
        </div>
      </div>
      <div className={Style.users_container}>
        {" "}
        <UserMessage /> <UserMessage /> <UserMessage /> <UserMessage />{" "}
        <UserMessage /> <UserMessage /> <UserMessage />
      </div>
    </div>
  );
};

export default SideBar;
