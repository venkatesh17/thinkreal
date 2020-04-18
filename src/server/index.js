var express = require("express");
var app = express();
var cors = require("cors")
var data = require("./app.json")

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.get("/candidates",  cors(corsOptions), (req, res, next) => {
    res.json({"candidates":data.candidates});
})

app.get("/questions",  cors(corsOptions),(req, res, next) => {
    res.json({"questions":data.questions});
});

app.get("/applications", cors(corsOptions), (req, res, next) => {
    res.json({"applications":data.applications});
});


app.listen(5000, () => {
 console.log("Server running on port 5000");
});