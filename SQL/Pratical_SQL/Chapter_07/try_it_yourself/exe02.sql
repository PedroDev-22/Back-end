SELECT '2019' AS year, pop_est_2019 
FROM us_counties_pop_est_2019
UNION 
SELECT '2010' AS year, estimates_base_2010
FROM us_counties_pop_est_2010;