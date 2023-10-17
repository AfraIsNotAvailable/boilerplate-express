let express = require("express");
const res = require("express/lib/response");
let app = express();
require("dotenv").config();

console.log("Hello World");

app.use(function (req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get("/", function (req, res) {
    absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
});

app.get(
    "/now",
    function (req, res, next) {
        req.time = new Date().toString();
        next();
    },
    function (req, res) {
        res.send({ time: req.time });
    }
);

app.get("/json", function (req, res) {
    response = "Hello json";

    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = response.toUpperCase();
    } else {
        response = "Hello json";
    }

    res.json({ message: response });
    //does it work?
});

app.get("/:word/echo", (req, res) => {
    res.json({ echo: req.params.word });
});

app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
