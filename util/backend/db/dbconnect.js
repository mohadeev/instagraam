import mongoose from "mongoose";

const connnection = {};
const conectUrl =
  "mongodb+srv://admin:zJMmrG0y6DqSy0or@cluster0.6ucyp.mongodb.net/instagraam?retryWrites=true&w=majority";

// process.env.MONGO_DB_CONECT;
const dbConnect = async () => {
  if (connnection.isConnected) {
    return;
  }
  const db = await mongoose.connect(conectUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  //

  connnection.isConnected = db.connections[0].readyState;
};

export default dbConnect;
