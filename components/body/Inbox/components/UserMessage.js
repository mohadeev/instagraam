import React from "react";
// import Style from "../../../../../styles/components/body/home/components//sidebar/components/users.module.css";

import Style from "../../../../styles/components/body/inbox/components/usermessage.module.css";
// import IMage from ;

const UserMessage = ({ UserIamgeStyle,ActiveStyle, UserNameStyle}) => {
  return (
    <div className={Style.container}>
      <div
        style={UserIamgeStyle}
        // style={{ backgroundImage: `url(${""})` }}
        className={Style.user_image}
      ></div>
      <div className={Style.user_text_container}>
        <div className={Style.second_container}>
          <p className={Style.user_name} style={UserNameStyle}>
            Useraname22{" "}
          </p>
          <p className={Style.full_name} style={ActiveStyle}>Active Yestrday</p>
        </div>
      </div>
    </div>
  );
};

export default UserMessage;
