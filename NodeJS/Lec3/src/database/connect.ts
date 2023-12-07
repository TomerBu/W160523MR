import mysql2 from "mysql2";

const connect = (database: string = "lec4") =>
  mysql2.createConnection({
    database: database,
    password: "1qazxsw2",
    user: "root",
  });

export default connect;
//Named export
export { connect };
