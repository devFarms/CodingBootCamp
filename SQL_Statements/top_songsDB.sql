DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
	id INT NOT NULL,
	artist VARCHAR(100),
	song VARCHAR(100),
	release_year INT NULL,
	raw_total DECIMAL (10, 4),
	raw_usa DECIMAL (10, 4),
	raw_uk DECIMAL (10, 4),
	raw_eur DECIMAL (10, 4),
	raw_row DECIMAL (10, 4),
	PRIMARY KEY (id)
);

INSERT INTO top5000 ( id, artist, song, release_year, raw_total, raw_usa, raw_uk, raw_eur, raw_row ) VALUES ( 1,"Bing Crosby","White Christmas",1942,39.903,23.929,5.7,2.185,0.54 );

USE top_songsDB;
SELECT * FROM top5000;

SELECT * FROM top_songsdb WHERE artist = "Roy Orbison"

SELECT * FROM top_songsdb.top5000;

-- A query which returns all data for songs sung by a specific artist
SELECT * FROM top_songsdb.top5000 WHERE artist = "Nirvana";

-- A query which returns all artists who appear within the top 5000 more than once
SELECT artist, COUNT(artist) FROM top_songsdb.top5000 GROUP BY artist HAVING COUNT(artist) > 1;

SELECT artist FROM top_songsdb.top5000 WHERE artist > 1;

SELECT artist COUNT(artist) FROM top_songsdb.top5000 GROUP BY artist HAVING (COUNT(artist) > 1);

-- A query which returns all data contained within a specific range
SELECT * FROM top_songsdb.top5000 WHERE release_year BETWEEN 2000 AND 2001;

-- A query which searches for a specific song in the top 5000 and returns the data for it
SELECT * FROM top_songsdb.top5000 WHERE song = "Yeah!";


-- HINT: There are some MySQL queries which could make some of these tasks even easier to accomplish. Feel free to look at MySQL’s documentation to find some of them.