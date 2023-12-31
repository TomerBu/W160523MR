import express, { json } from "express";
import { usersRouter } from "./routes/users";
import { logger } from "./middleware/logger";
import { notFound } from "./middleware/not-found";
import { peopleRouter } from "./routes/people";

const app = express();

// middleware chain:
app.use(json());
app.use(logger);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/people", peopleRouter);
app.use(notFound);

app.listen(8080);
