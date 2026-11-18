SELECT
    county_name,
    state_name,
    births_2019,
    deaths_2019,
    births_2019::numeric(11, 2) / deaths_2019 AS ratio_of_births
FROM
    us_counties_pop_est_2019
WHERE
    state_name = 'New York'
ORDER BY
    ratio_of_births;