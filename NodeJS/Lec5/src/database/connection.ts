// pnpm add mongoose
import { initDB } from "./initDB";
import mongoose from "mongoose";

const connect = async () => {
  try {
    //read the connection string from dotenv file:
    const connectionString = process.env.DB_CONNECTION_STRING;

    if (!connectionString) {
      console.error("DB_CONNECTION_STRING IS NOT DEFINED IN your .env file");
      return;
    }

    //connect to the database:
    await mongoose.connect(connectionString);

    console.log("Database Connected");
    //init the database:
    await initDB();
  } catch (err) {
    console.error("Error Connecting to database", err);
  }
};

export { connect };
