import React, { useEffect } from "react";
import { io } from "socket.io-client";
import Cookies from "js-cookie";
const UserFech = () => {
  let socket;
  const sendCookie = Cookies.get("user_ref");
  useEffect(() => {
    const fetchData = async () => {
      const basurl = process.env.NEXT_PUBLIC_ANALYTICS_ID;
      console.log(basurl);;
      socket = io();
      socket.connect();
      await fetch(`${basurl}/api/user/auth/login/sending`);
      if (sendCookie) {
        socket.emit("send-cookie", sendCookie);
        socket.on("output-user", (payload) => {
          console.log(payload);
        });
      } else {
        socket.emit("send-cookie", sendCookie);
        socket.on("user-res", (payload) => {});
      }
    };
    fetchData();
    return () => {
      socket.disconnect();
    };
  });
  return <div>ddd</div>;
};

export default UserFech;
