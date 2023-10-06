import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "email must be provide"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password must be provided"],
  },
  image: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
});

const userModel = mongoose.models.users || mongoose.model("users", userSchema);

export default userModel;
