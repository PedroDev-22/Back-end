-- SELECT * FROM teachers;

-- SELECT school, first_name, salary FROM teachers;

-- SELECT school, first_name, salary 
-- FROM teachers
-- ORDER BY salary DESC;

-- SELECT first_name, last_name, salary 
-- FROM teachers 
-- ORDER BY 3 DESC;

-- SELECT last_name, school, hire_date 
-- FROM teachers 
-- ORDER BY school ASC, hire_date DESC;

-- SELECT DISTINCT school 
-- FROM teachers 
-- ORDER BY school;

-- SELECT DISTINCT school, salary
-- FROM teachers
-- ORDER BY school, salary;

-- SELECT last_name, school, hire_date
-- FROM teachers
-- WHERE school = 'Myers Middle School';

-- SELECT school
-- FROM teachers
-- WHERE school != 'F.D. Roosevelt HS';

-- SELECT first_name, last_name, hire_date
-- FROM teachers
-- WHERE hire_date < '2007-12-7';

-- SELECT first_name, last_name, salary
-- FROM teachers
-- WHERE salary BETWEEN 40000 and 70000
-- ou
SELECT first_name, last_name, school, salary 
FROM teachers 
WHERE salary >= 40000 AND salary <= 70000;

SELECT first_name
FROM teachers
WHERE first_name ILIKE 'sam%';
-- OBS: (LIKE/ILIKE -> case sensitive (Oi pessoal) / incase sensitive (oI PessOAl))