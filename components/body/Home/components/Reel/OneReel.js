import React from "react";
import Style from "../../../../../styles/components/body/home/components/onereel.module.css";

const OneReel = ({ Image, Index, UserName }) => {
  return (
    <div className={Style.main} key={Index}>
      <div className={Style.container}>
        <div
          style={{ backgroundImage: `url(${Image})` }}
          className={Style.second_container}
        ></div>
      </div>
      <p className={Style.p}>{UserName}</p>
    </div>
  );
};

export default OneReel;
