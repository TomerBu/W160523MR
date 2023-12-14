import configDotEnv from "./config";
import express, { json } from "express";
import { logger } from "./middleware/logger";
import { notFound } from "./middleware/not-found";
import { peopleRouter } from "./routes/people";
import { usersRouter } from "./routes/users";
import { connect } from "./database/connection";
import { errorHandler } from "./middleware/error-handler";

configDotEnv();
connect();

const app = express();

// middleware chain:
app.use(json());
app.use(logger);
app.use("/api/v1/users", usersRouter); //next(err)
app.use("/api/v1/people", peopleRouter);
app.use(errorHandler);
app.use(notFound);

app.listen(8080);