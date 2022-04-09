import React, { useState, useEffect } from "react";
import Style from "../../../../../styles/components/body/home/components/reels.module.css";
import OneReel from "./OneReel";
import { UsersDemo } from "./../UserDemo.js";

const Reels = () => {
  const [Users, setUsers] = useState([{ username: "Heeeeee" }]);
  const Url = "https://fakestoreapi.com/users";

  useEffect(() => {
    const fechData = async () => {
      const res = await fetch(Url);
      const data = await res.json();
      setUsers(UsersDemo.slice(0, 6));
      console.log(Users);
    };
    fechData();
  }, [Users]);
  return (
    <div className={Style.container}>
      <div className={Style.reels_container}>
        {Users.map(({ image, username }, index) => (
          <OneReel
            Image={image}
            UserName={username}
            Index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Reels;
