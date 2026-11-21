ALTER TABLE albums
ALTER COLUMN catalog_code
SET
    NOT NULl;

ALTER TABLE albums
ALTER COLUMN title
SET
    NOT NULl;

ALTER TABLE albums
ALTER COLUMN artist
SET
    NOT NULl;

-- To identify the album.
ALTER TABLE songs
ALTER COLUMN title
SET
    NOT NULl;

-- To identify the song
ALTER TABLE songs ADD CONSTRAINT songs_id_key PRIMARY KEY (song_id);

ALTER TABLE albums ADD CONSTRAINT albums_id_key PRIMARY KEY (album_id);

-- To don't repeat the id on both

-- + Add foreign key at album_id on songs to make a relation between both's album_id