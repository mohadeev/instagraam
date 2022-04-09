import React from "react";
// import Style from "../../../../../styles/components/body/home/components//sidebar/components/users.module.css";

import Style from "../../../../styles/components/body/inbox/components/usermessage.module.css";

const UserMessage = () => {
  return (
    <div className={Style.container}>
      <div
        style={{ backgroundImage: `url("./images/user_background.jpg")` }}
        className={Style.user_image}
      ></div>
      <div className={Style.user_text_container}>
        <div className={Style.second_container}>
          <p className={Style.user_name}> Useraname22 </p>
          <p className={Style.full_name}>Full Name</p>
        </div>
        <p className={Style.switch}>Switch</p>
      </div>
    </div>
  );
};

export default UserMessage;
