DELETE FROM meat_poultry_egg_establishments 
WHERE st IN('AS','GU','MP','PR','VI');

ALTER TABLE meat_poultry_egg_establishments DROP COLUMN 
zip_copy;

DROP TABLE meat_poultry_egg_establishments_backup;