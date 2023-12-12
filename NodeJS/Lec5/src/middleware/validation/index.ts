import { joiUserSchema } from "../../joi/user.joi";
import { validateSchema } from "./validate-schema";

// syntactic sugar
const validateRegistration = validateSchema(joiUserSchema);

export { validateRegistration };
