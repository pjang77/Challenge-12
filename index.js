const inquirer = require("inquirer");
const mysql = require("mysql2/promise");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "seven7seven",
  database: "employee_tracker_db",
};

async function main() {
  try {
    const connection = await mysql.createConnection(dbConfig);

    // Main menu
    while (true) {
      const { choice } = await inquirer.prompt([
        {
          type: "list",
          name: "choice",
          message: "What would you like to do?",
          choices: [
            "Add a department",
            "Add a position",
            "Add an employee",
            "Update an employee position",
            "Exit",
          ],
        },
      ]);

      if (choice === "Exit") {
        console.log("Goodbye!");
        await connection.end();
        break;
      }

      switch (choice) {
        case "Add a department":
          await addDepartment(connection);
          break;
        case "Add a position":
          await addPosition(connection);
          break;
        case "Add an employee":
          await addEmployee(connection);
          break;
        case "Update an employee position":
          await updateEmployeePosition(connection);
          break;
      }
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

async function addDepartment(connection) {
  try {
    const { departmentName } = await inquirer.prompt([
      {
        type: "input",
        name: "departmentName",
        message: "Enter the name of the department:",
      },
    ]);

    const [result] = await connection.execute(
      "INSERT INTO department (name) VALUES (?)",
      [departmentName]
    );
    console.log(`Department "${departmentName}" added to the database.`);
  } catch (error) {
    console.error("Error adding department:", error.message);
  }
}

async function addPosition(connection) {
  try {
    const { title, salary, departmentId } = await inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "Enter the title of the position:",
      },
      {
        type: "number",
        name: "salary",
        message: "Enter the salary for the position:",
      },
      {
        type: "number",
        name: "departmentId",
        message: "Enter the department ID for the position:",
      },
    ]);

    const [result] = await connection.execute(
      "INSERT INTO position (title, salary, department_id) VALUES (?, ?, ?)",
      [title, salary, departmentId]
    );
    console.log(`Position "${title}" added to the database.`);
  } catch (error) {
    console.error("Error adding position:", error.message);
  }
}

async function addEmployee(connection) {
  try {
    const { firstName, lastName, positionId } = await inquirer.prompt([
      {
        type: "input",
        name: "firstName",
        message: "Enter the first name of the employee:",
      },
      {
        type: "input",
        name: "lastName",
        message: "Enter the last name of the employee:",
      },
      {
        type: "number",
        name: "positionId",
        message: "Enter the position ID for the employee:",
      },
    ]);

    const [result] = await connection.execute(
      "INSERT INTO employee (first_name, last_name, position_id) VALUES (?, ?, ?)",
      [firstName, lastName, positionId]
    );
    console.log(`Employee "${firstName} ${lastName}" added to the database.`);
  } catch (error) {
    console.error("Error adding employee:", error.message);
  }
}

async function updateEmployeePosition(connection) {
  try {
    const { employeeId, newPositionId } = await inquirer.prompt([
      {
        type: "number",
        name: "employeeId",
        message: "Enter the ID of the employee to update:",
      },
      {
        type: "number",
        name: "newPositionId",
        message: "Enter the new position ID for the employee:",
      },
    ]);

    await connection.execute(
      "UPDATE employee SET position_id = ? WHERE id = ?",
      [newPositionId, employeeId]
    );
    console.log(`Employee's position updated.`);
  } catch (error) {
    console.error("Error updating employee position:", error.message);
  }
}

main();
