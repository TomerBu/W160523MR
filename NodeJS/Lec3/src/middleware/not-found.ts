import { RequestHandler } from "express";

// The last middleware in the chain:
const notFound: RequestHandler = (req, res, next) => {
  res.status(404).json({ message: "Not Found" });
};

export { notFound };

//Request, Response, NextFunction, RequestHandler, ErrorRequestHandler