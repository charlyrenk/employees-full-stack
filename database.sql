CREATE TABLE employees(
	id serial PRIMARY KEY,
	first_name VARCHAR(80) NOT NULL,
	last_name VARCHAR(80) NOT NULL,
	job_title VARCHAR(80) NOT NULL,
	annual_salary VARCHAR(80) NOT NULL
	);

INSERT INTO employees(first_name, last_name, job_title, annual_salary)
VALUES ('Charles', 'Renk','Coder', '80000'),
('John', 'Jingleheimer', 'belly-dancer','35000'),
('Harry', 'Potter', 'wizard', '12000');

SELECT * FROM employees;