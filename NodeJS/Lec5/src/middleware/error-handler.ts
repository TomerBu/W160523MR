import e, { ErrorRequestHandler } from "express";
import { BizCardsError } from "../error/biz-cards-error";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  //userService Error
  if (err instanceof BizCardsError) {
    return res.status(err.status).json({ message: err.message });
  }

  //mongoose error...
  if (err.code && err.code == 11000 && err.keyPattern && err.keyValue) {
    return res.status(400).json({
      message: "Duplicate Key - Must be Unique",
      property: err.keyValue,
      index: err.keyPattern,
    });
  }

  if (err instanceof SyntaxError) {
    return res.status(400).json({ message: "Invalid Json" });
  }

  //cathall
  return res.status(500).json({ message: "Internal Server Error", err });
};

export { errorHandler };
