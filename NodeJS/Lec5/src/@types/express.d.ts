import { Request } from "express";
// add user to express request

import { IUser } from "./user";

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}
