import { Router } from "express";
import connection from "../database/connect";

const router = Router();
const con = connection("lec4");

router.get("/", (req, res) => {
  con.query("SELECT * FROM people", (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result);
  });
});

router.post("/", (req, res) => {
  const { firstName, lastName } = req.body;

  const sql = `
               INSERT INTO people(first_name, last_name)
               VALUES(?,?)
               `;

  const args = [firstName, lastName];

  con.query(sql, args, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.status(201).json(result);
  });
});

// TODO: REST
// requests with dynamic params:  cards/:id
// requests with query params:  people?search=bob
// delete
// put

//pure function - no side effects:
function printPerson(person: { firstName: string }) {
  console.log(`Person: name: ${person.firstName}😀`);
}

const bob = { firstName: "Bob" };
printPerson(bob);

function printPersonYack(person: { firstName: string }) {
  person.firstName = `Person: name: ${person.firstName}😀`;
  console.log(person.firstName);
}

const bobi = { firstName: "Bobi" };
printPersonYack(bobi);
printPersonYack(bobi);

export { router as peopleRouter };


