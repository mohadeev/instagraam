import mongoose from "mongoose";
import dbConnet from "../../../../../util/backend/db/dbconnect";
import Users from "../../../../../util/backend/schema/user.ts";

export const cheking = async (res, name, email, password, username) => {
  // contecting data base
  dbConnet();
  //find if user email is taken
  await Users.findOne({ email: email }).then((doc) => {
    if (doc) {
      //sending res if its taken email
      console.log("email takens");
      res.json({ message: "sorry this email is alrday taken" });
    } else if (!doc) {
      //find if user email is taken
      Users.findOne({ username: username }).then(async (doc0) => {
        if (doc0) {
          //sending res if its taken username
          console.log("name takens");
          res.json({ message: "sorry this username is alrday available" });
        } else if (!doc0) {
          //creating user
          await Users.create({
            name: name,
            email: email,
            password: password,
            username: username,
          }).then((doc1) => {
            console.log("create user");
            res.json(doc1);
          });
        }
      });
    }
  });
};
