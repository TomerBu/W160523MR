import { Router } from "express";
import { User } from "../database/model/user";
import { validateLogin, validateRegistration } from "../middleware/validation";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import { ILogin } from "../@types/user";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();

    res.json(allUsers);
  } catch (e) {
    res.status(500).json({ message: "server error", e });
  }
});
router.post("/", validateRegistration, async (req, res) => {
  try {
    const userBody = req.body;

    const user = new User(userBody);

    //a 12 salt hash
    user.password = await bcrypt.hash(user.password, 12);

    const saved = await user.save();

    res.status(201).json({ message: "Saved", user: saved });
  } catch (e) {
    res.status(400).json({ message: "An Error occured", e });
  }
});

router.post("/login", validateLogin, async (req, res) => {
  //check the pass
  const { email, password } = req.body as ILogin;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Login failed Check your username and password and try again",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Login failed Check your username and password and try again",
    });
  }

  const secret = process.env.JWT_SECRET!;

  const jwt = JWT.sign({ email: user.email }, secret);

  res.json({ jwt });
});

export { router as usersRouter };

//Database:
//connect, mongo-schema, model
//Router:
//validate body (joi-schema), other route logic
