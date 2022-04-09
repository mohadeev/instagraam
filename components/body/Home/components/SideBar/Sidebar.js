import React from "react";
import Style from "../../../../../styles/components/body/home/components//sidebar/sidebar.module.css";
import User from "./User";
import Users from "./Users";

const Sidebar = () => {
  return (
    <div className={Style.container}>
      <User />
      <div className={Style.users_container}>
        <p className={Style.suggestions}>
          {" "}
          Suggestions For You{" "}
          <small className={Style.suggestions_all}>See All</small>
        </p>
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        
      </div>
    </div>
  );
};

export default Sidebar;
