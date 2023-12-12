import { RequestHandler } from "express";
import { ObjectSchema } from "joi";
import validation from "../../joi/validation";


type ValidateSchema = (schema: ObjectSchema) => RequestHandler;

const validateSchema: ValidateSchema = (schema) => (req, res, next) => {
  const error = validation(schema, req.body);

  if (!error) return next();

  res.status(400).json({ error });
};



export { validateSchema };
