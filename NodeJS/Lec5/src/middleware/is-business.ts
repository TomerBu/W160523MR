import { RequestHandler, Request } from "express";
import { BizCardsError } from "../error/biz-cards-error";
import { auth } from "../service/auth-service";
import { User } from "../database/model/user";
import { extractToken } from "./is-admin";

const isBusiness: RequestHandler = async (req, res, next) => {
  try {
    const token = extractToken(req);
    const { email } = auth.verifyJWT(token);

    //get user from database
    const user = await User.findOne({ email });

    if (!user) {
      throw new BizCardsError("User does not exist", 401);
    }
    req.user = user;
    const isBusiness = user?.isBusiness;
    if (isBusiness) {
      return next();
    }

    throw new BizCardsError("User Must be a business", 401);
  } catch (e) {
    next(e);
  }
};

export { isBusiness };
