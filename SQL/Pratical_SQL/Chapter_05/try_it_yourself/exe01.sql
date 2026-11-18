COPY movies
FROM 'arquivo_que_sera_usado'
WITH (FORMAT CSV, HEADER, DELIMITER ':', QUOTE: '#')