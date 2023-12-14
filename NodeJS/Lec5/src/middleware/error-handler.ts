import { ErrorRequestHandler } from "express";
import { BizCardsError } from "../error/biz-cards-error";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {

  //userService Error
  if (err instanceof BizCardsError) {
    return res.status(err.status).json({ message: err.message });
  }

  //mongoose error...

  //cathall
  return res.status(500).json({ message: "Internal Server Error" });
};

export { errorHandler };
