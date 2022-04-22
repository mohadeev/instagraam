import React, { useEffect } from "react";
import { io } from "socket.io-client";
import Cookies from "js-cookie";
const UserFech = () => {
  let socket;
  const sendCookie = Cookies.get("user_ref");
  useEffect(() => {
    const fetchData = async () => {
      const basurl = process.env.NEXT_PUBLIC_ANALYTICS_ID;
      console.log("url :" + basurl);
      socket = io();
      socket.connect();
      await fetch(
        `https://instagraam-nine.vercel.app/api/user/auth/login/sending`
      ).then(() => {
        if (sendCookie) {
          socket.emit("send-cookie", sendCookie);
          socket.on("output-user", (payload) => {
            console.log("user is " + payload);
          });
        } else {
          socket.emit("send-cookie", sendCookie);
          socket.on("user-res", (payload) => {});
        }
      });
    };
    fetchData();
    return () => {
      socket.disconnect();
    };
  });
  return <div>ddd</div>;
};

export default UserFech;
