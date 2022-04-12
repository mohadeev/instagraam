import React from "react";
import Style from "../../../../styles/components/body/inbox/components/messagetype.module.css";
import { Emojy, ImageIcon } from "../../../Icons/Icons";

const MessageType = () => {
  return (
    <div className={Style.container}>
      <div className={Style.message_send_container}>
        {" "}
        {Emojy}
        <textarea
          placeholder="Message..."
          className={Style.textarea}
        ></textarea>
        <p className={Style.image_icon}>{ImageIcon}</p>
      </div>
    </div>
  );
};

export default MessageType;
