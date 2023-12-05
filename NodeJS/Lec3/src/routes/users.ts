import { Router } from "express";
import mysql2 from "mysql2";

const connection = mysql2.createConnection({
  //host, port, user, password, database
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1qazxsw2",
  database: "sakila",
});

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  //sql query to fetch all customers
  connection.query("SELECT * FROM customer", (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(result);
    }
  });
});

usersRouter.post("/", (req, res) => {
  const { firstName, lastName, email } = req.body;

  const sql = `
  INSERT INTO customer(
                  store_id, first_name, last_name, email, address_id
              )
              VALUES (1, '${firstName}', '${lastName}', '${email}', 1)
`;
  //INSERT INTO customer(...) VALUES(...)
  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(result);
    }
  });
});

export { usersRouter };
