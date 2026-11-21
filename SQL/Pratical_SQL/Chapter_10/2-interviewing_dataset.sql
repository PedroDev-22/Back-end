SELECT company,
        street,
        city,
        st,
        count(*) AS adress_count
FROM meat_poultry_egg_establishments
GROUP BY company, street, city, st
HAVING count(*) > 1
ORDER BY company, street, city, st;

SELECT st,
        count(*) AS st_count
FROM meat_poultry_egg_establishments
GROUP BY st
ORDER BY st_count DESC;

SELECT establishment_number, 
       company, 
       city, 
       st, 
       zip 
FROM meat_poultry_egg_establishments 
WHERE st IS NULL;

SELECT company, 
       count(*) AS company_count 
FROM meat_poultry_egg_establishments 
GROUP BY company 
ORDER BY company;

SELECT length(zip), 
       count(*) AS length_count 
FROM meat_poultry_egg_establishments 
GROUP BY length(zip) 
ORDER BY length(zip) ASC;

SELECT st, 
       count(*) AS st_count
FROM meat_poultry_egg_establishments 
WHERE length(zip) < 5 
GROUP BY st
ORDER BY st ASC;