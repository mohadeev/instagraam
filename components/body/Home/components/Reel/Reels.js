import React, { useState, useEffect } from "react";
import Style from "../../../../../styles/components/body/home/components/reels.module.css";
import OneReel from "./OneReel";
import { UsersDemo } from "./../UserDemo.js";
import ReelBeforLaoad from "./ReelBeforLaoad";

const Reels = () => {
  const [Users, setUsers] = useState([]);
  const Url = "https://fakestoreapi.com/users";

  useEffect(() => {
    const fechData = async () => {
      setTimeout(() => {
        setUsers([{ username: "sdf" }]);
      }, 1000);
      // const res = await fetch(Url);
      // const data = await res.json();
      // setUsers(UsersDemo.slice(0, 6));
    };
    fechData();
  }, [Users]);
  return (
    <div className={Style.container}>
      <div className={Style.reels_container}>
        {Users.length === 0 ? (
              Array(7).fill().map(( i , index)=>(<ReelBeforLaoad key={index}/>))

        ) : (
          Users.map(({ image, username }, index) => (
            <OneReel
              Image={image}
              UserName={username}
              Index={index}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Reels;
