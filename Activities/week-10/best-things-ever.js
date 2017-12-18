var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function (error, data) {
    if (error) {
        console.log(error);
    } else {
        var splitArr = data.split(",");
        splitArr.forEach(function(elem) {
            console.log(elem);
        })
    }
});
