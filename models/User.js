import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
        validator:validator.isEmail,
        message: "Email is not valid",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6,
  },
  lastName: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 20,
    default: "Last Name",
  },
  location: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 20,
    default: "My City",
  },
});

export default mongoose.model("User", UserSchema);
