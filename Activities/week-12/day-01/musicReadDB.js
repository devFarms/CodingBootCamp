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
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}
