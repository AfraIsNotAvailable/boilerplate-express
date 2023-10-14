let express = require('express');
let app = express();
require('dotenv').config()

console.log('Hello World');

app.get("/", function(req, res) {
    // res.send("Hello Express");
    absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
});

app.get("/json", function (req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "HELLO JSON"});
    } else {
        res.json({"message": "Hello json"});
    }
});

app.use("/public", express.static(__dirname + "/public"));


































 module.exports = app;
