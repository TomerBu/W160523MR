import { RequestHandler, Request } from "express";
import { auth } from "../service/auth-service";
import { User } from "../database/model/user";
import { extractToken } from "./is-admin";
import { BizCardsError } from "../error/biz-cards-error";

const isUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const token = extractToken(req);
    const { email } = auth.verifyJWT(token);
    const user = await User.findOne({ email });

    if (!user) throw new BizCardsError("User does not exist", 401);

    if (id == user.id) return next();

    res
      .status(401)
      .json({ message: "The id must belong to the user" });
  } catch (e) {
    next(e);
  }
};

export { isUser };
