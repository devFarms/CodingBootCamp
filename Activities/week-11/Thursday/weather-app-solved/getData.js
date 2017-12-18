var fs = require("fs");

var logger = function(msg, func){
    console.log(msg);
    func();
}

var isFunc = function(doRunFunc, someFunc){
    if (doRunFunc) {
        someFunc();
    }
}

var myFuncFunc = function(func, val) {
    return function(){
        return func(val);
}

fs.writeFile("log.txt", "nice", function(err){
    if (err) console.log(err);
})