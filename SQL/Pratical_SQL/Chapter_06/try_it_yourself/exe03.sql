SELECT
    percentile_cont(.5) WITHIN GROUP (
        ORDER BY
            pop_est_2019
    ) AS median_state
FROM
    us_counties_pop_est_2019
WHERE
    state_name = 'New York';

SELECT
    percentile_cont(.5) WITHIN GROUP (
        ORDER BY
            pop_est_2019
    ) AS median_state
FROM
    us_counties_pop_est_2019
WHERE
    state_name = 'California';

-- New York: 86687 | California: 187029
-- California > New York