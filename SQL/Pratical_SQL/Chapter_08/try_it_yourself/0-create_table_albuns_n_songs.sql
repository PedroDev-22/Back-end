CREATE TABLE albums ( 
    album_id bigint GENERATED ALWAYS AS IDENTITY, 
    catalog_code text, 
    title text, 
    artist text, 
    release_date date, 
    genre text, 
    description text 
); 
 
CREATE TABLE songs ( 
    song_id bigint GENERATED ALWAYS AS IDENTITY, 
    title text, 
    composers text, 
    album_id bigint 
);