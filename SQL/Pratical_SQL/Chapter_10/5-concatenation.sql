ALTER TABLE meat_poultry_egg_establishments ADD COLUMN 
zip_copy text; 
 
UPDATE meat_poultry_egg_establishments 
SET zip_copy = zip;

UPDATE meat_poultry_egg_establishments 
SET zip = '00' || zip 
WHERE st IN('PR','VI') AND length(zip) = 3;

UPDATE meat_poultry_egg_establishments 
SET zip = '0' || zip 
WHERE st IN('CT','MA','ME','NH','NJ','RI','VT') AND length(zip) = 4;