import React, { useState , useEffect } from "react";
import { io } from "socket.io-client";
import Cookies from "js-cookie";
const UserFech = () => {
  let socket;
  const sendCookie = Cookies.get("user_ref");
  const [Host , setHost] = useState("")
  useEffect(() => {
      if (window.location.hostname ==="localhost"){
          setHost("http://localhost:3000");
      }else{
          setHost(`http${window.location.hostname}`);
      }
    const fetchData = async () => {
      const basurl = process.env.NEXT_PUBLIC_ANALYTICS_ID;
      console.log("host :" + Host);
      console.log( "url :" + basurl);;
      socket = io();
      socket.connect();
      await fetch(`${Host}/api/user/auth/login/sending`)
      if (sendCookie) {
        socket.emit("send-cookie", sendCookie);
        socket.on("output-user", (payload) => {
          console.log("user is " + payload);
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
