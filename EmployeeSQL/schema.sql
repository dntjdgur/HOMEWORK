CREATE TABLE employees (
    emp_no INT NOT NULL,
    birth_date DATE NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    gender VARCHAR(30) NOT NULL,
    hire_date DATE NOT NULL,
    CONSTRAINT PK_employees PRIMARY KEY (emp_no)
);

CREATE TABLE departments (
    dept_no VARCHAR(30) NOT NULL,
    dept_name VARCHAR(30) NOT NULL UNIQUE,
	CONSTRAINT PK_departments PRIMARY KEY (dept_no)
);

CREATE TABLE title (
    emp_no INT NOT NULL REFERENCES employees (emp_no),
    title VARCHAR(30) NOT NULL,
    from_date DATE NOT NULL,
    to_date DATE NOT NULL
);

CREATE TABLE salaries (
    emp_no INT NOT NULL REFERENCES employees (emp_no),
    salary VARCHAR(30) NOT NULL,
    from_date DATE NOT NULL,
    to_date DATE NOT NULL
);

CREATE TABLE dept_manager (
    dept_no VARCHAR(30) NOT NULL REFERENCES departments (dept_no),
    emp_no INT NOT NULL REFERENCES employees (emp_no),
    from_date DATE NOT NULL,
    to_date DATE NOT NULL
);

CREATE TABLE dept_emp (
    emp_no INT NOT NULL REFERENCES employees (emp_no),
    dept_no VARCHAR(30) NOT NULL REFERENCES departments (dept_no),
    from_date DATE NOT NULL,
    to_date DATE NOT NULL
);

SELECT * FROM employees;

