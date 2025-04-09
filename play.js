const net = require("net");
const connect = require("./client");
const setupInput = require("./input");


console.log("Connecting ...");
const someConnection = connect();
setupInput(someConnection);