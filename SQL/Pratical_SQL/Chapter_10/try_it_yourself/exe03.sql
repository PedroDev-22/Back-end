SELECT poultry_processing, count(*)
FROM meat_poultry_egg_establishments
GROUP BY poultry_processing;

SELECT meat_processing, count(*)
FROM meat_poultry_egg_establishments
GROUP BY meat_processing;

SELECT meat_processing, poultry_processing, count(*)
FROM meat_poultry_egg_establishments
WHERE meat_processing = TRUE AND
poultry_processing = TRUE
GROUP BY meat_processing, poultry_processing;