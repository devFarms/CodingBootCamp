USE top_songsDB;
CREATE TABLE top_albums (
  id INT NOT NULL,
  artist VARCHAR(100) NULL,
  album VARCHAR(100) NULL,
  release_year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (id)
);

SELECT artist
FROM top5000
INNER JOIN top_albums ON top5000.artist = top_albums.artist WHERE artist = "Nirvana";

SELECT column_name(s)
FROM table1
INNER JOIN table2 ON table1.column_name = table2.column_name;