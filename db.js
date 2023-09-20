const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "local host",
  user: "user 1",
  password: "password",
  database: "Employee_Tracker_db",
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
