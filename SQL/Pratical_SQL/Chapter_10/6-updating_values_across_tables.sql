CREATE TABLE state_regions ( 
    st text CONSTRAINT st_key PRIMARY KEY, 
    region text NOT NULL 
); 

ALTER TABLE meat_poultry_egg_establishments 
    ADD COLUMN inspection_deadline timestamp with time zone; 
 
UPDATE meat_poultry_egg_establishments establishments 
SET inspection_deadline = '2022-12-01 00:00 EST' 
WHERE EXISTS (SELECT state_regions.region 
              FROM state_regions 
              WHERE establishments.st = state_regions.st 
                    AND state_regions.region = 'New 
England');

SELECT st, inspection_deadline 
FROM meat_poultry_egg_establishments 
GROUP BY st, inspection_deadline 
ORDER BY st;