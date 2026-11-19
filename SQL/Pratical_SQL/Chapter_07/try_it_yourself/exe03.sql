SELECT
    percentile_cont(.5) WITHIN GROUP (
        ORDER BY
            round(
                (
                    us_2019.pop_est_2019::numeric - us_2010.estimates_base_2010
                ) / us_2010.estimates_base_2010 * 100,
                1
            )
    )
FROM
    us_counties_pop_est_2019 AS us_2019
    JOIN us_counties_pop_est_2010 AS us_2010 ON us_2019.state_name = us_2010.state_name
    AND us_2019.county_name = us_2010.county_name;