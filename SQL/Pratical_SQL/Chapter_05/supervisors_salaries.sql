CREATE TABLE supervisor_salaries ( 
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    town text, 
    county text, 
    supervisor text, 
    start_date date, 
    salary numeric(10,2), 
    benefits numeric(10,2) 
);

SELECT * FROM supervisor_salaries;

DELETE FROM supervisor_salaries;

