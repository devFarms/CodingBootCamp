var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3307,
  database: "top_songsdb"
});

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT top5000.song, top_albums.album FROM top5000 INNER JOIN top_albums ON top5000.artist = top_albums.artist;", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//     con.end();
//   });

// FIRST ACTIVITY
// Write a Select statment to get everything from the top5000 table
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM top5000;", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//     con.end();
//   });

// Write a select statement to get all songs where the artist is queen
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM top5000 WHERE artist = 'Queen';", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//     con.end();
//   });

// write a select statement to get all songs between years 1950 and 2005
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM top5000 WHERE release_year BETWEEN 1950 AND 2005;", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//     con.end();
//   });

// write a join to join top5000 and top_albums by artist
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT top5000, top_albums INNER JOIN top5000.artist = top_albums.artist;", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
    con.end();
  });
// write a query to update a row by position
// write a query to delete a row by position
// write a query to insert a row into top albums