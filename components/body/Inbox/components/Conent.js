import React, { useState } from "react";
import Style from "../../../../styles/components/body/inbox/components/conent.module.css";
import { InfoOutLine, InfoFill } from "../../../Icons/Icons";
import MessageBody from "./MessageBody";
import UserMessage from "./UserMessage";

const Conent = () => {
  const [ShowInfo, setShowInfo] = useState(false);
  const ShowInfoFunc = () => {
    setShowInfo(!ShowInfo);
  };
  const UserNameStyleData = {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24px",
  };
  const UserIamgeStyleData = {
    width: "24px",
    height: "24px",
    marginLeft: "30px",
    marginRight: "-8px",
  };
  const ActiveStyleData = {
    fontSize: "12px",
    lineHeight: "16px",
  };
  return (
    <div className={Style.container}>
      <div className={Style.topbar_container}>
        <UserMessage
          ActiveStyle={ActiveStyleData}
          UserNameStyle={UserNameStyleData}
          UserIamgeStyle={UserIamgeStyleData}
        />
        {ShowInfo ? (
          <span onClick={ShowInfoFunc} className={Style.icon_info}>
            {InfoOutLine}
          </span>
        ) : (
          <span onClick={ShowInfoFunc} className={Style.icon_info}>
            {InfoFill}
          </span>
        )}
      </div>
      <MessageBody />
    </div>
  );
};

export default Conent;
