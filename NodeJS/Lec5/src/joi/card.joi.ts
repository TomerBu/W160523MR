import Joi from "joi";
import { ICard } from "../@types/card";
import { IAddress, IImage } from "../@types/user";

const schema = Joi.object<ICard>({
  title: Joi.string().min(1).max(100).required(),
  subtitle: Joi.string().min(1).max(100).required(),
  description: Joi.string().min(1).max(500).required(),
  phone: Joi.string().min(1).max(50).required(),
  email: Joi.string().email().min(5).max(255).required(),
  web: Joi.string().uri().min(5).max(255).required(),
  address: Joi.object<IAddress>({
    street: Joi.string().min(1).max(100).required(),
    city: Joi.string().min(1).max(100).required(),
    state: Joi.string().min(1).max(100),
    zip: Joi.string().min(1).max(20),
    country: Joi.string().min(1).max(100).required(),
    houseNumber: Joi.number().min(1).max(9999999).required(),
  }).required(),
  image: Joi.object<IImage>({
    url: Joi.string().uri().min(5).max(255).required(),
    alt: Joi.string().min(1).max(100).required(),
  }),
});

export default schema;
export { schema as joiCardSchema };
