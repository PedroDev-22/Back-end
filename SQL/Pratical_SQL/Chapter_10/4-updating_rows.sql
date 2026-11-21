UPDATE meat_poultry_egg_establishments 
SET st = 'MN' 
WHERE establishment_number = 'V18677A'; 
 
UPDATE meat_poultry_egg_establishments 
SET st = 'AL' 
WHERE establishment_number = 'M45319+P45319'; 
 
UPDATE meat_poultry_egg_establishments 
SET st = 'WI' 
WHERE establishment_number = 'M263A+P263A+V263A' 
RETURNING establishment_number, company, city, st, zip

UPDATE meat_poultry_egg_establishments 
SET st = st_copy;

UPDATE meat_poultry_egg_establishments original 
SET st = backup.st 
FROM meat_poultry_egg_establishments_backup backup 
WHERE original.establishment_number = backup.establishment_number;

ALTER TABLE meat_poultry_egg_establishments ADD COLUMN 
company_standard text; 
 
UPDATE meat_poultry_egg_establishments 
SET company_standard = company;

UPDATE meat_poultry_egg_establishments 
SET company_standard = 'Armour-Eckrich Meats' 
WHERE company LIKE 'Armour%' 
RETURNING company, company_standard;