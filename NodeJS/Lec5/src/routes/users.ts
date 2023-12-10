import { Router } from "express";
import { User } from "../database/model/user";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();

    res.json(allUsers);
  } catch (e) {
    res.status(500).json({ message: "server error", e });
  }
});
router.post("/", async (req, res) => {

  try {
    const userBody = req.body;

    //TODO: use joi to check the body
    //if(המידע לא תקין){return res.json({message: "bad request"})}

    const user = new User(userBody);

    //mongo -> save
    const saved = await user.save();

    res.status(201).json({ message: "Saved", user: saved });
  } catch (e) {
    res.status(400).json({ message: "An Error occured", e });
  }
});

export { router as usersRouter };
