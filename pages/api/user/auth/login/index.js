import mongoose from "mongoose";
import Users from "../../../../../util/backend/db/dbconnect";
import dbConnet from "../../../../../util/backend/schema/user.ts";
import { cheking } from "./checking";
const index = async (req, res) => {
  const { method } = req;
  if (method === "POST") {
    const { user, password } = req.body;
    cheking(res, user, password);
  } else {
    res.end();
  }
};
export default index;
