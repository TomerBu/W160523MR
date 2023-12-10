//require => commonJS modules (NodeJS Built modulation system)
import chalk from "chalk";
import { RequestHandler } from "express";

const logger: RequestHandler = (req, res, next) => {
  console.log(chalk.blue(req.method, req.url));
  //continue to next function in the chain.
  next();
};

export { logger };
