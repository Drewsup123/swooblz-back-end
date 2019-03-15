const express = require("express");
const cors = require("cors");
const server = express();

//socket.io imports
const app = require('express')();
const server_io = require('http').Server(app);
const io = require('socket.io')(server_io);

//middleware
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
    res.send("Everything seems to be working fine or is it? duh duh duh!!!");
});

module.exports = server;