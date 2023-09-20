const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "local host",
  user: "user 1",
  password: "password",
  database: "employee_tracker_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connection to database successful.");
});

module.exports = connection;
