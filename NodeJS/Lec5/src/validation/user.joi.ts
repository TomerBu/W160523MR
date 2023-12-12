import Joi from "joi";
import { IName, IUser, IAddress, IImage } from "../@types/user";
import { passwordRegex, phoneRegex } from "./patterns";

const schema = Joi.object<IUser>({
  address: Joi.object<IAddress>({
    city: Joi.string().min(2).max(50).required(),
    country: Joi.string().min(1).max(50).required(),
    houseNumber: Joi.number().min(0).max(50000).required(),
    street: Joi.string().min(1).max(50).required(),
    zip: Joi.string().min(1).max(20).required(),
    state: Joi.string().max(50).allow(""),
  }).required(),
  email: Joi.string().email().min(5).max(255).required(),
  name: Joi.object<IName>({
    first: Joi.string().min(1).max(50).required(),
    last: Joi.string().min(1).max(100).required(),
    middle: Joi.string().max(100).allow(""),
  }).required(),

  password: Joi.string().pattern(passwordRegex).min(5).max(30).required(),
  phone: Joi.string().pattern(phoneRegex).min(1).max(50).required(),
  image: Joi.object<IImage>({
    alt: Joi.string().min(0).max(100).allow(""),
    url: Joi.string().uri().min(5).max(255).required(),
  }),
  isBusiness: Joi.boolean().required(),
});

export { schema as joiUserSchema };