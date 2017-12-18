var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3307,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "music_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO songs (title, artist, genre) VALUES ('Behind the Wheel', 'Depeche Mode', 'Pop Electronic')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      connection.end();
    });
  });