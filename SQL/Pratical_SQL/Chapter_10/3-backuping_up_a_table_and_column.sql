CREATE TABLE meat_poultry_egg_establishments_backup AS
SELECT
    *
FROM
    meat_poultry_egg_establishments;

SELECT 
    (SELECT count(*) FROM meat_poultry_egg_establishments) AS original, 
    (SELECT count(*) FROM meat_poultry_egg_establishments_backup) AS backup;


----

ALTER TABLE meat_poultry_egg_establishments ADD COLUMN st_copy 
text; 
 
UPDATE meat_poultry_egg_establishments 
SET st_copy = st;

SELECT st, 
       st_copy 
FROM meat_poultry_egg_establishments 
WHERE st IS DISTINCT FROM st_copy 
ORDER BY st;