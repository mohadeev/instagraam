import mongoose from "mongoose";
import Users from "../../../../../util/backend/db/dbconnect";
import dbConnet from "../../../../../util/backend/schema/user.ts";
import { cheking } from "./checking";
const index = async (req, res) => {
  const { method } = req;
  if (method === "POST") {
    const { name, email, password, username } = req.body;
    cheking(res, name, email, password, username);
  } else {
    res.end();
  }
};
export default index;
