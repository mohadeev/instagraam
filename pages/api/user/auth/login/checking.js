import mongoose from "mongoose";
import dbConnet from "../../../../../util/backend/db/dbconnect";
import Users from "../../../../../util/backend/schema/user.ts";

export const cheking = async (res, user, password) => {
  // contecting data base
  dbConnet();
  //find if user email is taken
  await Users.findOne({ email: user }).then((doc) => {
    if (doc) {
      if (doc.password === password) {
        console.log(doc);
        res.json(doc);
      } else if (doc.password !== password) {
        res.json({ message: "password not corrct" });
      }
    } else if (!doc) {
      Users.findOne({ username: user }).then((doc0) => {
        if (doc0) {
          if (doc0.password === password) {
            console.log(doc0);
            res.json(doc0);
          }
        } else if (!doc0) {
          res.json({
            message: "we didnt find account with this email or password",
          });
        }
      });
    }
  });
};
