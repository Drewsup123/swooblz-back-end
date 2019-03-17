const express = require("express");
const cors = require("cors");
const server = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//database imports
const db = require("../database/dbConfig");
//socket.io imports
const app = require('express')();
const server_io = require('http').Server(app);
const io = require('socket.io')(server_io);

//middleware
server.use(express.json());
server.use(cors());
/*

GET REQUESTS

*/
server.get("/", (req, res) => {
    res.send("Everything seems to be working fine or is it? duh duh duh!!!");
});

/*

POST REQUESTS

*/
// Returns the id inside of an array
server.post("/register", (req, res) => {
    let user = req.body;
    // console.log(user);
    if(!user.username || !user.email || !user.password){
        res.status(401).send("please enter username, password, and email");
    }else{
        const hashed = bcrypt.hashSync(user.password, 14);
        // console.log("Password hashed : ", typeof hashed)
        user.password = hashed;
        db("users")
        .insert(user, "*")
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }
})

server.post("/login", (req, res) => {
    let {email, username, password} = req.body;
})

module.exports = server;