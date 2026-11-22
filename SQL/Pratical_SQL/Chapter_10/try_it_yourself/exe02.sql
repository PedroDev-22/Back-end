UPDATE meat_poultry_egg_establishments
SET meat_processing = TRUE
WHERE activities ILIKE '%Meat Processing%';

UPDATE meat_poultry_egg_establishments
SET poultry_processing = TRUE
WHERE activities ILIKE '%Poultry Processing%';
