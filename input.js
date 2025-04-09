// Stores the active TCP connection object.
let connection;
const { keyMovement, chatInputs } = require("./constants");

// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput);
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

const handleUserInput = (key) => {
  //code handling the key press here
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }

  const chatOutputs = chatInputs[key];

  if (chatOutputs) {
    connection.write(`Say: ${chatOutputs}`);
  }

  const direction = keyMovement[key];

  if (direction) {
    connection.write(`Move: ${direction}`);
  }

};

module.exports = setupInput;