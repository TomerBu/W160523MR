import { Router } from "express";
import { User } from "../database/model/user";
import { validateLogin, validateRegistration } from "../middleware/validation";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import { ILogin, IUser } from "../@types/user";
import { createUser, validateUser } from "../service/user-service";
import { auth } from "../service/auth-service";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();

    res.json(allUsers);
  } catch (e) {
    res.status(500).json({ message: "server error", e });
  }
});

router.post("/", validateRegistration, async (req, res, next) => {
  try {
    const saved = await createUser(req.body as IUser);
    res.status(201).json({ message: "Saved", user: saved });
  } catch (err) {
    next(err);
  }
});

router.post("/login", validateLogin, async (req, res, next) => {
  try {
    //check the request:
    const { email, password } = req.body as ILogin;

    //call the service:
    const jwt = await validateUser(email, password);

    //response
    res.json(jwt);
  } catch (e) {
    next(e);
  }
});



export { router as usersRouter };

//Database:
//connect, mongo-schema, model
//Router:
//validate body (joi-schema), other route logic
