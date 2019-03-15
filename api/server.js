const express = require("express");
const cors = require("cors");
const server = express();

//middleware
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
    res.send("Everything seems to be working fine or is it? duh duh duh!!!");
});

module.exports = server;