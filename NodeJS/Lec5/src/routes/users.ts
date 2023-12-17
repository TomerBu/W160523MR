import { Router } from "express";
import { ILogin, IUser } from "../@types/user";
import { User } from "../database/model/user";
import { validateLogin, validateRegistration } from "../middleware/validation";
import { createUser, validateUser } from "../service/user-service";
import { isAdmin } from "../middleware/is-admin";
import { isAdminOrUser } from "../middleware/is-admin-or-user";
import { isUser } from "../middleware/is-user";
import { auth } from "../service/auth-service";

const router = Router();

router.get("/", isAdmin, async (req, res, next) => {
  try {
    const allUsers = await User.find();

    res.json(allUsers);
  } catch (e) {
    next(e);
  }
});


router.put("/:id", isUser, validateRegistration, async (req, res, next) => {
  //prevent isAdmin from being passed
  //let the middleware pass the entire user
  //hash the password
  
})


router.get("/:id", isAdminOrUser, async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({"_id": id});

    const { password, ...rest } = user!._doc;
    return res.json({ user: rest });
  } catch (e) {
    next(e);
  }
});

//email, password + userdetails
//password -> hsah
router.post("/", validateRegistration, async (req, res, next) => {
  try {
    const saved = await createUser(req.body as IUser);
    res.status(201).json({ message: "Saved", user: saved });
  } catch (err) {
    next(err);
  }
});

//email, password
//JWT
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
