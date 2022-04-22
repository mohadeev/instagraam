import mongoose from "mongoose";
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true }, // String is shorthand for {type: String}
    image: { type: String },
    name: { type: String, required: true },
    login: { type: Boolean, default: false },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// UserSchema.virtual("categoryId").get(function () {
//   return this._id;
// });

// export default mongoose.models.User || mongoose.model('users', UserSchema)
const User = mongoose.models.users || mongoose.model("users", UserSchema);
export default User;
// userid: { type: mongoose.Schema.Types.ObjectId , ref : "user" },
