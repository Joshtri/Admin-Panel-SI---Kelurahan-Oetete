"use strict";

//call the express function & also create mysql function.
var express = require("express");

var mysql = require("mysql");

var app = express(); //untuk memberitahu template engine ada di views.

app.set("view engine", "ejs");
app.set("views", "views"); //to retelling our data in folder views.

var db = mysql.createConnection({
  host: "127.0.0.1",
  database: "db_kelurahan_oetete",
  user: "root",
  password: ""
});
db.connect(function (err) {
  if (err) throw err;
  console.info("database connected");
  var querry = "SELECT * FROM KELUARGA";
  db.query(querry, function (err, result) {
    var users = JSON.parse(JSON.stringify(result));
    console.info("hasil database => ", users);
    app.get("/", function (req, res) {
      res.render("index", {
        users: users,
        title: "Tester data"
      });
    });
  });
});
app.listen(8000, function () {
  console.info("server ready......");
});