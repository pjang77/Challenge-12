const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "seven7seven",
  database: "employee_tracker_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connection to database successful.");
});

module.exports = connection;
