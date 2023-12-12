import { Router } from "express";
import { User } from "../database/model/user";
import { validateRegistration } from "../middleware/validation";

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
    const saved = await user.save();

    res.status(201).json({ message: "Saved", user: saved });
  } catch (e) {
    res.status(400).json({ message: "An Error occured", e });
  }
});

export { router as usersRouter };
