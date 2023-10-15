let express = require('express');
let app = express();
require('dotenv').config()

console.log('Hello World');

app.use(function (req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get("/", function(req, res) {
    absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
});

app.get("/json", function (req, res) {
    response = "Hello json";

    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = response.toUpperCase();
    }else{
        response = "Hello json";
    }

    res.json({ "message": response });
    //does it work?
});

app.use("/public", express.static(__dirname + "/public"));


































 module.exports = app;
