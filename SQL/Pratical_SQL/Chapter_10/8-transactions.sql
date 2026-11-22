START TRANSACTION;
 
UPDATE meat_poultry_egg_establishments
SET company = 'AGRO Merchantss Oakland LLC'
WHERE company = 'AGRO Merchants Oakland, LLC'; 
 
SELECT company
FROM meat_poultry_egg_establishments
WHERE company LIKE 'AGRO%' 
ORDER BY company; 
 
ROLLBACK;