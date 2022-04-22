import { Server } from "socket.io";
import mongoose from "mongoose";
import dbConnet from "../../../../../util/backend/db/dbconnect";
import Users from "../../../../../util/backend/schema/user.ts";

const SocketHandler = async (req, res) => {
  dbConnet();
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", async (socket) => {
      socket.on("send-cookie", (payload) => {
        console.log("this is the user id : " + payload);
        Users.findOne({ user_ref: payload }).then((doc) => {
          console.log(req.cookies.user_ref);
          socket.emit("output-user", doc);
        });
      });
    });
  }
  res.end();
};

export default SocketHandler;
