import { joiLoginSchema } from "../../joi/login.joi";
import { joiUserSchema } from "../../joi/user.joi";
import { validateSchema } from "./validate-schema";

const validateRegistration = validateSchema(joiUserSchema);
const validateLogin = validateSchema(joiLoginSchema);

export { validateRegistration, validateLogin };
