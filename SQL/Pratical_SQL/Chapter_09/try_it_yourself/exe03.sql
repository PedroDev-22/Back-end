-- FULL OUTER JOIN

SELECT 
    pls18.libname, pls18.stabr, pls18.county, pls18.city,
    pls17.libname, pls17.stabr, pls17.county, pls17.city,
    pls16.libname, pls16.stabr, pls16.county, pls16.city
FROM pls_fy2018_libraries AS pls18 
FULL OUTER JOIN pls_fy2017_libraries AS pls17 ON pls18.fscskey = pls17.fscskey
FULL OUTER JOIN pls_fy2016_libraries AS pls16 ON  pls18.fscskey = pls16.fscskey
WHERE pls17.fscskey IS NULL OR pls16.fscskey IS NULL;