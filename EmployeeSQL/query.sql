SELECT employees.emp_no, employees.first_name, employees.last_name, employees.gender, salaries.salary
FROM employees
INNER JOIN salaries ON
employees.emp_no = salaries.emp_no;

SELECT * FROM employees
WHERE employees.hire_date >= '1986-01-01' AND employees.hire_date < '1987-01-01';

SELECT departments.dept_name, employees.first_name, employees.last_name, dept_manager.emp_no, dept_manager.from_date, dept_manager.to_date
FROM departments, employees, dept_manager
WHERE dept_manager.dept_no IN 
(
	SELECT dept_no
	FROM dept_manager
	WHERE emp_no IN 
	(
		SELECT emp_no
		FROM employees
	)
);

SELECT employees.first_name, employees.last_name, employees.emp_no, departments.dept_name
FROM employees
INNER JOIN dept_emp ON employees.emp_no = dept_emp.emp_no
INNER JOIN departments ON dept_emp.dept_no = departments.dept_no;

SELECT *
FROM employees
WHERE first_name = 'Hercules'
	  AND last_name LIKE 'B%';

SELECT employees.first_name, employees.last_name, departments.dept_name, employees.emp_no
FROM employees
INNER JOIN dept_emp ON employees.emp_no = dept_emp.emp_no
INNER JOIN departments ON dept_emp.dept_no = departments.dept_no
WHERE departments.dept_name = 'Sales';

SELECT employees.first_name, employees.last_name, departments.dept_name, employees.emp_no
FROM employees
INNER JOIN dept_emp ON employees.emp_no = dept_emp.emp_no
INNER JOIN departments ON dept_emp.dept_no = departments.dept_no
WHERE departments.dept_name IN ('Sales', 'Development');

SELECT last_name, COUNT(last_name)
FROM employees
GROUP BY last_name
ORDER BY COUNT(last_name) DESC;

