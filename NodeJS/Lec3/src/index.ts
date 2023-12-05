import express, { json } from 'express';
import { usersRouter } from './routes/users';
import { logger } from './middleware/logger';
import { notFound } from './middleware/not-found';

const app = express();

// middleware chain:
app.use(json());
app.use(logger);
app.use("/api/v1/users", usersRouter);
app.use(notFound);

app.listen(8080);


