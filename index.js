const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "host",
  user: "user",
  password: "password",
  database: "database",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connection to database successful.");
});

function viewAllDepartments() {
  const query = "SELECT * FROM department";

  connection.query(query, (err, results) => {
    if (err) throw err;

    console.table(results);

    mainMenu();
  });
}
