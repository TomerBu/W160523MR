import Joi from "joi";
import { passwordRegex } from "./patterns";
import { ILogin } from "../@types/user";

const schema = Joi.object<ILogin>({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(passwordRegex).required(),
});

export { schema as joiLoginSchema };