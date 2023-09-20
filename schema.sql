
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS position;
DROP TABLE IF EXISTS department;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name varchar(30) NOT NULL
);

CREATE TABLE position (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(40) NOT NULL, 
    salary DECIMAL(10, 2) NOT NULL, 
    department_id INT NOT NULL, 
    FOREIGN KEY (department_id) REFERENCES department(id)
); 

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL, 
    position_id INT NOT NULL,     
    FOREIGN KEY (position_id) REFERENCES `position`(id)
);


INSERT INTO department (name) VALUES
    ('Product'), 
    ('Sales'), 
    ('HR'),
    ('Finance'); 

INSERT INTO position (title, salary, department_id) VALUES
    ('Software Engineer', 150000.00, 1), 
    ('Product Manager', 100000.00, 1),
    ('Sales Rep', 50000.00, 2), 
    ('Sales Director', 120000.00, 2), 
    ('HR Manager', 80000.00, 3), 
    ('Recruiter', 60000.00, 3), 
    ('Financial Analyst', 70000.00, 4),
    ('Controller', 160000.00, 4);

INSERT INTO employee (first_name, last_name, position_id) VALUES 
    ('Lebron', 'James', 1),
    ('Michael', 'Jordan', 2),
    ('Larry', 'Bird', 3), 
    ('Penny', 'Hardaway', 4),
    ('Paul', 'George', 5), 
    ('Luka', 'Doncic', 6), 
    ('Zion', 'Williamson', 7), 
    ('Anthony', 'Edwards', 8); 