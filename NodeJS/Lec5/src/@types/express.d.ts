import { Request } from "express";
// add user to express request

import { IJWTPayload } from "./user";

declare global {
  namespace Express {
    interface Request {
      user?: IJWTPayload;
    }
  }
}
