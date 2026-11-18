CREATE TABLE us_counties_pop_est_2019 (
    state_fips text,
    county_fips text,
    region smallint,
    state_name text,
    county_name text,
    area_land bigint,
    area_water bigint,
    internal_point_lat numeric(10, 7),
    internal_point_lon numeric(10, 7),
    pop_est_2018 integer,
    pop_est_2019 integer,
    births_2019 integer,
    deaths_2019 integer,
    international_migr_2019 integer,
    domestic_migr_2019 integer,
    residual_2019 integer,
    CONSTRAINT countries_2019_key PRIMARY KEY (state_fips, county_fips)
);

SELECT
    *
FROM
    us_counties_pop_est_2019;

-- COPY us_counties_pop_est_2019
-- FROM '/home/pedro/Documentos/Programação/Aprendizado/Back-end/SQL/Pratical_SQL/Chapter_05/dados/us_counties_pop_est_2019.csv'
-- WITH (FORMAT CSV, HEADER);

SELECT county_name, state_name, area_land
FROM us_counties_pop_est_2019
ORDER BY area_land DESC
LIMIT 3;

SELECT county_name, state_name, internal_point_lat, internal_point_lon 
FROM us_counties_pop_est_2019 
ORDER BY internal_point_lon DESC 
LIMIT 5;
