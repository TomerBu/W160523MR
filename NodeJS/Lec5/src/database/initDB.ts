import { Logger } from "../logs/logger";
import { User } from "./model/user";
import { users } from "./users";
const initDB = async () => {
  //how many users:

  //add 3 users
  const usersCount = await User.countDocuments();
  if (usersCount != 0) return;

  for (let user of users) {
    const saved = await new User(user).save();
    Logger.verbose("Added user: ", saved);
  }

  //TODO: add 3 cards
};

export { initDB };
