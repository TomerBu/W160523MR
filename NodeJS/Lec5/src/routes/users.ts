import { Router } from "express";
import { ILogin, IUser } from "../@types/user";
import { User } from "../database/model/user";
import { validateLogin, validateRegistration } from "../middleware/validation";
import { createUser, validateUser } from "../service/user-service";
import { isAdmin } from "../middleware/is-admin";
import { isAdminOrUser } from "../middleware/is-admin-or-user";
import { isUser } from "../middleware/is-user";
import { auth } from "../service/auth-service";
import { Logger } from "../logs/logger";

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
  //hash the password:
  req.body.password = await auth.hashPassword(req.body.password);

  const savedUser = await User.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  //not null check
  //remove the password
  res.json(savedUser);
});

router.get("/:id", isAdminOrUser, async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = (await User.findById(id).lean()) as IUser;

    const { password, ...rest } = user;
    return res.json({ user: rest });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", isAdminOrUser, async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findOneAndDelete({ _id: id });
    Logger.verbose("deleted the user");
    return res.json(deleteUser);
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
    try {
      //call the service:
      const jwt = await validateUser(email, password);
      //response
      res.json(jwt);
    } catch (e) {
      //email / password are invalid
      //save data to database: Date ['', '', '']
      //res.json /or throw
    }

   
  } catch (e) {
    next(e);
  }
});

export { router as usersRouter };

//Database:
//connect, mongo-schema, model
//Router:
//validate body (joi-schema), other route logic
