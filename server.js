"use strict"
const express = require("express");
const mysql = require("mysql2");
const app = express();


const db = mysql.createConnection({
    host: "10.0.5.11",
    user: "develop",
    database: "sites",
    password: "colocation"
});

db.connect(function(err){
    if (err) {
        return console.error("Error: " + err.message);
    }else{
        console.log("Connection to master-node seccess!");
    }
});



app.get("/", function(req, res){
    db.query("select * from Product limit 5", function(err, result, fields){ //ProductLang
        if (err) throw err;
        res.json({
            status: 200,
            result, 
            message: "Select seccessfully"
        })
    })
});

app.get("/about", function(req, res){
    res.send("<h2>About page</h2>");
});

app.listen(3012);