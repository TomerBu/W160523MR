import Joi from "joi";

const validation = (schema: Joi.ObjectSchema, userInput: any) => {
  const { error } = schema.validate(userInput);
  if (!error) {
    return null;
  }

  const { message, path } = error.details[0];
  return { message, path };
};

export default validation;
