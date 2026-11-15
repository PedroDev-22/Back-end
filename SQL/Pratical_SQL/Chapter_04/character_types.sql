-- CREATE TABLE char_data_types (
--     char_column char(10),
--     varchar_column varchar(10),
--     text_column text
-- );

-- INSERT INTO char_data_typess
-- VALUES
--     ('abc', 'abc', 'abc'),
--     ('defghi', 'defghi', 'defghi');

COPY char_data_types TO '/tmp/type_test.txt'
WITH (FORMAT CSV, HEADER, DELIMITER '|');