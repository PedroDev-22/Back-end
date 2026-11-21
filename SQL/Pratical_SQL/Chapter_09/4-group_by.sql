SELECT stabr
FROM pls_fy2018_libraries 
GROUP BY stabr 
ORDER BY stabr;

SELECT city, stabr 
FROM pls_fy2018_libraries 
GROUP BY city, stabr 
ORDER BY city, stabr;

SELECT stabr, count(*) 
FROM pls_fy2018_libraries 
GROUP BY stabr 
ORDER BY count(*) DESC;

----

SELECT stabr, stataddr, count(*) 
FROM pls_fy2018_libraries 
GROUP BY stabr, stataddr 
ORDER BY stabr, stataddr;

