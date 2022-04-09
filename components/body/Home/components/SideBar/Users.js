import React from "react";
import Style from "../../../../../styles/components/body/home/components//sidebar/components/users.module.css";

const Users = () => {
  return (
    <div className={Style.container}>
      <div
        style={{ backgroundImage: `url("./images/user_background.jpg")` }}
        className={Style.user_image}
      ></div>
      <div className={Style.user_text_container}>
        <div className={Style.second_container}>
          <p className={Style.user_name}> user_firned </p>
          <p className={Style.follwed_by}>Followed by and friend</p>
        </div>
        <p className={Style.switch}>Follow</p>
      </div>
    </div>
  );
};

export default Users;
