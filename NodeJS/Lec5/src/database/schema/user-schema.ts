import { Schema } from "mongoose";

import { User } from "../../@types/user";
const userSchema = new Schema<User>({
  phone: {
    required: true,
    type: String,
    minlength: 9,
  },
});
