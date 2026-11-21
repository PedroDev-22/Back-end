CREATE TABLE meat_poultry_egg_establishments ( 
    establishment_number text CONSTRAINT est_number_key PRIMARY KEY, 
    company text, 
    street text, 
    city text, 
    st text, 
    zip text, 
    phone text, 
    grant_date date, 
    activities text, 
    dbas text 
); 

CREATE INDEX company_idx ON meat_poultry_egg_establishments (company);

SELECT count(*) 
FROM meat_poultry_egg_establishments;