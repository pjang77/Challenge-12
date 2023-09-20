const connection = require("../db");

function viewAllDepartments() {
  const query = "SELECT * FROM department";

  connection.query(query, (err, results) => {
    if (err) throw err;

    console.table(results);

    mainMenu();
  });
}

module.exports = viewAllDepartments;
