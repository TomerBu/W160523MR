// pnpm add mongoose
import { Logger } from "../logs/logger";
import { initDB } from "./initDB";
import mongoose from "mongoose";

const connect = async () => {
  try {
    //read the connection string from dotenv file:
    const connectionString = process.env.DB_CONNECTION_STRING;

    if (!connectionString) {
      Logger.error("DB_CONNECTION_STRING IS NOT DEFINED IN your .env file");
      return;
    }

    //connect to the database:
    await mongoose.connect(connectionString);

    //blue:
    Logger.debug("Database Connected");
    //init the database:
    await initDB();
  } catch (err) {
    Logger.error("Error Connecting to database", err);
  }
};

export { connect };
