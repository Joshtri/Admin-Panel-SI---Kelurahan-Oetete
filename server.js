//call the express function & also create mysql function.
const express = require("express");
const mysql = require("mysql");


const app = express();

//untuk memberitahu template engine ada di views.
app.set("view engine", "ejs");
app.set("views", "views");//to retelling our data in folder views.

const db = mysql.createConnection({
   host: "127.0.0.1",
   database:"db_kelurahan_oetete",
   user:"root",
   password:""

 })

 db.connect((err)=>{
   if(err) throw err
   console.info("database connected");

   const querry = "SELECT * FROM KELUARGA";
   db.query(querry,(err,result)=>{
      const users = JSON.parse(JSON.stringify(result));
      console.info("hasil database => ",users);
      app.get("/", (req,res)=>{
         res.render("index", {users: users, title: "Tester data"});
      });
   });
});

 app.listen(8000,()=>{
    console.info("server ready......");
 })