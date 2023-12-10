import mongoose from "mongoose";
import { userSchema } from "../schema/user-schema";

const User = mongoose.model("user", userSchema);

export { User };
