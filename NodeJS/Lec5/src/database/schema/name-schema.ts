import { Schema } from "mongoose";

import { IName } from "../../@types/user";

const nameSchema = new Schema<IName>({
  first: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 20,
  },
  middle: {
    required: false,
    default: "",
    type: String,
    minlength: 2,
    maxlength: 20,
  },
  last: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 20,
  },
});

export { nameSchema };
