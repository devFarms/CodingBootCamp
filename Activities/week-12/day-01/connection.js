password: "root";
database: "root";

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
})