CREATE TABLE natural_key_composite_example (
    student_id text,
    school_day date,
    present boolean,
    CONSTRAINT student_key PRIMARY KEY (student_id, school_day)
);

INSERT INTO
    natural_key_composite_example (student_id, school_day, present)
VALUES
    (775, '2022-01-22', 'Y');

INSERT INTO
    natural_key_composite_example (student_id, school_day, present)
VALUES
    (775, '2022-01-23', 'Y');

-- INSERT INTO natural_key_composite_example (student_id, 
-- school_day, present) 
-- VALUES(775, '2022-01-23', 'N');

CREATE TABLE surrogate_key_example (
    order_number bigint GENERATED ALWAYS AS IDENTITY,
    product_name text,
    order_time timestamp with time zone,
    CONSTRAINT order_number_key PRIMARY KEY (order_number)
);

INSERT INTO
    surrogate_key_example (product_name, order_time)
VALUES
    ('Beachball Polish', '2020-03-15 09:21-07'),
    ('Wrinkle De-Atomizer', '2017-05-22 14:00-07'),
    ('Flux Capacitor', '1985-10-26 01:18:00-07');

SELECT
    *
FROM
    surrogate_key_example;

INSERT INTO
    surrogate_key_example
OVERRIDING SYSTEM VALUE
VALUES
    (4, 'Chicken Coop', '2021-09-03 10:33-07');

ALTER TABLE surrogate_key_example
ALTER COLUMN order_number RESTART
WITH
    5;

INSERT INTO
    surrogate_key_example (product_name, order_time)
VALUES
    ('Aloe Plant', '2020-03-15 10:09-07');

SELECT
    *
FROM
    surrogate_key_example;