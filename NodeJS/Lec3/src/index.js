import express, { json } from 'express';
import { usersRouter } from './routes/users.js';
import { logger } from './middleware/logger.js';
import { notFound } from './middleware/not-found.js';

const app = express();

// middleware chain:
app.use(json());
app.use(logger);
app.use("/api/v1/users", usersRouter);
app.use(notFound);

app.listen(8080);


