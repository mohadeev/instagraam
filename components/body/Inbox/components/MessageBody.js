import React from "react";
import Style from "../../../../styles/components/body/inbox/components/messagebody.module.css";
import MessageType from "./MessageType";

const MessageBody = () => {
  return <div className={Style.container}>Message body
  <MessageType />
  </div>;
};

export default MessageBody;
