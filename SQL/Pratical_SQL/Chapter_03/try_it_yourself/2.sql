SELECT first_name, last_name, salary
FROM teachers
WHERE first_name LIKE 'S%'
    AND salary > 40000;