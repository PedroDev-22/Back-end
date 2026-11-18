SELECT sum(pop_est_2019) AS county_sum, 
       round(avg(pop_est_2019), 0) AS county_average, 
       percentile_cont(0.0) 
       WITHIN GROUP (ORDER BY pop_est_2019) AS county_median 
FROM us_counties_pop_est_2019;

SELECT percentile_cont(ARRAY[.25,.5,.75]) 
       WITHIN GROUP (ORDER BY pop_est_2019) AS quartiles 
FROM us_counties_pop_est_2019;

SELECT mode() WITHIN GROUP (ORDER BY births_2019) 
FROM us_counties_pop_est_2019;